import React, { Suspense, Component } from 'react'
import { Route, Switch, Link } from 'react-router-dom'
import { Grid, Menu, Icon } from 'semantic-ui-react'
import routes from '../../router/r-webgl'

interface GridItemProps {
  path: string,
  name: string,
  component: any,
  exact: boolean
}

interface WebGLListState {
  onPage: boolean
}

const GridItem = (props: GridItemProps) => (
  <Grid.Column>
    <Link to={props.path}>
      <Menu.Item>
        <Icon name='th' />
        <p>{props.name}</p>
      </Menu.Item>
    </Link>
  </Grid.Column>
)

const GridRow = (router: GridItemProps[]) => {
  let list: any = []
  router.forEach((Element: any, index: number) => {
    list.push(<GridItem {...Element} key={`GridItem${index}`} />)
  })
  return list
}

const GridContainer = () => (
  <Grid className="auto-width text-center" columns={3} divided>
    <Grid.Row>
      {GridRow(routes)}
    </Grid.Row>
  </Grid>
)

class WebGLList extends Component<{}, WebGLListState> {
  constructor(props: any) {
    super(props)
    this.state = {
      onPage: false
    }
  }
  render() {
    return (
      <Route>
        <GridContainer />
        <Suspense fallback={<div>Loading...</div>}>
          <header className="webgl-header">
            <Switch>
              {routes.map(route => (<Route {...route} key={route.name}/>))}
            </Switch>
          </header>
        </Suspense>
      </Route>
    )
  }
}

export default WebGLList