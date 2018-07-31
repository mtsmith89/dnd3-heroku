import React from "react";


export default class Header extends React.Component {

  render() {
    return ( <
      img className = "img-fluid"
      src = {
        require("../../public/assets/images/dungeonsheader.png")
      }
      alt = "logo" / >
    )
  }
}