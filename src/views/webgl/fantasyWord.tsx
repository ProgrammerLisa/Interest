import React, { Component } from 'react'
import * as THREE from 'three'
import { Transition, Button } from 'semantic-ui-react'
import draw, { createGeometry } from '../../common/initCanvas'


interface remarksType {
  text: string,
  animation: string
}
interface TransitionRemarksState {
  visible: boolean,
  duration: number,
  text: string,
  animation: string,
  index: number,
  buttonType: string | undefined
}

const remarks: remarksType[] = [
  { text: '哟 来了..', animation: 'jiggle'  },
  { text: 'a', animation: 'fade up' },
  { text: 'b', animation: 'fade up' }
]

const Preface = (props: TransitionRemarksState) => {
  return(
    <Transition
      animation={props.animation}
      duration={props.duration}
      visible={props.visible}
    >
      <p className='text-center'>{props.text}</p>
    </Transition>
  )
}

const CreateGrid = () => {
  return (<Button inverted color='violet' className='float-button' onClick={() => addGeometry()}>创造一个网格</Button>)
}

const addGeometry = () => {
  createGeometry({
    GeometryShape: new THREE.SphereGeometry(0.5, 0.5, 0.5),
    color: 0xcffffff,
    isDebug: true,
    castShadow: true
  })
  createGeometry({
    GeometryShape: new THREE.BoxBufferGeometry(0.5, 0.5, 0.5),
    color: 0xc9b6e4,
    isDebug: false,
    castShadow: true
  })
}

class TransitionRemarks extends Component<{}, TransitionRemarksState> {
  state = { visible: false, duration: 100, text: '', animation: '', index: 0, buttonType: '' }
  componentDidMount() {
    const ElementNode: any = document.getElementById('Sweet-Kingdom')
    this.readRemarks(0, remarks, () => {
      this.setState({ visible: false })
      setTimeout(() => {
        this.setState({ buttonType: 'grid' })
        draw(ElementNode)
      }, this.state.duration)
    })
  }
  
  readRemarks = (index = 0, arr: remarksType[], callback: any): any => {  
    const time = this.state.duration
    if (index >= remarks.length) {
      callback()
    } else {
      if (this.state.visible) {
        this.setState({
          visible: false,
          duration: time / 2
        })
        setTimeout(() => {
          return this.readRemarks(index, arr, callback)
        }, time / 1.5)
      } else {
        this.setState({
          visible: true,
          text: remarks[index].text,
          animation: remarks[index].animation,
          index: index,
          duration: time * 2
        })
        setTimeout(() => {
          return this.readRemarks(index + 1, arr, callback)
        }, time * 4)
      }
    }
  }

  render() {
    const { buttonType } = this.state
    let createButton
    switch (buttonType) {
      case 'grid':
        createButton = (<CreateGrid />)
        break
      default:
        createButton = ''
    }
    return (
      <>
        <Preface {...this.state} />
        <div id='Sweet-Kingdom'></div>
        {createButton}
      </>
    )
  }
}

export default TransitionRemarks