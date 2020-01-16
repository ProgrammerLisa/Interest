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
    const canvasNode = document.getElementById('Sweet-Kingdom')
    const canvas = this.initCanvas(canvasNode)
    canvas.initObject(this.objectOptions())
  }
  initCanvas = (canvasNode: any) => {
    const options = {
      node: canvasNode,
      rendererOption: { antialias: true },
      cameraOption: [45, window.innerWidth / window.innerHeight, 1, 4000],
      cameraPosition: [0, 0, 3],
      directionalLight: 0xffffff,
      lightIntensity: 1.5
    }
    const canvas = new InitCanvas(options)
    this.setState({ canvas: canvas })
    return canvas
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
      update: (Mesh: THREE.Mesh) => {
        Mesh.rotation.x += 0.02
        Mesh.rotation.y += 0.02
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
        <div id='Sweet-Kingdom'></div>
      </>
    )
  }
}
export default UseTexture