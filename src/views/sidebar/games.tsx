import React, { Component } from 'react'
import { gamesRoutes } from '../../router/Routes'
import RouterList from '../../components/PageRouterList'

class Games extends Component {
  render() {
    return (<RouterList routes={gamesRoutes} />)
  }
}

export default Games