import React, { Component } from 'react'
import { gamesRoutes } from '../../router/index'
import RouterList from '../../components/page-router-list'

class Games extends Component {
  render() {
    return (<RouterList routes={gamesRoutes} />)
  }
}

export default Games