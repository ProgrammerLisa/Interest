const http = require('http')
const express = require('express')
const bodyParser = require('body-parser')
const fs = require('fs')
const app = express()
const server = http.createServer(app)
const io = require('socket.io')(server)

function readText (pathname) {
  var bin = fs.readFileSync(pathname)

  if (bin[0] === 0xEF && bin[1] === 0xBB && bin[2] === 0xBF) {
    bin = bin.slice(3)
  }

  return bin.toString('utf-8')
}

/**
 * 设置跨域访问
 */
app.all('*', function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'X-Requested-With, accept, origin, content-type')
  res.header('Access-Control-Allow-Methods', 'PUT,POST,GET,DELETE,OPTIONS')
  res.header('X-Powered-By', ' 3.2.1')
  res.header('Content-Type', 'application/json;charset=utf-8')
  next()
})

/**
 * 将请求体变成熟悉的键值对样子
 */
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

var roomList = []
var users = [
  {account: 'lisa', password: '123456'},
  {account: 'arya', password: '654321'}
]

const equals = (aObj, bObj) => {
  let a = JSON.parse(JSON.stringify(aObj)), b = JSON.parse(JSON.stringify(bObj))
  if (a === b) return true;
  if (a instanceof Date && b instanceof Date) return a.getTime() === b.getTime()
  if (!a || !b || (typeof a !== 'object' && typeof b !== 'object')) return a === b
  if (a.prototype !== b.prototype) return false
  let keys = Object.keys(a)
  if (keys.length !== Object.keys(b).length) return false
  return keys.every(k => equals(a[k], b[k]))
}

/**
 * 创建房间
 */
app.post('/api/chat/add_room', function(req, res, next) {
  if (roomList.length > 0) {
    roomList.forEach(room => {
      if (room.roomName === req.body.roomName) {
        res.json({code: 403, msg: '房间已存在'})
      } else if (room.upperHand === req.body.upperHand) {
        res.json({code: 405, msg: '已在房间 请退出房间后再重建'})
      } else {
        addRoomSuccess(req, res)
      }
    })
  } else {
    addRoomSuccess(req, res)
  }
})

/**
 * 进入房间
 */
app.post('/api/chat/into_room', function(req, res, next) {
  if (roomList.length > 0) {
    roomList.forEach(room => {
      if (room.roomName === req.body.roomName) {
        if (room.upperHand === req.body.defensive) {
          res.json({code: 405, msg: `已在房间`})
        } else if (room.defensive === req.body.defensive) {
          res.json({code: 405, msg: `已在${req.body.upperHand}的房间[${req.body.roomName}]`})
        } else {
          room.defensive = req.body.defensive
          connectSocket('/' + req.body.roomId)
          res.json({code: 200, data: room, msg: 'success'})
        }
      }
    })
  } else {
    res.json({code: 404, msg: '房间不存在'})
  }
})

app.post('/api/login', function(req, res, next) {
  let flag = false
  users.forEach(obj => {
    if (equals(obj, req.body)) {
      flag = true
    }
  })
  if (flag) res.json({code: 200, data: req.body, msg: 'success'})
  else res.json({code: 401, msg: '用户名或密码错误'})
})

function addRoomSuccess(req, res) {
  roomList.push(req.body)
  connectSocket(req.body.roomId)
  res.json({code: 200, data: req.body, msg: '创建成功'})
}

function connectSocket(roomId) {
  io.of('/' + roomId).on('connection', function(socket) {
    var roomInfo = roomList.filter(v => v.roomId = roomId)[0]
    socket.emit('enter')
    socket.on('enter', function(name) {
      socket.name = name
    })
    socket.on('ready', function(data) {
      data === roomInfo.upperHand ? roomInfo.upperHandReady = true : roomInfo.defensiveReady = true
      if (roomInfo.upperHandReady && roomInfo.defensiveReady) {
        socket.emit('beginGame', roomInfo)
        socket.broadcast.emit('beginGame', roomInfo)
      }
    })
    socket.on('finish', function(data) {
      socket.broadcast.emit('finish', {...data})
    })
    socket.on('disconnect', function() {
      roomList.forEach((v, index) => {
        if (v.upperHand === socket.name && !v.defensive) {
          roomList.splice(index, 1)
        }
        if (v.upperHand === socket.name) {
          v.upperHandReady = false
          v.defensiveReady = false
          v.upperHand = v.defensive
          v.defensive = ''
        }
        if (v.defensive === socket.name) {
          v.upperHandReady = false
          v.defensiveReady = false
          v.defensive = ''
        }
      })
      socket.broadcast.emit('reset')
    })
  })
}

server.listen(9277)