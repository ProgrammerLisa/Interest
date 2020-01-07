import React, { Component } from 'react'
import { webglRoutes } from '../../router/index'
import RouterList from '../../components/page-router-list'

class WebGLList extends Component {
  render() {
    return (<RouterList routes={webglRoutes} />)
  }
}

export default WebGLList