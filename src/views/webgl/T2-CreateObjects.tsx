import React, { Component } from 'react'
import { Transition, Button } from 'semantic-ui-react'
import * as THREE from 'three'
import TWEEN from '@tweenjs/tween.js'
import InitCanvas from '../../common/initCanvas'

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
  buttonType: string | undefined,
  initCanvas: any
}
const remarks: remarksType[] = [
  { text: '此项目为简单的创建物体', animation: 'jiggle'  },
  { text: '随机位置创建随机大小的球体', animation: 'fade up' },
  { text: '试试吧', animation: 'fade up' }
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

const CreateGrid = (props: any) => {
  return (<Button inverted color='violet' className='float-button' onClick={() => addGeometry(props)}>创造一个球体</Button>)
}

const addGeometry = (props: any) => {
  const options = {
    material:  new THREE.MeshBasicMaterial({
      color: '#' + (Math.random() * 0xffffff<<0).toString(16),
      wireframe: false,
      wireframeLinewidth: 1
    }),
    geometry: new THREE.SphereGeometry(Math.random() * 0.5, Math.random() * 0.5, Math.random() * 0.5)
  }
  props.canvas.initObject({
    ...options,
    x: Math.random() * 10 - 5,
    y: Math.random() * 10 - 5,
    z: Math.random() * 5,
    action: (Mesh: any) => {
      new TWEEN.Tween(Mesh.position).to({ z: Math.floor((Math.random() > 0.5 ? -10 : 10) * Math.random()) }, 300).repeat(0).start()
    },
    animation: () => {
      TWEEN.update()
    }
  })
}

class TransitionRemarks extends Component<{}, TransitionRemarksState> {
  state = { visible: false, duration: 800, text: '', animation: '', index: 0, buttonType: '', initCanvas: null }
  componentDidMount() {
    const ElementNode: any = document.getElementById('Sweet-Kingdom')
    this.readRemarks(0, remarks, () => {
      this.setState({ visible: false })
      const options = {
        node: ElementNode,
        controls: {
          autoRotate: true
        }
      }
      setTimeout(() => {
        const initCanvas = new InitCanvas(options)
        this.setState({
          buttonType: 'grid',
          initCanvas: initCanvas
        })
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
        createButton = (<CreateGrid canvas={this.state.initCanvas} />)
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