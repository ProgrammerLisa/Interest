import React, { Suspense, Component } from 'react'
import { Route, Switch, Link } from 'react-router-dom'
import routes from '../../router/r-sidebar'
import { Icon, Menu, Segment, Sidebar } from 'semantic-ui-react'

interface NavState {
  isOpen: boolean
}
class Nav extends Component<{}, NavState> {
  toggleMenu = (status: boolean) => {
    this.setState({
      isOpen: !status
    })
  }
  render() {
    return (
      <Route>
        <Sidebar.Pushable as={Segment}>
          <Sidebar
            as={Menu}
            animation='overlay'
            icon='labeled'
            inverted
            vertical
            visible
            width='thin'
          >
            <Link to='/ticTacToe'>
              <Menu.Item>
                <Icon name='th' />
                井字棋
              </Menu.Item>
            </Link>
            <Link to='/gobang'>
              <Menu.Item>
                <Icon name='chess board' />
                五子棋
              </Menu.Item>
            </Link>
            <Link to='/chatRoom'>
              <Menu.Item>
                <Icon name='comments' />
                聊天室
              </Menu.Item>
            </Link>
            <Link to='/webgl'>
              <Menu.Item>
                <Icon name='globe' />
                3D地图
              </Menu.Item>
            </Link>
          </Sidebar>
          <Sidebar.Pusher>
            <Suspense fallback={<div>Loading...</div>}>
              <header className="App-header">
                <Switch>
                  {routes.map(route => (<Route {...route} key={route.name}/>))}
                </Switch>
              </header>
            </Suspense>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </Route>
    )
  }
}

export default Nav
