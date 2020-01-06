import setRouterList from  './index'

const Map3D = () => import('../views/webgl/Map3D')
const routeList = [
  {
    path: '/webgl/map3D',
    name: '3D地图',
    component: Map3D,
    exact: false,
    icon: 'th'
  }
]
const routes = setRouterList(routeList)

export default routes
