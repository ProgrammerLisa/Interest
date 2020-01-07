import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'
import { Grid, Menu, Icon } from 'semantic-ui-react'
interface GridItemProps {
  path: string,
  name: string,
  component: any,
  exact: boolean,
  icon?: any
}
const GridItem = (props: GridItemProps) => (
  <Grid.Column>
    <Link to={props.path} className='page-router-item'>
      <Menu.Item>
        <Icon name={props.icon} size='big' />
        <p>{props.name}</p>
      </Menu.Item>
    </Link>
  </Grid.Column>
)

const GridRow = (props: GridItemProps[]) => {
  let list: any = []
  props.forEach((Element: any, index: number) => {
    list.push(<GridItem {...Element} key={`GridItem${index}`} />)
  })
  return list
}

const GridContainer = (props: GridItemProps[]) => (
  <Grid className="auto-width text-center" columns={3} divided>
    <Grid.Row>
      {GridRow(props)}
    </Grid.Row>
  </Grid>
)

interface RouterListProps {
  routes: GridItemProps[]
}
class RouterList extends Component<RouterListProps, {}> {
  render() {
    return (
      <Route>
        {GridContainer(this.props.routes)}
      </Route>
    )
  }
}

export default RouterList