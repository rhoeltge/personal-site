import React, { useState, useEffect } from "react"

import SiteLayout from "../components/siteLayout"

import getEmail from "../helpers/getEmail"

const Impressum = () => {
  const [email, setEmail] = useState("")

  useEffect(() => {
    setEmail(getEmail())
  }, [])

  return (
    <SiteLayout>
      <div className="container impressum">
        <h1>Impressum</h1>
        <p>Angaben gemäß § 5 TMG</p>
        <p>
          Ruwen Höltge <br />
          Hellehohlweg 20
          <br />
          59929 Brilon <br />
        </p>
        <p>
          <h4>Vertreten durch: </h4>
          Ruwen Höltge
          <br />
        </p>
        <p>
          <h4>Kontakt:</h4>
          Telefon: <a href="tel:+4915759631001">+49 1575 9631001</a>
          <br />
          E-Mail: <a href={`mailto:${email}`}>{email}</a>
          <br />
        </p>
        <p>
          <h3>Haftungsausschluss:</h3>
          <h4>Haftung für Links</h4>
          Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren
          Inhalte wir keinen Einfluss haben. Deshalb können wir für diese
          fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der
          verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der
          Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der
          Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige
          Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine
          permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne
          konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei
          Bekanntwerden von Rechtsverletzungen werden wir derartige Links
          umgehend entfernen.
        </p>
      </div>
    </SiteLayout>
  )
}

export default Impressum
