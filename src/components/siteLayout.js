import React from "react"

import Header from "./header"
import Footer from "./footer"

import "../styles/main.scss"

const SiteLayout = props => {
  return (
    <React.Fragment>
      <Header />
      {props.children}
      <Footer />
    </React.Fragment>
  )
}

export default SiteLayout
