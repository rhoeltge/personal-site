import React from "react"
import { Link } from "gatsby"

import Button from "./button"

import { mdiFilePdfBox } from "@mdi/js"

import scrollToElement from "../helpers/scrollToElement"
import getEmail from "../helpers/getEmail"

const Footer = () => {
  return (
    <footer id="contact" className="footer">
      <div className="footer__top">
        <div className="container">
          <h6>Kontakt</h6>
          <h2>Lernen wir uns kennen</h2>
          <div className="row">
            <div className="col col-6">
              <h3>Telefon</h3>
              <p>
                <a href="tel:+4915759631001">+49 1575 9631001</a>
              </p>
            </div>
            <div className="col col-6">
              <h3>Email</h3>
              <p>
                <a href={`mailto:${getEmail()}`}>{getEmail()}</a>
              </p>
            </div>
            <div className="col col-6">
              <h3>LinkedIn</h3>
              <p>
                <a href="https://linkedin.com/in/rhoeltge">
                  linkedin.com/in/rhoeltge
                </a>
              </p>
            </div>
            <div className="col col-6">
              <h3>GitHub</h3>
              <p>
                <a href="https://github.com/rhoeltge">github.com/rhoeltge</a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="footer__bottom">
        <div className="container">
          <Link to="/impressum">Impressum</Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer
