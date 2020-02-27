import * as React from 'react'
import io from 'socket.io-client'
import { Button, Input } from 'semantic-ui-react'
import { intoRoom, addRoom } from '../../utils/api/chat'
import { config } from '../../utils/request/config'
import Gobang from './Gobang-online'
/*
function renderMessageBox(props) {
  let box = []
  props.forEach((element, index) => {
    box.push(<p key={`message${index}`}>{element}</p>)
  })
  return <div>{box}</div>
}
*/
var socket: any
var userInfo: any = JSON.parse((localStorage as any).getItem('kmr_userInfo'))

interface SearchRoomProps {
  search: () => void,
  add: () => void,
  handelChage: (value: any) => void,
  sendValue: string,
  errorStatus: string
}

class SearchRoom extends React.Component<SearchRoomProps, {}> {
  render() {
    return (
      <div>
        <div className='flex-between'>
          <Button inverted color='violet' onClick={() => this.props.search()}>进入房间</Button>
          <Button inverted color='purple' onClick={() => this.props.add()}>创建房间</Button>
        </div>
        <Input
          icon='hand point left outline'
          iconPosition='left'
          label={{ tag: true, content: 'Go Fight !' }}
          labelPosition='right'
          placeholder='房间号'
          value={this.props.sendValue}
          onChange={(value) => this.props.handelChage(value)} />
        <p>{this.props.errorStatus}</p>
      </div>
    )
  }
}

interface WebSocketProps {

}
interface WebSocketState {
  sendValue: string,
  errorStatus: string,
  connectStatus: boolean,
  roomId: string
}
class WebSocket extends React.Component<WebSocketProps, WebSocketState> {
  constructor(props: WebSocketProps) {
    super(props)
    this.state = {
      sendValue: '',
      errorStatus: '',
      connectStatus: false,
      roomId: ''
    }
  }

  initSocket = (id: string) => {
    socket = io('ws://' + config.IP + '/' + id)
    // 连接通讯之后 将当前用户记录在socket服务
    socket.on('enter', () => {
      this.setState({
        connectStatus: true,
        roomId: id
      })
      socket.emit('enter', userInfo.account)
    })
  }

  search = () => {
    const inputText = this.state.sendValue
    if (inputText) {
      intoRoom({ roomName: inputText, defensive: userInfo.account }).then(res => {
        if ((res as any).code === 200) {
          this.initSocket(res.data.roomId)
        } else {
          console.log(res)
        }
      })
    }
  }

  add = () => {
    const inputText = this.state.sendValue
    if (inputText) {
      addRoom({upperHand: userInfo.account, roomName: inputText, roomId: new Date().getTime()}).then(res => {
        if ((res as any).code === 200) {
          this.initSocket(res.data.roomId)
        } else {
          console.log(res)
        }
      })
    }
  }

  handelChage = (e: any) => {
    this.setState({
      sendValue: e.target.value
    })
  }

  render() {
    return !this.state.connectStatus ? <SearchRoom {...this.state} handelChage={this.handelChage} search={this.search} add={this.add} /> :
    <Gobang userInfo={userInfo} roomId={this.state.roomId} socket={socket} />
  }
}

export default WebSocket
