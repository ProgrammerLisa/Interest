import React from 'react' // , { lazy }
import Loadable from 'react-loadable'
import Loading from '../components/loading'
import ScrollToTop from '../components/scroll' // 切换路由时滚动到顶部 返回或前进则滚动高度不变
import ErrorBounday from '../components/error' // 错误边界
const Login = () => import('../views/login/login')
const user = JSON.parse((localStorage as any).getItem('kmr_userInfo'))

interface routeListItem {
  path: string,
  name: string,
  component: any,
  exact: boolean,
  icon?: string
}


interface routeListItem {
  path: string,
  name: string,
  component: any,
  needLogin: boolean,
  exact: boolean,
  icon?: string
}

function asyncLoad(loader: () => Promise<any>) {
  return Loadable({
    loader,
    loading: props => {
      if (props.pastDelay) {
        return <Loading />
      } else {
        return null
      }
    },
    delay: 500
  })
}

export default function(routeList: routeListItem[]) {
  const routes = routeList.map(Element => {
    // 判断是否需要登陆
    if (Element.needLogin) {
      if (!user) Element.component = Login
    }
    const AsyncLoadComponent = asyncLoad(Element.component)
    // 每次切换路由时 屏幕内容滚动到最上方
    let ErrorComponent = () => (
      <ErrorBounday>
        <ScrollToTop/>
        <AsyncLoadComponent/>
      </ErrorBounday>
    )
    return { ...Element, component: ErrorComponent }
  })
  return routes
}
