import React from "react"

import "../styles/main.scss"

import Header from "./header"

const SiteLayout = props => {
  return (
    <React.Fragment>
      <Header></Header>
      {props.children}
    </React.Fragment>
  )
}

export default SiteLayout
