import React from 'react'
import { Route } from 'react-router-dom'

interface StatusParam {
  code: number,
  children: Element
}
const Status: any = (params: StatusParam) => (
  <Route render={(route: any) => {
    if (route.staticContext)
      route.staticContext.status = params.code
    return params.children
  }}
  />
)

class NotFound extends React.Component {
  render () {
    return (
      <Status code={404}>
        <div>
          <h1>Sorry, can't find that.</h1>
        </div>
      </Status>
    )
  }
}

export default NotFound
