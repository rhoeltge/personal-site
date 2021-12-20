import React, { useState, useEffect, useRef } from "react"

import Testimonial from "../testimonial"

import getParallaxOffset from "../../helpers/getParallaxOffset"

const ProjectsSection = () => {
  // const imageRef = useRef()
  // const [imageParallaxOffset, setImageParallaxOffset] = useState(0)

  // useEffect(() => {
  //   const handleScroll = () =>
  //     setImageParallaxOffset(getParallaxOffset(imageRef, -0.25, 0.35))
  //   handleScroll()

  //   window.addEventListener("scroll", handleScroll)

  //   return () => window.removeEventListener("scroll", handleScroll)
  // }, [imageParallaxOffset])

  return (
    <section id="projects" className="section-projects">
      <div className="container">
        <div className="row">
          <div className="col col-12 col-lg-6 col-xl-7">
            <div className="section-projects__text">
              <h6>Projekte</h6>
              <h2>Auszüge meiner Arbeit</h2>
              <h3>KlimaKarl</h3>
              <p>
                Das Bremer Start-Up{" "}
                <a target="_blank" href="https://klimakarl.de/">
                  KlimaKarl
                </a>{" "}
                bietet eine App an, mit welcher Unternehmen ihre in Teams
                aufgeteilten Mitarbeiter im Wettkampf um den geringsten CO2
                Verbrauch antreten lassen können.
              </p>
              <p>
                Im Rahmen meiner Tätigkeit bei der kreativkarussell GmbH
                entwickelte ich die Mobile App, eine REST API sowie ein internes
                Dashboard zum Management der Wettbewerbe.
              </p>
              <h4>Verwendete Technologien</h4>
              <ul>
                <li>Angular 8</li>
                <li>Flutter</li>
                <li>Node.js</li>
                <li>Express</li>
                <li>MongoDB</li>
              </ul>
              <Testimonial
                image="/hendrik.jpeg"
                name="Hendrik Hinrichs"
                position="Co-Founder KlimaKarl"
              >
                „Während der Entwicklung von KlimaKarl haben wir lange und
                intensiv mit Ruwen zusammen gearbeiten. Bei gemeinsamen Terminen
                hat er stets mitgedacht und schnell verschiedene Lösungsansätze
                geliefert. Seine logische und strukturierte Arbeitsweise hat
                nicht nur Zeit und Geld gespart, sondern auch dafür gesorgt,
                dass die App rund läuft. Wir danken Ruwen für die tolle
                Zusammenarbeit und würden ihn jedem weiterempfehlen.“
              </Testimonial>
            </div>
          </div>
          <div className="col col-12 col-lg-6 col-xl-5">
            <img
              className="section-projects__image"
              src="/klimakarl.jpeg"
              alt="KlimaKarl App"
            />
          </div>
        </div>
        <div className="row">
          <div className="col col-12 col-lg-6 col-xl-7">
            <div className="section-projects__text">
              <h3>Refold</h3>
              <p>
                <a href="https://refold.la/">Refold</a> ist eine internationale
                Sprachlern-Community, welche sich zum Ziel gesetzt gesetzt hat,
                die effektivste Methode zum Lernen von Fremdsprachen zu
                entwickeln.
              </p>
              <p>
                Ich entwarf die Corporate Identity sowie das Design System und
                Layout der Webseite und setzte diese ebenfalls um.
              </p>
              <h4>Verwendete Technologien</h4>
              <ul>
                <li>React</li>
                <li>Gatsby</li>
                <li>Sketch</li>
              </ul>
            </div>
          </div>
          <div className="col col-12 col-lg-6 col-xl-5">
            <img
              className="section-projects__image"
              src="/refold.jpeg"
              alt="Refold Website"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProjectsSection
