import React, { Component } from 'react'
import InitCanvas from '../../common/initCanvas'
import * as THREE from 'three'
import texturesImage from '../../assets/img/disturb.jpg'
class DefaultGeometry extends Component {
  componentDidMount() {
    const canvasNode = document.getElementById('Sweet-Kingdom')
    const canvas = this.initCanvas(canvasNode)

    // 球形（半径长度，水平块的密度，垂直块的密度）
    const SphereGeometry = this.objectOptions(new THREE.SphereGeometry(60, 20, 20), [-400, 0, 200])
    
    // 二十面体（图形大小半径，大于零将不是二十面体，越大越圆滑）
    const IcosahedronGeometry = this.objectOptions(new THREE.IcosahedronGeometry(60, 0), [-200, 0, 200])
    
    // 八面体（图形大小半径，大于零将不是八面体，越大越圆滑）
    const OctahedronGeometry = this.objectOptions(new THREE.OctahedronGeometry(60, 0), [0, 0, 200])
    
    const GeometryList = [SphereGeometry, IcosahedronGeometry, OctahedronGeometry]
    
    for (let i = 0; i < GeometryList.length; i++) {
      let geometry = GeometryList[i]
      if (i === GeometryList.length - 1) {
        geometry.definedAnimate = (props: any) => {

          let timer = Date.now() * 0.0001

          props.Camera.position.x = Math.cos( timer ) * 800
          props.Camera.position.z = Math.sin( timer ) * 800
  
          props.Camera.lookAt(props.Scene.position)
          // for (let j = 0; j < GeometryList.length; i++) {
          //   GeometryList[j].mesh.rotation.x = timer * 5
          //   GeometryList[j].mesh.rotation.y = timer * 2.5
          // }
        }
      }
      canvas.initObject(geometry)
    }
  }
  initCanvas = (canvasNode: any) => {
    const options = {
      node: canvasNode,
      rendererOption: { antialias: true },
      cameraOption: [45, window.innerWidth / window.innerHeight, 1, 2000],
      cameraPosition: [0, 400, 0],
      directionalLight: 0xffffff,
      lightIntensity: 1.5
    }
    const canvas = new InitCanvas(options)
    return canvas
  }
  objectOptions = (geometry: any, position: number[]) => {
    const mesh = new THREE.Mesh()
    const loader = new THREE.TextureLoader()
    loader.load(
      texturesImage,
      function(texture) {
        mesh.material = new THREE.MeshPhongMaterial({ map: texture, side: THREE.DoubleSide })
        mesh.geometry = geometry
      }
    )
    mesh.position.set(position[0], position[1], position[2])
    const objectOptions = {
      mesh: mesh,
      definedAnimate: (props: any) => {
        let timer = Date.now() * 0.0001

        props.Camera.position.x = Math.cos( timer ) * 800
        props.Camera.position.z = Math.sin( timer ) * 800

        props.Camera.lookAt(props.Scene.position)

        props.Mesh.rotation.x = timer * 5
        props.Mesh.rotation.y = timer * 2.5
      }
    }
    return objectOptions
  }
  render() {
    return <div id='Sweet-Kingdom'></div>
  }
}
export default DefaultGeometry