import setRouterList from  './SetRouter'
/* 
  懒加载组件 有两种方式 推荐使用第二种
  1. lazy(() => import(组件地址)) 加载组件时会有闪屏 用户体验较差
  2. Loadable({
    loader: () => import(组件地址),
    loading: 占位符组件
  }) 加载时无闪屏 用户体验较好 但是有已废弃的生命周期警告
  在相关文件中将componentWillMount改为UNSAFE_componentWillMount
*/
//
const Login = () => import('../views/login/Login')
const Games = () => import('../views/sidebar/Games')
const WebGL = () => import('../views/sidebar/Webgl')
const NotFound = () => import('../components/404')
const TicTacToe = () => import('../views/games/TicTacToe')
const Gobang = () => import('../views/games/Gobang')
const ChatRoom = () => import('../views/games/Room')
const Map3D = () => import('../views/webgl/T1-Map3D')
const CreateObjects = () => import('../views/webgl/T2-CreateObjects')
const UseTexture = () => import('../views/webgl/T3-UseTexture')
const DefaultGeometry = () => import('../views/webgl/T4-DefaultGeometry')
const Logs = () =>　import('../views/logs/index')
/*
  lazy()方法示例
  const GobangLazy = lazy(Gobang)
  const ContextLazy = lazy(Context)
  const FormLazy = lazy(Form)
*/

const sidebarRouter =
[
  {
    path: '/',
    name: 'home',
    component: Login,
    exact: true
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    exact: false
  },
  {
    path: '/games',
    name: 'games',
    component: Games,
    exact: false
  },
  {
    path: '/webgl',
    name: 'webgl',
    component: WebGL,
    exact: false
  },
  {
    path: '/404',
    name: '404',
    component: NotFound,
    exact: false
  }
]

const gamesRouter =
[
  {
    path: '/gobang',
    name: '五子棋',
    component: Gobang,
    exact: false,
    icon: 'chess board'
  },
  {
    path: '/ticTacToe',
    name: '井字棋',
    component: TicTacToe,
    exact: false,
    icon: 'th'
  },
  {
    path: '/chatRoom',
    name: '联机五子棋',
    component: ChatRoom,
    exact: false,
    icon: 'handshake outline'
  }
]

const webglRouter =
[
  {
    path: '/map3D',
    name: '3D地图',
    component: Map3D,
    exact: false,
    icon: 'paper plane outline'
  },
  {
    path: '/create-objects',
    name: '创建物体',
    component: CreateObjects,
    exact: false,
    icon: 'hourglass half'
  },
  {
    path: '/use-texture',
    name: '使用纹理',
    component: UseTexture,
    exact: false,
    icon: 'barcode'
  },
  {
    path: '/default-geometry',
    name: '内置几何模型',
    component: DefaultGeometry,
    exact: false,
    icon: 'clone outline'
  }
]
   
const logsRouter = [
  {
    path: '/logs',
    name: '内置几何模型',
    component: Logs,
    exact: false,
    icon: 'clone outline'
  }
]
const routeList = [...sidebarRouter, ...gamesRouter, ...webglRouter, ...logsRouter]
export const gamesRoutes = setRouterList(gamesRouter)
export const webglRoutes = setRouterList(webglRouter)
export const routes = setRouterList(routeList)
