import React, { useState, useEffect } from "react"

import SiteLayout from "../components/siteLayout"
import HeroSection from "../components/sections/heroSection"
import SkillsSection from "../components/sections/skillsSection"
import AboutMeSection from "../components/sections/aboutMeSection"

const Home = () => {
  return (
    <SiteLayout>
      <HeroSection />
      <AboutMeSection />
      <SkillsSection />
    </SiteLayout>
  )
}

export default Home
