import React, { useState, useEffect, useRef } from "react"
import Icon from "@mdi/react"

import { mdiLinkedin, mdiGithub } from "@mdi/js"

import getEmail from "../../helpers/getEmail"
import getParallaxOffset from "../../helpers/getParallaxOffset"

const HeroSection = () => {
  const imageRef = useRef()
  const [email, setEmail] = useState("")
  const [imageParallaxOffset, setImageParallaxOffset] = useState(0)

  useEffect(() => {
    setEmail(getEmail())
  }, [])

  useEffect(() => {
    const handleScroll = () =>
      setImageParallaxOffset(getParallaxOffset(imageRef, -0.25, 0.35))
    handleScroll()

    window.addEventListener("scroll", handleScroll)

    return () => window.removeEventListener("scroll", handleScroll)
  }, [imageParallaxOffset])

  return (
    <section className="section-hero">
      <div className="section-hero__background">
        <div className="container">
          <div className="row justify-content-end">
            <div className="col col-10">
              <img
                ref={imageRef}
                style={{
                  transform: `translateY(${imageParallaxOffset}px)`,
                }}
                src="/hero.png"
                alt="Autobahn Langzeitbelichtung"
              />
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
                  <a
                    href="https://linkedin.com/in/rhoeltge"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Icon path={mdiLinkedin} size={3} />
                  </a>
                  <a
                    href="https://github.com/rhoeltge"
                    target="_blank"
                    rel="noreferrer"
                  >
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
