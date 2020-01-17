import React from 'react'
import * as THREE from 'three'
import { OrbitControls } from '../../common/orbitControls'
import Stats from 'stats.js'
import EarthImg from '../../assets/img/land_ocean.jpg'

class Canvas extends React.Component {
  componentDidMount() {
    main()
  }
  render() {
    return (<div id="Sweet-Kingdom"></div>)
  }
}

function main(): any {
  const elementNode: any = document.getElementById('Sweet-Kingdom')
  let renderer = new THREE.WebGLRenderer()
  renderer.setClearColor(0x333333)
  renderer.setPixelRatio(window.devicePixelRatio)
  renderer.setSize(window.innerWidth, window.innerHeight)
  elementNode.appendChild(renderer.domElement)

  // 场景
  let Sence = new THREE.Scene()

  // 透视相机
  let camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 10000)
  camera.position.z = 1

  // 轨道控制器
  let controls: any = new OrbitControls(camera, renderer.domElement)
  controls.addEventListener('change', render)
  controls.minDistance = 1
  controls.maxDistance = 10
  controls.enablePan = false

  // 创建网格(mesh) 由模型(geometry)和材质(material)构成
  const mesh: any = createMesh(EarthImg)
  Sence.add(mesh)
  controls.update()
  controls.target.copy(mesh.position)

  // 添加光源：环境光和点光源(平行光)
  const ambi = new THREE.AmbientLight(0x404040) // 环境光
  Sence.add(ambi)
  let spotLight = new THREE.DirectionalLight(0xffffff) // 点光源
  spotLight.position.set(550, 100, 550)
  spotLight.intensity = 0.6
  Sence.add(spotLight)

  // 性能监控
  let stats = new Stats()
  stats.showPanel(1)
  elementNode.appendChild(stats.dom)
  
  // 渲染
  function render(): void {
    renderer.render(Sence, camera)
    stats.update()
  }

  function run(): void {
    render()
    requestAnimationFrame(run)
  }

  run()
}

function createMesh(url: string) {
  let mesh = new THREE.Mesh()
  const loader = new THREE.TextureLoader()
  loader.load(
    url,
    function(texture) {
      mesh.material = new THREE.MeshBasicMaterial({ map: texture })
      mesh.material.side = THREE.DoubleSide
      mesh.geometry = new THREE.SphereGeometry(1, 10, 10)
    }
  )
  return mesh
}

export default Canvas