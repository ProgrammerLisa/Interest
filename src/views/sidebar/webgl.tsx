import React, { Component } from 'react'
import { webglRoutes } from '../../router/routes'
import RouterList from '../../components/pageRouterList'
import Detector from 'device-detector-js'

const detector = new Detector()
const userAgent = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/69.0.3497.81 Safari/537.36'
const device = detector.parse(userAgent)

if (!device) {
  console.log('The browser does not support webgl')
}

class WebGLList extends Component {
  render() {
    return (<RouterList routes={webglRoutes} />)
  }
}

export default WebGLList