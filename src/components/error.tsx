import React from 'react'

interface ErrorBoundayState {
  hasError: boolean
}
class ErrorBounday extends React.Component<{}, ErrorBoundayState> {
  constructor (props: any) {
    super(props)
    this.state = {
      hasError: false
    }
  }
  
  static getDerivedStateFromError () {
    return { hasError: true }
  }

  render () {
    if (this.state.hasError) {
      return <h1>Something Went Wrong.</h1>
    }
    return this.props.children
  }
}

export default ErrorBounday
