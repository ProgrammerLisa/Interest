import * as THREE from 'three'
import { OrbitControls } from 'three-orbitcontrols-ts'
import Stats from 'stats.js'

/**
 * @method canvasType canvas参数
 * @param node 生成结点
 * @param cameraOption 相机参数[视野, 显示口的宽高比, 近裁剪面, 远裁剪面]
 * @param cameraPosition 相机视点[x, y, z]
 * @param renderColor 渲染器颜色
 * @param ambientLight 环境光
 * @param directionalLight 点光源
 * @param lightPosition 光源视点
 * @param lightIntensity 曝光度
 * @param controls 控制器
 */
interface canvasType {
  node: any
  cameraOption?: number[]
  cameraPosition?: number[]
  rendererOption?: object
  rendererColor?: any
  ambientLight?: any
  directionalLight?: any
  lightPosition?: number[]
  lightIntensity?: number,
  controls?: any
}
interface GeometryType {
  mesh: THREE.Mesh
  animate?: any
  update?: any
}

export default class Threescene {
  private _scene: THREE.Scene
  private _camera: THREE.PerspectiveCamera
  private _renderer: THREE.WebGLRenderer
  private _ambientLight: THREE.AmbientLight
  private _directionalLight: THREE.DirectionalLight
  private _controls: OrbitControls
  private _stats: Stats
  private _options: canvasType
  private _animateSign: number
  public constructor(options: canvasType) {
    this._options = options
    this._scene = new THREE.Scene()
    this._camera = new THREE.PerspectiveCamera(...this._options.cameraOption || [45, window.innerWidth / window.innerHeight, 0.1, 2000])
    this._renderer = new THREE.WebGLRenderer(this._options.rendererOption || {})
    this._ambientLight = new THREE.AmbientLight(this._options.ambientLight || 0x404040)
    this._directionalLight = new THREE.DirectionalLight(this._options.directionalLight || 0xFF0000)
    this._controls = new OrbitControls(this._camera, this._renderer.domElement)
    this._stats = new Stats()
    this._animateSign = 0
    this.init()
  }
  /**
   * @method init 初始化场景
   */
  public init() {
    let position
    this._options.cameraPosition ? position = this._options.cameraPosition : position = [-40, 40, 40]
    this._camera.position.set(position[0], position[1], position[2])
    this._camera.lookAt(this._scene.position)
    this._renderer.setClearColor(this._options.rendererColor || 0x282c34)
    this._renderer.setSize(window.innerWidth, window.innerHeight)
    this._renderer.setPixelRatio(window.devicePixelRatio)
    this._options.node.appendChild(this._renderer.domElement)
    // this._scene.add(new THREE.AxesHelper(10))
    this.initLight()
    this.initControls()
    this.initStats()
    this.animate()
    window.onresize = this.onWindowResize
  }
  /**
   * @method initLight 初始化灯光
   */
  private initLight() {
    this._scene.add(this._ambientLight)
    this._directionalLight.position.set(0, 0, 1)
    this._directionalLight.intensity = this._options.lightIntensity || 0.6
    this._scene.add(this._directionalLight)
  }
  /**
   * @method initControls 初始化轨道控制器
   * @param enableDamping 启用阻尼效果
   * @param dampingFactor 阻尼系数
   * @param autoRotate 启用自动旋转
   */
  private initControls() {
    const defaultOptions = this._options.controls || {}
    this._controls.minDistance = defaultOptions.minDistance || 1
    this._controls.maxDistance = defaultOptions.maxDistance || 10
    this._controls.enablePan = defaultOptions.enablePan || true
    this._controls.enableDamping = defaultOptions.enableDamping || true
    this._controls.dampingFactor = defaultOptions.dampingFactor || 0.25
    this._controls.autoRotate = defaultOptions.autoRotate || false
  }
  /**
   * @method initControls 初始化性能监控
   */
  private initStats() {
    this._stats.showPanel(1)
    this._options.node.appendChild(this._stats.dom)
  }
  /**
   * @method onWindowResize 窗口变动触发的函数
   */
  private onWindowResize = () => {
    this._camera.aspect = window.innerWidth / window.innerHeight
    this._camera.updateProjectionMatrix()
    this.render()
    this._renderer.setSize(window.innerWidth, window.innerHeight)
  }
  /**
   * @method render 渲染函数
   */
  private render() {
    this._renderer.render(this._scene, this._camera)
  }
  /**
   * @method animate 动画
   */
  private animate = () => {
    this.render()
    this._animateSign = requestAnimationFrame(this.animate)
    this._stats.update()
    this._controls.update()
  }
  initObject = (props: GeometryType) => {
    this._scene.add(props.mesh)
    if (props.animate || props.update) {
      if (props.animate) props.animate(props.mesh)
      cancelAnimationFrame(this._animateSign)
      this.animate = () => {
        this.render()
        this._animateSign = requestAnimationFrame(this.animate)
        this._stats.update()
        this._controls.update()
        if (props.update) props.update(props.mesh)
      }
      this.animate()
    }
  }
  removeObject = (mesh: THREE.Mesh) => {
    this._scene.remove(mesh)
  }
  destroy = () => {
    cancelAnimationFrame(this._animateSign)
  }
}
