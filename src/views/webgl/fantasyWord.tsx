import React, { Component } from 'react'
// import * as THREE from 'three'
// import { OrbitControls } from 'three-orbitcontrols-ts'
// import Stats from 'stats.js'
import { Transition, Button } from 'semantic-ui-react'

const remarks = [
  { text: '哟 来了..', animation: 'jiggle'  },
  { text: 'a', animation: 'fade up' },
  { text: 'b', animation: 'fade up' },
  { text: 'c', animation: 'fade up' }
]

interface TransitionRemarksState {
  visible: boolean,
  duration: number,
  text: string,
  animation: string,
  index: number
}
class TransitionRemarks extends Component<{}, TransitionRemarksState> {
  state = { visible: false, duration: 1000, text: '', animation: '', index: 0 }
  componentDidMount() {
    remarks.forEach((Element, index) => {
      setTimeout(() => {
        this.setState({
          visible: true,
          text: Element.text,
          animation: Element.animation,
          index: index
        })
      }, 1000)
    })
  }
  render() {
    const { visible, duration, text, animation } = this.state
    return (
      <Transition
        animation={animation}
        duration={duration}
        visible={visible}
      >
        <p>{text}</p>
      </Transition>
    )
  }
}

export default TransitionRemarks