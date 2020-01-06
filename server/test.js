const users = [
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

let flag = false
users.forEach(obj => {
  if (equals(obj, {account: 'lisa', password: '123456'})) {
    flag = true
  } else {
    console.log(obj)
  }
})

io.on('connection', function (socket) {
  socket.on('enter', function(name) {
    socket.name = name
    io.emit('enter', { name: socket.name })
  })
  
  socket.emit('enterSelf', { name: socket.name })
  socket.on('message', function (msg) {
    io.emit('message', { name: socket.name, message: msg })
  })
  socket.on('disconnect', function () {
    let deleteIndex
    roomList.forEach((v, index) => {
      if (v.master === socket.name) {
        if (v.member) {
          v.master = v.member
          v.member = ''
        } else {
          deleteObj = index
        }
      }
    })
    if deleteIndex roomList.splice(deleteIndex, 1)
    io.emit('leave', { name: socket.name })
  })
})


console.log(flag)
