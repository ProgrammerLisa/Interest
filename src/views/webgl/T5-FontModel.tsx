import React from 'react'
import moduleName from '../../common/initCanvas'
import * as THREE from 'three'

class FontModule extends React.Component {
  componentDidMount() {
    const elementNode = document.getElementById('Canvas-Container')
    
  }
  render() {
    return (
      <>
        <div className='Canvas-Container'></div>
      </>
    )
  }
}

export default FontModule