import React, { Component } from 'react'
import { Button } from 'semantic-ui-react'
import '../../assets/sass/Gobang-style.css'
const user = JSON.parse((localStorage as any).getItem('kmr_userInfo')).account

const boardRow = 20
const boardColumn = 20

interface SquareType {
  [index: number]: string
}

interface SquareProps {
  key: string,
  name: string,
  value: string,
  onClick: () => void
}

function Square(props: SquareProps) {
  return (
    <button className={`square ${props.name}`} onClick={() => props.onClick()}>
      {props.name === 'board-line' ? <span className={`piece ${props.value}`}></span> : ''}
    </button>
  )
}

interface CheckerboardProps {
  square: SquareType,
  onClick: (i: number) => void,
  column: number,
  row: number
}

class Checkerboard extends Component<CheckerboardProps, {}> {
  renderSquare(i: number, type: string) {
    return (
      <Square key={`square${i}`} name={type} value={this.props.square[i]} onClick={() => {this.props.onClick(i)}} />
    )
  }
  renderRow(type: string, columnSum: number, rowSum: number) {
    let num = rowSum + 1
    if (type === 'board-line') num = rowSum
    let columns = [], count = 0
    for (let column = 0; column < columnSum + 1; column++) {
      let rows = []
      for (let row = 0; row < num; row++) {
        rows.push(this.renderSquare(count, type))
        count++
      }
      columns.push(<div className="board-row" key={`row${column}`}>{rows}</div>)
    }
    return columns
  }
  render() {
    return (
      <div className="board-container">
        <div className="board-border"></div>
        <div className="board-foundation-container">{this.renderRow('', this.props.column, this.props.row)}</div>
        <div className="board-line-container">{this.renderRow('board-line', this.props.column, this.props.row)}</div>
      </div>
    )
  }
}

interface GameProps {
  socket: any,
  userInfo: any,
  roomId: string
}
interface GameState {
  winner: any,
  column: number,
  row: number,
  square: SquareType,
  selfIsNext: boolean,
  role: string,
  otherRole: string,
  nextPlayer: string,
  canPlay: boolean,
  reset: boolean,
  upperHand: string,
  defensive: string
}

class Game extends Component<GameProps, GameState> {
  constructor(props: any) {
    super(props)
    this.state = {
      winner: null,
      column: boardColumn,
      row: boardRow,
      square: new Array(boardColumn * boardRow),
      selfIsNext: false,
      role: '',
      otherRole: '',
      nextPlayer: '',
      canPlay: false,
      reset: true,
      upperHand: '',
      defensive: ''
    }
  }

  UNSAFE_componentWillMount() {
    this.handleSocket()
  }

  ready = () => {
    this.props.socket.emit('ready', user)
  }

  beginGame = (roomInfo: any) => {
    if (user === roomInfo.upperHand) {
      this.setState({
        role: 'piece-black',
        otherRole: 'piece-white',
        nextPlayer: roomInfo.upperHand,
        selfIsNext: true,
        canPlay: true,
        reset: false,
        ...roomInfo
      })
    } else {
      this.setState({
        role: 'piece-white',
        otherRole: 'piece-black',
        nextPlayer: roomInfo.upperHand,
        selfIsNext: false,
        canPlay: false,
        reset: false,
        ...roomInfo
      })
    }
    console.log(this.state)
  }

  hanldClick (i: number) {
    const _this = this
    const socket = this.props.socket
    if (this.state.canPlay) {
      this.setSquare(i, false)
      socket.emit('finish', { nextPlayer: _this.state.nextPlayer, squareIndex: i })
    }
  }

  handleSocket() {
    const socket = this.props.socket
    socket.on('finish', (data: any) => {
      this.setSquare(data.squareIndex, true) 
    })
    socket.on('beginGame', (data: any) => {
      this.beginGame(data)
    })
    socket.on('reset', () => {
      this.setState({
        winner: null,
        column: boardColumn,
        row: boardRow,
        square: new Array(boardColumn * boardRow),
        selfIsNext: false,
        role:  '',
        otherRole:  '',
        nextPlayer:  '',
        canPlay: false,
        reset: true,
        upperHand: '',
        defensive: ''
      })
    })
  }

  setSquare(i: number, state: boolean) {
    let square = this.state.square
    if (square[i]) return
    square[i] = this.state.selfIsNext ? this.state.role : this.state.otherRole
    let winner: any = ''
    if (this.state.winner) {
      return
    } else {
      winner = calculateWinner(square, i, this.state.row)
      if (winner) {
        winner.member.forEach((v: number) => {
          square[v] = 'piece-winner'
        })
      } else {
        let nextPlayer = this.state.nextPlayer === this.state.upperHand ? this.state.defensive : this.state.upperHand
        this.setState({ nextPlayer: nextPlayer })
      }
    }
    this.setState({
      winner: winner,
      reset: winner ? true : false,
      square: square,
      canPlay: state,
      selfIsNext: !this.state.selfIsNext
    })
  }

  render() {
    const winner = this.state.winner
    let status
    if (winner) {
      status = 'winner --- ' + winner.winner
    } else {
      this.state.reset ? status = '' : status = '下一步 --- ' + (this.state.nextPlayer === user ? '我' : this.state.nextPlayer)
    }
    return (
      <div>
        <p>{status}</p>
        {
          this.state.reset ?
          <p className="text-center">
            <Button inverted color='violet' onClick={this.ready}>进入房间
              { winner ? '重新开始' : '开始' }
            </Button>
          </p> : null
        }
        <Checkerboard square={this.state.square} column={this.state.column} row={this.state.row} onClick={(i) => this.hanldClick(i)}></Checkerboard>
      </div>
    )
  }
}

function calculateWinner(square: SquareType, i: number, row: number) {
  var winnerList = [
    // 横向连接
    [i, i + 1, i + 2, i + 3, i + 4],
    [i - 1, i, i + 1, i + 2, i + 3],
    [i - 2, i - 1, i, i + 1, i + 2],
    [i - 3, i - 2, i - 1, i, i + 1],
    [i - 4, i - 3, i - 2, i - 1, i],
    // 纵向连接
    [i, i + row, i + row*2, i + row*3, i + row*4],
    [i - row, i, i + row, i + row*2, i + row*3],
    [i - row*2, i - row, i, i + row, i + row*2],
    [i - row*3, i - row*2, i - row, i, i + row],
    [i - row*4, i - row*3, i - row*2, i - row, i],
    // 左上-右下 斜向连接
    [i, i + row + 1, i + 2*(row + 1), i + (row + 1)*3, i + (row + 1)*4],
    [i - (row + 1), i, i + row + 1, i + 2*(row + 1), i + (row + 1)*3],
    [i - (row + 1)*2, i - (row + 1), i, i + row + 1, i + 2*(row + 1)],
    [i - (row + 1)*3, i - (row + 1)*2, i - (row + 1), i, i + row + 1],
    [i - (row + 1)*4, i - (row + 1)*3, i - (row + 1)*2, i - (row + 1), i],
    // 右上-左下 斜向连接
    [i, i + row - 1, i + 2*(row - 1), i + (row - 1)*3, i + (row - 1)*4],
    [i - (row - 1), i, i + row - 1, i + 2*(row - 1), i + (row - 1)*3],
    [i - (row - 1)*2, i - (row - 1), i, i + row - 1, i + 2*(row - 1)],
    [i - (row - 1)*3, i - (row - 1)*2, i - (row - 1), i, i + row - 1],
    [i - (row - 1)*4, i - (row - 1)*3, i - (row - 1)*2, i - (row - 1), i]
  ]
  let winner = null
  winnerList.forEach(rule => {
    let contentMap = rule.map(sub => {
      return square[sub]
    })
    if ((contentMap.join(',') + ',').replace(new RegExp(contentMap[0] + ',', 'gi'), '') === '') {
      winner =  { winner: square[i], member: rule }
    }
  })
  return winner
}

export default Game