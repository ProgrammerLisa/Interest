import React, { Component } from 'react'
import { gamesRoutes } from '../../router/routes'
import RouterList from '../../components/pageRouterList'

class Games extends Component {
  render() {
    return (<RouterList routes={gamesRoutes} />)
  }
}

export default Games