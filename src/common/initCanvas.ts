import * as THREE from 'three'
import { OrbitControls } from 'three-orbitcontrols-ts'
import Stats from 'stats.js'
export let Scene: any
let Camera: any, Renderer: any, stats: any, Controls: any, AmbientLight: any, DirectionalLight: any

const initRender = (ElementNode: any) => {
  Renderer = new THREE.WebGLRenderer()
  Renderer.setClearColor(0x282c34)
  Renderer.setSize(window.innerWidth, window.innerHeight)
  Renderer.setPixelRatio(window.devicePixelRatio)
  ElementNode.appendChild(Renderer.domElement)
}

const initCamera = () => {
  Camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000)
  Camera.position.z = 5
}

const initScene = () => {
  Scene = new THREE.Scene()
}

const initLight = () => {
  // 光
  AmbientLight = new THREE.AmbientLight(0x404040) // 环境光
  Scene.add(AmbientLight)
  DirectionalLight = new THREE.DirectionalLight(0xffffff) // 点光源
  DirectionalLight.position.set(550, 100, 550)
  DirectionalLight.intensity = 0.6
  Scene.add(DirectionalLight)
}

const initControls = () => {
  // 轨道控制器
  Controls = new OrbitControls(Camera, Renderer.domElement)
  Controls.minDistance = 1
  Controls.maxDistance = 10
  Controls.enablePan = true
}

const initStats = (ElementNode: any) => {
  // 性能监控
  stats = new Stats()
  stats.showPanel(1)
  ElementNode.appendChild(stats.dom)
}

// 窗口变动触发的函数
const WindowResize = () => {
  Camera.aspect = window.innerWidth / window.innerHeight
  Camera.updateProjectionMatrix()
  render()
  Renderer.setSize(window.innerWidth, window.innerHeight)
}

export const render = () => {
  Renderer.render(Scene, Camera)
}

const animate = () => {
  render()
  stats.update()
  Controls.update()
  requestAnimationFrame(animate)
}

const draw = (ElementNode: any) => {
  initRender(ElementNode)
  initScene()
  initCamera()
  initLight()
  initControls()
  initStats(ElementNode)
  animate()
  window.onresize = WindowResize
}

interface GeometryType {
  GeometryShape: any,
  color: any,
  isDebug: boolean,
  castShadow: boolean,
  x?: number,
  y?: number,
  z?: number
}
/**
 * @method 创建几何体
 * 球体 new THREE.SphereGeometry()
 * 立方体 new THREE.BoxBufferGeometry() */ 
export const createGeometry = (props: GeometryType) => {
  const Geometry = props.GeometryShape
  const Material = new THREE.MeshBasicMaterial({
    color: props.color,
    wireframe: props.isDebug,
    wireframeLinewidth: 1
  })
  const Mesh = new THREE.Mesh(Geometry, Material)
  Mesh.position.set(props.x || 0, props.y || 0, props.z || 0)
  Mesh.castShadow = props.castShadow
  Scene.add(Mesh)
}

export default draw