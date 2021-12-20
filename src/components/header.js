import React, { useState, useEffect } from "react"
import { Link } from "gatsby"

import Button from "./button"

import { mdiFilePdfBox } from "@mdi/js"

import scrollToElement from "../helpers/scrollToElement"

const Header = () => {
  const [showNav, setShowNav] = useState(true)

  const navItems = [
    { title: "Über Mich", slug: "about" },
    { title: "Projekte", slug: "projects" },
    { title: "Skills", slug: "skills" },
    { title: "Kontakt", slug: "contact" },
  ]

  useEffect(() => {
    const path = window.location.pathname

    const urlParts = path.split("/").filter(el => !!el)

    setShowNav(urlParts.length === 0)
  }, [])

  return (
    <header className="header">
      <div className="container">
        <Link className="header__logo no-underline" to="/">
          <h4>
            r<span className="header__logo-ext">.</span>h
            <span className="header__logo-ext">oeltge.de</span>
          </h4>
        </Link>
        <nav className="header__nav">
          {showNav && (
            <ul>
              {navItems.map(el => (
                <a
                  className="no-underline"
                  key={el.slug}
                  href={`#${el.slug}`}
                  onClick={event => {
                    scrollToElement(event, el.slug)
                  }}
                >
                  {el.title}
                </a>
              ))}
            </ul>
          )}

          <Button
            type="a"
            href="/cv.pdf"
            icon={mdiFilePdfBox}
            label="Lebenslauf"
          />
        </nav>
      </div>
    </header>
  )
}

export default Header
