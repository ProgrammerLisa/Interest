import React, { Component } from 'react'
import '../../assets/sass/Gobang.css'

function Square(props: any) {
  return (
    <button className={`square ${props.name}`} onClick={() => props.onClick()}>
      {props.name === 'board-line' ? <span className={`piece ${props.value}`}></span> : ''}
    </button>
  )
}


interface SquareType {
  [index: number]: string
}

interface CheckerboardProps {
  square: SquareType,
  onClick: (i: number) => void,
  column: number,
  row: number
}
class Checkerboard extends Component<CheckerboardProps, {}> {
  renderSquare(i: number, type: String) {
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

interface GameState {
  winner: any,
  column: number,
  row: number,
  square: SquareType,
  balckIsNext: boolean
}
class Game extends Component<{}, GameState> {
  constructor(props: any) {
    super(props)
    const row = 20
    const column = 20
    this.state = {
      winner: null,
      column: column,
      row: row,
      square: new Array(column * row),
      balckIsNext: false
    }
  }
  hanldClick (i: number): void {
    let square = this.state.square
    if (square[i]) return
    square[i] = this.state.balckIsNext ? 'piece-black' : 'piece-white'
    let winner: any = ''
    if (this.state.winner) {
      return
    } else {
      winner = calculateWinner(square, i, this.state.row)
      if (winner) {
        console.log(winner.member)
        winner.member.forEach((v: number) => {
          square[v] = 'piece-winner'
        })
      }
    }
    this.setState({
      winner: winner,
      square: square,
      balckIsNext: !this.state.balckIsNext
    })
  }
  render() {
    const winner = this.state.winner
    let status
    if (winner) {
      status = 'winner --- ' + winner.winner
    } else {
      status = 'Next Player --- ' + (this.state.balckIsNext ? '黑子' : '白子')
    }
    return (
      <div>
        <p>{status}</p>
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