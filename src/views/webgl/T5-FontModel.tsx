import React from 'react'
import InitCanvas from '../../common/initCanvas'
import * as THREE from 'three'
import fontBg from '../../assets/img/disturb.jpg'
// console.log(fontJson)
/**
 * @method initCanvas 初始化场景
 */
const initCanvas = (canvasNode: any) => {
  const options = {
    node: canvasNode,
    rendererOption: { antialias: true },
    cameraOption: [45, window.innerWidth / window.innerHeight, 1, 2000],
    cameraPosition: [0, 0, 400]
  }
  const canvas = new InitCanvas(options)
  return canvas
}
class FontModule extends React.Component {
  canvas: any
  componentDidMount() {
    const canvasNode = document.getElementById('Canvas-Container')
    this.canvas = initCanvas(canvasNode)
    this.canvas.addLight(this.lightOptions())
    this.creatFont('hshs')
  }
  creatFont(font: string) {
    let loader = new THREE.FontLoader()
    var fontModule, that = this
    loader.load('./static/gentilis_regular.typeface.json', function(res) {
      let fontGeometry = new THREE.TextBufferGeometry(font, {
        font: res,
        size: 40,
        height: 10
      })
      fontGeometry.center()
      const map = new THREE.TextureLoader().load(fontBg)
      const meterial = new THREE.MeshLambertMaterial({ map: map, side: THREE.DoubleSide })
      fontModule = new THREE.Mesh(fontGeometry, meterial)
      that.canvas.initObject({ mesh: fontModule })
    })
  }
  lightOptions() {
    const light = new THREE.DirectionalLight(0xffffff)
    light.position.set(1, 1, 1)
    light.intensity = 1.5
    return light
  }
  render() {
    return (
      <>
        <div id='Canvas-Container'>

        </div>
      </>
    )
  }
}

export default FontModule