import React, { useState, useEffect, useRef } from "react"
import getParallaxOffset from "../../helpers/getParallaxOffset"

import scrollToElement from "../../helpers/scrollToElement"

const AboutMeSection = () => {
  const imageRef = useRef()
  const [imageParallaxOffset, setImageParallaxOffset] = useState(0)

  useEffect(() => {
    const handleScroll = () =>
      setImageParallaxOffset(getParallaxOffset(imageRef, 0.25, 0.6))
    handleScroll()

    window.addEventListener("scroll", handleScroll)

    return () => window.removeEventListener("scroll", handleScroll)
  }, [imageParallaxOffset])

  return (
    <section id="about" className="section-about-me">
      <div className="container">
        <div className="row">
          <div className="col col-12 col-lg-6 col-xl-5">
            <img
              className="section-about-me__image"
              src="/ruwen.jpeg"
              alt="Ruwen Höltge"
              ref={imageRef}
              style={{
                transform: `translateY(${imageParallaxOffset}px)`,
              }}
            />
          </div>
          <div className="col col-12 col-lg-6 col-xl-7">
            <div className="section-about-me__text">
              <h6>Über Mich</h6>
              <h2>Hallo!</h2>
              <p>
                Mein Name ist Ruwen Höltge. Seit nunmehr über fünf Jahren
                beschäftige ich mich leidenschaftlich sowohl mit der
                Webentwicklung als auch mit der grafischen Gestaltung. Meine
                Berufsausbildung in der Mediengestaltung absolvierte ich bei der
                kreativkarussell GmbH in Brilon.
              </p>
              <p>
                Ich liebe es, neue{" "}
                <a
                  href="#skills"
                  onClick={event => {
                    scrollToElement(event, "skills")
                  }}
                >
                  Technologien
                </a>{" "}
                kennenzulernen und mein Wissen stetig zu erweitern. In meiner
                Freizeit beschäftige ich mich außerdem mit Linguistik,
                Fremdsprachendidaktik und der Erstellung von Musik.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutMeSection
