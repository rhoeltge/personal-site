import React from "react"

import Button from "./button"

import { mdiFilePdfBox } from "@mdi/js"

const Header = () => {
  const navItems = [
    { title: "Über Mich", slug: "about" },
    { title: "Projekte", slug: "projects" },
    { title: "Skills", slug: "skills" },
    { title: "Kontakt", slug: "contact" },
  ]

  return (
    <header className="header">
      <div className="container">
        <a className="header__logo no-underline" href="/">
          <h3>
            r<span className="header__logo-ext">.</span>h
            <span className="header__logo-ext">oeltge.de</span>
          </h3>
        </a>
        <nav className="header__nav">
          <ul>
            {navItems.map(el => (
              <a className="no-underline" key={el.slug} href={`#${el.slug}`}>
                {el.title}
              </a>
            ))}
          </ul>
          <Button
            type="a"
            href="/cv.pdf"
            icon={mdiFilePdfBox}
            label="Lebenslauf"
          />
          {/* <Button label="Lebenslauf"></Button> */}
        </nav>
      </div>
    </header>
  )
}

export default Header
