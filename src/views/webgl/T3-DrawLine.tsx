import InitCanvas from '../../common/initCanvas'
import React, { Component } from 'react'
class CanvasLine extends Component {
  componentDidMount() {
    const canvasNode = document.getElementById('Sweet-Kingdom')
    const options = {
      node: canvasNode
    }
    const initCanvas = new InitCanvas(options)
  }
  render() {
    return <div id='Sweet-Kingdom'></div>
  }
}
export default CanvasLine