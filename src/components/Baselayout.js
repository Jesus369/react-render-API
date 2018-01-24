import React, { Component } from 'react'

export class BaseLayout extends Component{
  render() {
    return (
      <div>
        <NavBar/>
          {this.props.children}
        <Footer/>
      </div>
    )
  }
}


export class NavBar extends Component {

  render() {
    var navbar = {
      backgroundColor: "#19C775",
      height: "20em"
    }

    var title = {
      backgroundColor: "#19C775",
      width: "20em",
      margin: "0 auto 0 auto"
    }
    return(
      <div style={navbar}>
        <div style={title}><h1>Introducing a Displayed API</h1></div>
      </div>
    )
  }
}

export class Footer extends Component {
  render() {

    var footer = {
      backgroundColor: "#19C775",
      height: "20em"
    }

    return(
      <div style={footer}>
        <p>Footer Bar</p>
      </div>
    )
  }
}
