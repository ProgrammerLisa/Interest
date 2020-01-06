import setRouterList from  './index'

const Map3D = () => import('../views/webgl/Map3D')
const routeList = [
  {
    path: '/webgl',
    name: 'webgl',
    component: Map3D,
    exact: false
  }
]
const routes = setRouterList(routeList)

export default routes
