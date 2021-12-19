import React from "react"

import Header from "./header"

import "../styles/main.scss"

const SiteLayout = props => {
  return (
    <React.Fragment>
      <Header></Header>
      {props.children}
    </React.Fragment>
  )
}

export default SiteLayout
