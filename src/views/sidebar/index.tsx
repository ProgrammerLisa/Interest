import React, { Suspense, Component } from 'react'
import { Route, Switch, Link } from 'react-router-dom'
import { routes } from '../../router'
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
            <Menu.Item>
              <Link to='/games'>
                <Icon name='chess' />
                <p>游戏室</p>
              </Link>
            </Menu.Item>
            <Menu.Item>
              <Link to='/webgl'>
                <Icon name='globe' />
                <p>3D世界</p>
              </Link>
            </Menu.Item>
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
