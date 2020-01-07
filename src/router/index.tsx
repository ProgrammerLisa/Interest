import setRouterList from  './set-router'
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
const TicTacToe = () => import('../views/games/TicTacToe')
const Gobang = () => import('../views/games/Gobang')
const ChatRoom = () => import('../views/games/Room')
const Map3D = () => import('../views/webgl/Map3D')
const FantasyWord = () => import('../views/webgl/fantasyWord')
/*
  lazy()方法示例
  const GobangLazy = lazy(Gobang)
  const ContextLazy = lazy(Context)
  const FormLazy = lazy(Form)
*/

const routeList = [
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
  },
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
  },
  {
    path: '/map3D',
    name: '3D地图',
    component: Map3D,
    exact: false,
    icon: 'paper plane outline'
  },
  {
    path: '/fantasy-word',
    name: '空想世界',
    component: FantasyWord,
    exact: false,
    icon: 'hourglass half'
  }
]

const gamesRouter = [
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

const webglRouter = [
  {
    path: '/map3D',
    name: '3D地图',
    component: Map3D,
    exact: false,
    icon: 'paper plane outline'
  },
  {
    path: '/fantasy-word',
    name: '空想世界',
    component: FantasyWord,
    exact: false,
    icon: 'hourglass half'
  }
]

export const gamesRoutes = setRouterList(gamesRouter)
export const webglRoutes = setRouterList(webglRouter)

export const routes = setRouterList(routeList)

