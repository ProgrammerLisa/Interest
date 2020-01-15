import React, { Component } from 'react'
import { webglRoutes } from '../../router/Routes'
import RouterList from '../../components/PageRouterList'

class WebGLList extends Component {
  render() {
    return (<RouterList routes={webglRoutes} />)
  }
}

export default WebGLList