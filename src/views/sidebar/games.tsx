import React, { Component } from 'react'
import { Grid, Image } from 'semantic-ui-react'
import router from '../../router/r-games'
interface RouterListProps {

}
const GridExampleDividedNumber = () => (
  <Grid columns={3} divided>
    <Grid.Row>
      <Grid.Column>
        <Image src='https://react.semantic-ui.com/images/wireframe/media-paragraph.png' />
      </Grid.Column>
      <Grid.Column>
        <Image src='https://react.semantic-ui.com/images/wireframe/media-paragraph.png' />
      </Grid.Column>
      <Grid.Column>
        <Image src='https://react.semantic-ui.com/images/wireframe/media-paragraph.png' />
      </Grid.Column>
      <Grid.Column>
        <Image src='https://react.semantic-ui.com/images/wireframe/media-paragraph.png' />
      </Grid.Column>
      <Grid.Column>
        <Image src='https://react.semantic-ui.com/images/wireframe/media-paragraph.png' />
      </Grid.Column>
      <Grid.Column>
        <Image src='https://react.semantic-ui.com/images/wireframe/media-paragraph.png' />
      </Grid.Column>
    </Grid.Row>
  </Grid>
)

class Games extends Component<RouterListProps, {}> {
  constructor(props: RouterListProps) {
    super(props)
    this.state = {}
  }
  render() {
    return (<GridExampleDividedNumber />)
  }
}
export default Games