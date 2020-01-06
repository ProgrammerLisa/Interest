import setRouterList from  './index'
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
const TicTacToe = () => import('../views/games/TicTacToe')
const Gobang = () => import('../views/games/Gobang')
const ChatRoom = () => import('../views/chat/Room')
const WebGL = () => import('../views/sidebar/webgl')
const NotFound = () => import('../components/404')
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
    path: '/gobang',
    name: 'gobang',
    component: Gobang,
    exact: false
  },
  {
    path: '/ticTacToe',
    name: 'ticTacToe',
    component: TicTacToe,
    exact: false
  },
  {
    path: '/chatRoom',
    name: 'chatRoom',
    component: ChatRoom,
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

const routes = setRouterList(routeList)

export default routes
