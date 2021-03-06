import * as THREE from 'three'
import { OrbitControls } from './orbitControls'
import Stats from 'stats.js'
import dat from 'dat.gui'

/**
 * @method canvasType canvas参数
 * @param node 生成结点
 * @param cameraOption 相机参数[视野, 显示口的宽高比, 近裁剪面, 远裁剪面]
 * @param cameraPosition 相机视点[x, y, z]
 * @param renderColor 渲染器颜色
 * @param ambientLight 环境光
 * @param controls 控制器
 */
interface canvasType {
  node: any
  cameraOption?: number[]
  cameraPosition?: number[]
  sceneOption?: any
  rendererOption?: object
  renderShadow?: boolean
  renderShadowType?: THREE.ShadowMapType
  rendererColor?: any
  ambientLight?: any
  controls?: any
  hideDatGui?: boolean
  gui?: object
  guiOption?: any
}
interface GeometryType {
  mesh: any
  animate?: any
  update?: any
  definedAnimate?: any
}
interface Map extends THREE.Scene {
  [key: string]: any
  [index: number]: any
}

export default class Threescene {
  private _scene: Map
  private _camera: THREE.PerspectiveCamera
  private _renderer: THREE.WebGLRenderer
  private _ambientLight: THREE.AmbientLight
  private _controls: OrbitControls
  private _stats: Stats
  private _options: canvasType
  private _animateSign: number
  public _gui: any
  public constructor(options: canvasType) {
    this._options = options
    this._scene = new THREE.Scene()
    this._camera = new THREE.PerspectiveCamera(...this._options.cameraOption || [45, window.innerWidth / window.innerHeight, 0.1, 2000])
    this._renderer = new THREE.WebGLRenderer(this._options.rendererOption || {})
    this._ambientLight = new THREE.AmbientLight(this._options.ambientLight || 0x404040)
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
    this._renderer.setClearColor(this._options.rendererColor || 0x282c34)
    this._renderer.setSize(window.innerWidth, window.innerHeight)
    this._renderer.setPixelRatio(window.devicePixelRatio)
    this._renderer.shadowMap.enabled = this._options.renderShadow || false
    if (this._options.renderShadowType) this._renderer.shadowMap.type = this._options.renderShadowType
    this._options.node.appendChild(this._renderer.domElement)
    // this._scene.add(new THREE.AxesHelper(10))
    if (!this._options.hideDatGui) this.initDat()
    this.initScene()
    this.initLight()
    this.initControls()
    this.initStats()
    this.animate()
    window.onresize = this.onWindowResize
  }
  /**
   * @method initDat 初始化Dat
   */
  private initScene() {
    if (this._options.sceneOption) {
      let obj = this._options.sceneOption
      for (let v in obj) {
        if (v in this._scene) {
          this._scene[v] = obj[v]
        }
      }
    }
  }
  /**
   * @method initDat 初始化Dat
   */
  private initDat() {
    this._gui = this._options.gui || {
      lightY: 30, //灯光y轴的位置
      sphereX: 0, //球的x轴的位置
      sphereZ: 0, //球的z轴的位置
      cubeX: 25, //立方体的x轴位置
      cubeZ: -5 //立方体的z轴的位置
    }
    let datGui = new dat.GUI()
    if (this._options.guiOption) {
      this._options.guiOption.forEach((v: any) => {
        datGui.add(this._gui, v.name, v.min, v.max)
      })
    }
  }
  /**
   * @method initControls 初始化轨道控制器
   * @param enableDamping 启用阻尼效果
   * @param dampingFactor 阻尼系数
   * @param autoRotate 启用自动旋转
   */
  private initControls() {
    const defaultOptions = this._options.controls || {}
    this._controls.minDistance = defaultOptions.minDistance || 0
    this._controls.maxDistance = defaultOptions.maxDistance || Infinity
    this._controls.minPolarAngle = defaultOptions.minPolarAngle || 0
    this._controls.maxPolarAngle = defaultOptions.maxPolarAngle || Math.PI
    this._controls.enablePan = defaultOptions.enablePan === false ? false : true
    this._controls.enableZoom  = defaultOptions.enableZoom || true
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
    this._stats.update()
    this._controls.update()
    this._animateSign = requestAnimationFrame(this.animate)
  }
  /**
   * @method initLight 初始化灯光
   */
  private initLight() {
    this._scene.add(this._ambientLight)
  }
  /**
   * @method initObject 添加模型并加载对应的动画
   */
  initObject = (props: GeometryType) => {
    if (props.mesh instanceof Array) {
      this._scene.add(...props.mesh)
    } else {
      this._scene.add(props.mesh)
    }
    if (props.animate || props.definedAnimate) {
      if (props.animate) props.animate(props.mesh)
      cancelAnimationFrame(this._animateSign)
      this.animate = () => {
        if (props.definedAnimate) props.definedAnimate({ Mesh: props.mesh, Camera: this._camera, Scene: this._scene })
        this.render()
        this._animateSign = requestAnimationFrame(this.animate)
        this._stats.update()
        this._controls.update()
        if (props.update) props.update(props.mesh)
      }
      this.animate()
    }
  }
  /**
   * @method removeObject 清除指定的模型
   */
  removeObject = (mesh: THREE.Mesh) => {
    this._scene.remove(mesh)
  }
  destroy = () => {
    cancelAnimationFrame(this._animateSign)
  }
}
