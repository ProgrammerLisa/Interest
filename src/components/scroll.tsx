import { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { createBrowserHistory } from 'history'

/*
class ScrollToTop extends Component {
  componentDidUpdate (prevProps) {
    if (this.props.location !== prevProps.location) {
      window.scrollTo(0, 0)
    }
  }
  render () {
    return this.props.children
  }
}
*/

var history = createBrowserHistory()
history.listen((location, action) => {
  let currentY = document.documentElement.scrollTop || document.body.scrollTop
  setTimeout(() => {
    if (action === 'POP') { return }
    scrollAnimation(currentY, 0)
  })
})

interface ScrollToTopOnMountProps {
  history: any
}
class ScrollToTopOnMount extends Component<ScrollToTopOnMountProps, {}> {
  componentDidMount() {
    let currentY = document.documentElement.scrollTop || document.body.scrollTop
    if (this.props.history.action === 'POP') { return }
    scrollAnimation(currentY, 0)
  }
  render() {
    return null
  }
}

function scrollAnimation(currentY: number, targetY: number): any {
  let needScrollTop = targetY - currentY
  let _currentY = currentY
  setTimeout(() => {
    const dist = Math.ceil(needScrollTop / 10)
    _currentY += dist
    window.scrollTo(_currentY, currentY)
    if (needScrollTop > 10 || needScrollTop < -10) {
      scrollAnimation(_currentY, targetY)
    } else {
      window.scrollTo(_currentY, targetY)
    }
  }, 1)
}

(ScrollToTopOnMount as any).defaultProps = {
  history: history
}

// export default withRouter(ScrollToTop)
export default withRouter(ScrollToTopOnMount as any)
