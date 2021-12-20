import React, { useState, useEffect } from "react"

import SiteLayout from "../components/siteLayout"
import HeroSection from "../components/sections/heroSection"
import SkillsSection from "../components/sections/skillsSection"

const Home = () => {
  return (
    <SiteLayout>
      <HeroSection />
      <SkillsSection />
    </SiteLayout>
  )
}

export default Home
