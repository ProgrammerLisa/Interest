import setRouterList from  './setRouter'
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
const Login = () => import('../views/login/login')
const Games = () => import('../views/sidebar/games')
const WebGL = () => import('../views/sidebar/webgl')
const NotFound = () => import('../components/404')
const TicTacToe = () => import('../views/games/ticTacToe')
const Gobang = () => import('../views/games/gobang')
const ChatRoom = () => import('../views/games/chatRoom')
const Bargain = () => import('../views/games/bargain')
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
    needLogin: true,
    exact: true
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    needLogin: false,
    exact: false
  },
  {
    path: '/games',
    name: 'games',
    component: Games,
    needLogin: false,
    exact: false
  },
  {
    path: '/webgl',
    name: 'webgl',
    component: WebGL,
    needLogin: false,
    exact: false
  },
  {
    path: '/404',
    name: '404',
    component: NotFound,
    needLogin: false,
    exact: false
  }
]

const gamesRouter =
[
  {
    path: '/gobang',
    name: '五子棋',
    component: Gobang,
    needLogin: true,
    exact: false,
    icon: 'chess board'
  },
  {
    path: '/ticTacToe',
    name: '井字棋',
    component: TicTacToe,
    needLogin: true,
    exact: false,
    icon: 'th'
  },
  {
    path: '/chatRoom',
    name: '联机五子棋',
    component: ChatRoom,
    needLogin: true,
    exact: false,
    icon: 'handshake outline'
  },
  {
    path: '/bargain',
    name: '砍价',
    component: Bargain,
    needLogin: true,
    exact: false,
    icon: 'cut'
  }
]

const webglRouter =
[
  {
    path: '/map3D',
    name: '3D地图',
    component: Map3D,
    needLogin: true,
    exact: false,
    icon: 'paper plane outline'
  },
  {
    path: '/create-objects',
    name: '创建物体',
    component: CreateObjects,
    needLogin: true,
    exact: false,
    icon: 'hourglass half'
  },
  {
    path: '/use-texture',
    name: '使用纹理',
    component: UseTexture,
    needLogin: true,
    exact: false,
    icon: 'barcode'
  },
  {
    path: '/default-geometry',
    name: '内置几何模型',
    component: DefaultGeometry,
    needLogin: true,
    exact: false,
    icon: 'clone outline'
  }
]

const logsRouter = [
  {
    path: '/logs',
    name: '日志',
    component: Logs,
    needLogin: false,
    exact: false,
    icon: 'clone outline'
  }
]
const routeList = [...sidebarRouter, ...gamesRouter, ...webglRouter, ...logsRouter]
export const gamesRoutes = setRouterList(gamesRouter)
export const webglRoutes = setRouterList(webglRouter)
export const routes = setRouterList(routeList)
