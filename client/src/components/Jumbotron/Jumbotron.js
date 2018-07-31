import React from 'react'

export default class Jumbotron extends React.Component {
  state = {
    navbarHeight: 0
  }

  componentDidMount() {
    this.setState({ navbarHeight: document.querySelector('.navbar').clientHeight })
  }

  render() {
    return (
      <div className="jumbotron" id="jumbo">
        {this.props.children}
      </div>
    )
  }
}
