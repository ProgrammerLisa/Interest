import React, { Component } from 'react'
import InitCanvas from '../../common/initCanvas'
import * as THREE from 'three'
import texturesImage from '../../assets/img/disturb.jpg'

class DefaultGeometry extends Component {
  componentDidMount() {
    const canvasNode = document.getElementById('Canvas-Container')
    const canvas = this.initCanvas(canvasNode)
    const objectCube = this.initObjectCube()
    canvas.initObject(objectCube)
  }
  /**
   * @method initCanvas 初始化场景
   */
  initCanvas = (canvasNode: any) => {
    const options = {
      node: canvasNode,
      rendererOption: { antialias: true },
      cameraOption: [45, window.innerWidth / window.innerHeight, 1, 2000],
      cameraPosition: [0, 400, 0],
      directionalLight: 0xffffff,
      directionalLightPosition: [0, 1, 0],
      lightIntensity: 1.5
    }
    const canvas = new InitCanvas(options)
    return canvas
  }
  /**
   * @method initObjectCube 初始化模型数组和指定动画
   */
  initObjectCube = () => {

    // 球形（半径长度，水平块的密度，垂直块的密度）
    const SphereGeometry = this.objectOptions(new THREE.SphereGeometry(60, 20, 20), [-400, 0, 200])
    
    // 二十面体（图形大小半径，大于零将不是二十面体，越大越圆滑）
    const IcosahedronGeometry = this.objectOptions(new THREE.IcosahedronGeometry(60, 0), [-200, 0, 200])
    
    // 八面体（图形大小半径，大于零将不是八面体，越大越圆滑）
    const OctahedronGeometry = this.objectOptions(new THREE.OctahedronGeometry(60, 0), [0, 0, 200])
    
    //四面体（图形大小半径，大于零将不是四面体，越大越圆滑）
    const TetrahedronGeometry = this.objectOptions(new THREE.TetrahedronGeometry(60, 0), [200, 0, 200])
    
    //长方形平面 （x轴宽度，y轴高度，x方向分段数，y方向分段数）
    const PlaneGeometry = this.objectOptions(new THREE.PlaneGeometry(100, 100, 1, 1), [-400, 0, 0])
    
    //立方体 （x轴宽度，y轴高度，z轴深度，沿宽面分段数，沿高度面分段数，沿深度面分段数）
    const BoxBufferGeometry = this.objectOptions(new THREE.BoxBufferGeometry(100, 100, 100, 1, 1, 1), [-200, 0, 0])
    
    //圆形平面 （半径，顶点密度，绘制起点弧度，绘制弧度）
    const CircleBufferGeometry = this.objectOptions(new THREE.CircleBufferGeometry(50, 20, 0, Math.PI * 2), [0, 0, 0])
    
    //空心圆平面 （内圆半径，外圆半径，分割面越大越圆滑，垂直外边分割面，开始绘制弧度，绘制弧度）
    const RingBufferGeometry = this.objectOptions(new THREE.RingBufferGeometry(10, 50, 10, 5, 0, Math.PI * 2), [200, 0, 0])

    // 圆柱体 （头部圆的半径，底部圆半径，高度，上下圆顶点个数，上下面切割线条数，上下面是否显示，开始弧度，绘制弧度）
    const CylinderBufferGeometry = this.objectOptions(new THREE.CylinderBufferGeometry(20, 60, 100, 40, 5), [400, 0, 0])

    //救生圈 （救生圈半径，管道直径，基于管道横切顶点数，救生圈横切顶点个数）
    const TorusBufferGeometry = this.objectOptions(new THREE.TorusBufferGeometry(50, 20, 20, 20), [-200, 0, -200])

    //环面扭结模型 （图形半径，管道直径，基于管道横切定点数，根据图形半径横切顶点数，绕旋转对称轴的圈数，绕环面的圆的圈数）
    const TorusKnotBufferGeometry = this.objectOptions(new THREE.TorusKnotBufferGeometry(50, 10, 50, 20, 3, 5), [0, 0, -200])
/*
    //轴辅助 （每一个轴的长度）
    const AxesHelper = new THREE.AxesHelper(50)
    AxesHelper.position.set(200, 0, -200)
    
    //箭头辅助（箭头头的方向必须是vecteor3，箭头起点必须是vector3，箭头长度，颜色）
    const ArrowHelper =  new THREE.ArrowHelper(new THREE.Vector3(0, 1, 0), new THREE.Vector3(0, 0, 0), 50, 0x00ffff)
    ArrowHelper.position.set(400, 0, -200)
*/
    const GeometryList = [SphereGeometry, IcosahedronGeometry, OctahedronGeometry, TetrahedronGeometry, PlaneGeometry, BoxBufferGeometry, CircleBufferGeometry, RingBufferGeometry, CylinderBufferGeometry, TorusBufferGeometry, TorusKnotBufferGeometry]
    
    const cube = {
      mesh: GeometryList,
      definedAnimate: (props: any) => {
        let timer = Date.now() * 0.0001

        props.Camera.position.x = Math.cos( timer ) * 800
        props.Camera.position.z = Math.sin( timer ) * 800

        props.Camera.lookAt(props.Scene.position)

        props.Mesh.forEach((v: THREE.Mesh) => {
          v.rotation.x = timer * 5
          v.rotation.y = timer * 2.5
        })
      }
    }

    return cube
  }
  /**
   * @method objectOptions 初始化模型参数
   */
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
    return mesh
  }
  render() {
    return <div id='Canvas-Container'></div>
  }
}
export default DefaultGeometry