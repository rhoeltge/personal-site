import React, { useState, useEffect } from "react"

import SiteLayout from "../components/siteLayout"
import HeroSection from "../components/sections/heroSection"
import SkillsSection from "../components/sections/skillsSection"
import ProjectsSection from "../components/sections/projectsSection"
import AboutMeSection from "../components/sections/aboutMeSection"

const Home = () => {
  return (
    <SiteLayout>
      <HeroSection />
      <AboutMeSection />
      <ProjectsSection />
      <SkillsSection />
    </SiteLayout>
  )
}

export default Home
