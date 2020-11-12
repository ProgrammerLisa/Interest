import React, { Component } from 'react'
import InitCanvas from '../../common/initCanvas'
import * as THREE from 'three'
import texturesImage from '../../assets/img/disturb.jpg'
import { Button } from 'semantic-ui-react'
interface CanvasLineState {
  canvas?: any,
  mesh?: THREE.Mesh
}
class UseTexture extends Component<{}, CanvasLineState> {
  constructor(props: any) {
    super(props)
    this.state = {}
  }
  componentDidMount() {
    const canvasNode = document.getElementById('Canvas-Container')
    const canvas = this.initCanvas(canvasNode)
    canvas.initObject(this.objectOptions())
  }
  initCanvas = (canvasNode: any) => {
    const options = {
      node: canvasNode,
      rendererOption: { antialias: true },
      cameraOption: [45, window.innerWidth / window.innerHeight, 1, 4000],
      cameraPosition: [0, 0, 3]
    }
    const canvas = new InitCanvas(options)
    canvas.initObject({ mesh: this.lightOptions() })
    this.setState({ canvas: canvas })
    return canvas
  }
  lightOptions() {
    const light = new THREE.DirectionalLight(0xffffff)
    light.position.set(0, 0, 1)
    light.intensity = 1.5
    return light
  }
  objectOptions = (image?: any) => {
    const mesh = new THREE.Mesh()
    const loader = new THREE.TextureLoader()
    loader.load(
      image || texturesImage,
      function(texture) {
        mesh.material = new THREE.MeshPhongMaterial({ map: texture })
        mesh.geometry = new THREE.BoxBufferGeometry(1, 1, 1)
      }
    )
    const objectOptions = {
      mesh: mesh,
      definedAnimate: (props: any) => {
        props.Mesh.rotation.x += 0.02
        props.Mesh.rotation.y += 0.02
      }
    }
    this.setState({ mesh: mesh })
    return objectOptions
  }
  changeImage = (e: any) => {
    const _this = this
    const canvas = _this.state.canvas
    const reads = new FileReader()
    const file = e.target.files[0]
    reads.readAsDataURL(file)
    reads.onload = function() {
      const base64 = this.result
      canvas.removeObject(_this.state.mesh)
      canvas.initObject(_this.objectOptions(base64))
    }
  }
  render() {
    return (
      <>
        <div className='fixed-top-right choose-image'>
          <Button inverted color='violet'>换图</Button>
          <input type='file' accept='image/*' id='file-honey' className='file-input' onChange={this.changeImage} />
        </div>
        <div id='Canvas-Container'></div>
      </>
    )
  }
}
export default UseTexture