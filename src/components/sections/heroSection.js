import React, { useState, useEffect } from "react"
import Icon from "@mdi/react"

import { mdiLinkedin, mdiGithub } from "@mdi/js"

const HeroSection = () => {
  const [email, setEmail] = useState("")

  useEffect(() => {
    const parts = ["ltge.de", "ruw", 64, "en", "hoe"]

    setEmail(
      parts[1] + parts[3] + String.fromCharCode(parts[2]) + parts[4] + parts[0]
    )
  }, [])

  return (
    <section className="section-hero">
      <div className="section-hero__background">
        <div className="container">
          <div className="row justify-content-end">
            <div className="col col-10">
              <img src="https://picsum.photos/200/300" alt="Hero Image" />
            </div>
          </div>
        </div>
      </div>
      <div className="section-hero__foreground">
        <div className="container">
          <div className="row">
            <div className="col col-6 col-md-7 col-xl-6 col-xxl-5">
              <div className="section-hero__text">
                <h1>Ruwen Höltge</h1>

                <p>
                  Telefon:{" "}
                  <a className="no-underline" href="tel:+4915759631001">
                    +49 1575 9631001
                  </a>
                  <br />
                  E-Mail:{" "}
                  <a className="no-underline" href={`mailto:${email}`}>
                    {email}
                  </a>
                </p>

                <div className="section-hero__icons">
                  <a href="https://linkedin.com/in/rhoeltge" target="_blank">
                    <Icon path={mdiLinkedin} size={3} />
                  </a>
                  <a href="https://github.com/rhoeltge" target="_blank">
                    <Icon path={mdiGithub} size={3} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
