import React from 'react'
import InitCanvas from '../../common/initCanvas'
import * as THREE from 'three'
/**
 * @method initCanvas 初始化场景
 */
const initCanvas = (canvasNode: any) => {
  const options = {
    node: canvasNode,
    sceneOption: { 
      fog: new THREE.Fog(0xff00ff, 80, 120),
      overrideMaterial: new THREE.MeshStandardMaterial({ color: 0x00ffff })
    },
    rendererOption: { antialias: true },
    renderShadow: true,
    renderShadowType: THREE.PCFSoftShadowMap,
    cameraOption: [45, window.innerWidth / window.innerHeight, 0.1, 1000],
    cameraPosition: [0, 40, 100],
    ambientLight: 0x444444,
    controls: {
      minDistance: 100,
      maxDistance: 200
    },
    gui: {
      lightY: 30, //灯光y轴的位置
      sphereX: 0, //球的x轴的位置
      sphereZ: 0, //球的z轴的位置
      cubeX: 25, //立方体的x轴位置
      cubeZ: -5 //立方体的z轴的位置
    },
    guiOption: [
      { name: 'lightY', min: 0, max: 100 },
      { name: 'sphereX', min: -30, max: 30 },
      { name: 'sphereZ', min: -30, max: 30 },
      { name: 'cubeX', min: 0, max: 60 },
      { name: 'cubeZ', min: -30, max: 30 }
    ]
  }
  return new InitCanvas(options)
}
class FontModule extends React.Component {
  canvas: any
  light: any
  sphere: any
  cube: any
  componentDidMount() {
    const canvasNode = document.getElementById('Canvas-Container')
    this.canvas = initCanvas(canvasNode)
    this.canvas.initObject({
      mesh: this.initModel(),
      definedAnimate: () => {
        this.light.position.y = this.canvas._gui.lightY
        this.sphere.position.x = this.canvas._gui.sphereX
        this.sphere.position.z = this.canvas._gui.sphereZ
        this.cube.position.x = this.canvas._gui.cubeX
        this.cube.position.z = this.canvas._gui.cubeZ
      }
    })
  }
  initModel() {
    this.light = new THREE.PointLight(0xffffff)
    this.light.position.set(15, 30, 10)
    this.light.castShadow = true

    // 光球
    let lightGeometry = new THREE.SphereGeometry(0.5, 20, 20)
    let lightMaterial = new THREE.MeshPhysicalMaterial({ color: 0xaaaaaa })
    let lightBall = new THREE.Mesh(lightGeometry, lightMaterial)
    lightBall.position.set(15, 30, 10)

    // 球体
    let sphereGeometry = new THREE.SphereGeometry(5, 200, 200)
    let sphereMaterial = new THREE.MeshStandardMaterial({ color: 0x7777ff })
    this.sphere = new THREE.Mesh(sphereGeometry, sphereMaterial)
    this.sphere.position.y = 5
    this.sphere.castShadow = true

    // 立方体
    let cubeGeometry = new THREE.BoxBufferGeometry(10, 10, 8)
    let cubeMaterial = new THREE.MeshLambertMaterial({ color: 0x00ffff })
    this.cube = new THREE.Mesh(cubeGeometry, cubeMaterial)
    this.cube.position.set(25, 5, -5)
    this.cube.castShadow = true

    // 底部
    let planeGeometry = new THREE.PlaneGeometry(100, 100)
    let planeMaterial = new THREE.MeshStandardMaterial({ color: 0xaaaaaa })
    let plane = new THREE.Mesh(planeGeometry, planeMaterial)
    plane.rotation.x = -0.5 * Math.PI
    plane.position.y = -0
    plane.receiveShadow = true

    var helper = new THREE.AxesHelper(10)
    return [this.light, lightBall, this.sphere, this.cube, plane, helper]
  }
  render() {
    return (
      <>
        <div id='Canvas-Container'></div>
      </>
    )
  }
}

export default FontModule