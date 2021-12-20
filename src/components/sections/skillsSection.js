import React from "react"
import SkillBar from "../skillBar"

const SkillsSection = () => {
  const techSkills = [
    { skill: "WordPress", percentage: 80 },
    { skill: "React", percentage: 80 },
    { skill: "Angular", percentage: 60 },
    { skill: "Flutter", percentage: 80 },
    { skill: "Node.js", percentage: 60 },
    { skill: "MongoDB", percentage: 50 },
    { skill: "MySQL", percentage: 50 },
    { skill: "HTML", percentage: 90 },
    { skill: "CSS", percentage: 95 },
    { skill: "JavaScript", percentage: 90 },
    { skill: "Git", percentage: 80 },
  ]

  const softwareSkills = [
    { skill: "Photoshop", percentage: 80 },
    { skill: "Illustrator", percentage: 70 },
    { skill: "Adobe XD", percentage: 75 },
    { skill: "Sketch", percentage: 80 },
    { skill: "Figma", percentage: 80 },
  ]

  const languageSkills = [
    { skill: "Deutsch", percentage: 80 },
    { skill: "Englisch", percentage: 80 },
    { skill: "Französisch", percentage: 80 },
  ]

  const skills = [
    { title: "Technologien", skills: techSkills },
    { title: "Software", skills: softwareSkills },
    { title: "Sprachen", skills: languageSkills },
  ]

  return (
    <section id="skills" className="section-skills">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col col-12 col-lg-10 col-xl-8">
            <h6>Skills</h6>
            <h2>Womit?</h2>
            {skills.map(el => (
              <React.Fragment key={el.title}>
                <h3>{el.title}</h3>
                {el.skills.map(el => (
                  <React.Fragment key={el.skill}>
                    <SkillBar skill={el.skill} percentage={el.percentage} />
                  </React.Fragment>
                ))}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default SkillsSection
