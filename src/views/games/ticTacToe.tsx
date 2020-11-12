import React from 'react'
import { Button } from 'semantic-ui-react'
import '../../assets/sass/Gobang-style.css'

interface SquareType {
  [index: number]: string
}

interface SquareProps {
  highlight: string,
  onClick: () => void,
  value: string
}
function Square (props: SquareProps) {
  return (
    <button className={`square ${props.highlight}`} onClick={props.onClick}>
      {props.value}
    </button>
  )
}

interface BoardProps {
  squares: SquareType,
  highlight: string[],
  onClick: (i: number, coordinate: any) => void
}
class Board extends React.Component<BoardProps, {}> {
  renderSquare (i: number, coordinate: any) {
    return (
      <Square
        key={`square${i}`}
        value={this.props.squares[i]}
        highlight={this.props.highlight[i]}
        onClick={() => this.props.onClick(i, coordinate)}
      />
    )
  }
  renderBoard () {
    let boardColumn = [], count = 0
    for (var column = 0; column < 3; column++) {
      let boardRow = []
      for (var row = 0; row < 3; row++) {
        boardRow.push(this.renderSquare(count, [column + 1, row + 1]))
        count++
      }
      boardColumn.push(<div className="board-row" key={`column${column}`}>{boardRow}</div>)
    }
    return boardColumn
  }
  render () {
    return (
      <div>
        {this.renderBoard()}
      </div>
    )
  }
}


interface HistoryType {
  squares: SquareType,
  highlight: string,
  coordinate: any,
  className: string
}
interface GobangProps {

}
interface GobangState {
  history: any,
  stepNumber: number,
  xIsNext: boolean,
  sort: boolean
}
class Gobang extends React.Component<GobangProps, GobangState> {
  componentDidMount () {
    window.addEventListener('mousedown', (e) => {
      document.body.classList.add('mouse-navigation')
      document.body.classList.remove('kbd-navigation')
    })
    window.addEventListener('keydown', (e) => {
      if (e.keyCode === 9) {
        document.body.classList.remove('mouse-navigation')
        document.body.classList.add('kbd-navigation')
      }
    })
    window.addEventListener('click', (e) => {
      if ((e.target as any).tagName === 'A') {
        e.preventDefault()
      }
    })
  }
  componentWillUnmount () {
    document.body.classList.remove('mouse-navigation')
    document.body.classList.remove('kbd-navigation')
  }
  handleClick (i: number, coordinate: any) { 
    const history = this.state.history.slice(0, this.state.stepNumber + 1)
    const current = history[history.length - 1]
    const squares = current.squares.slice()
    const highlight = current.highlight
    if (squares[i] || calculateWinner(squares)) return
    history.forEach((map: any) => { map.className = '' })
    squares[i] = this.state.xIsNext ? 'X' : 'O'
    this.setState({
      history: history.concat([{
        squares: squares,
        highlight: highlight,
        coordinate: coordinate,
        className: 'active-history'
      }]),
      xIsNext: !this.state.xIsNext,
      stepNumber: history.length
    })
  }

  jumpTo (step: number) {
    let history = this.state.history.map((map: HistoryType) => {
      map.className = ''
      return map
    })
    history[step].className = 'active-history'
    this.setState({
      xIsNext: (step % 2) === 0,
      stepNumber: step,
      history: history
    })
  }

  sort (sort: boolean) {
    if (sort !== this.state.sort) {
      this.setState({
        sort: !this.state.sort
      })
    }
  }
  
  constructor (props: GobangProps) {
    super(props)
    this.state = {
      history: [{
        squares: Array(9).fill(null),
        highlight: Array(9).fill(null),
        coordinate: [],
        className: 'active-history'
      }],
      xIsNext: true,
      stepNumber: 0,
      sort: true
    }
  }

  render () {
    let history = this.state.history.slice()
    let current = history[this.state.stepNumber]
    const winner = calculateWinner(current.squares)
    const moves = history.map((step: HistoryType, move: number) => {
      let coordinateText = ''
      let historyAtrribute = history[move]
      if (historyAtrribute.coordinate.length > 0) coordinateText = `(${historyAtrribute.coordinate[0]}, ${historyAtrribute.coordinate[1]})`
      const desc = move ? `Go to move # ${move} ${coordinateText}` : 'Go to game start'
      return (
        <li key={`move${move}`}>
          <Button inverted color='pink' className={historyAtrribute.className} onClick={() => this.jumpTo(move)}>{desc}</Button>
        </li>
      )
    })

    let status
    if (winner) {
      status = `winner: ${winner.winner}`
      winner.member.forEach(Element => {
        current.highlight[Element] = 'winner-piece'
      })
    } else if (checkBoard(current.squares)) {
      status = `平局`
    } else {
      status = `Next player: ${this.state.xIsNext ? 'X' : 'O'}`
    }
    return (
      <div>
        <div>{status}</div>
        <div className="game">
          <div className="game-board">
            <Board squares={current.squares} highlight={current.highlight} onClick={(i, coordinate) => this.handleClick(i, coordinate)} />
          </div>
          <div className="game-info">
            <div>
              <Button inverted color='violet' onClick={() => this.sort(true)}>升序</Button>
              <Button inverted color='purple' onClick={() => this.sort(false)}>降序</Button>
            </div>
            <ul>{this.state.sort ? moves : moves.reverse()}</ul>
          </div>
        </div>
      </div>
    )
  }
}

function calculateWinner (squares: SquareType) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 4, 8],
    [2, 4, 6],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8]
  ]
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i]
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return { winner: squares[a], member: lines[i] }
    }
  }
  return null
}

function checkBoard (squares: SquareType) {
  for (var i in squares) {
    if (!squares[i]) return false
  }
  return true
}

export default Gobang
