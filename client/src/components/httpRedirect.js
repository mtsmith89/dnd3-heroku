import * as React from 'react'

class HttpRedirect extends React.Component {
  render() {
    if (window.location.protocol === 'https:') {
      const newLocation = window.location.href.replace('https:', 'http:')
      window.location.href = newLocation
    }
    return <React.Fragment />
  }
}

export { HttpRedirect }