import React from "react"
import SkillBar from "../skillBar"

const SkillsSection = () => {
  const techSkills = [
    { skill: "WordPress", percentage: 90 },
    { skill: "React", percentage: 85 },
    { skill: "Angular", percentage: 65 },
    { skill: "Flutter", percentage: 90 },
    { skill: "Node.js", percentage: 70 },
    { skill: "MongoDB", percentage: 50 },
    { skill: "MySQL", percentage: 55 },
    { skill: "HTML", percentage: 100 },
    { skill: "CSS", percentage: 100 },
    { skill: "JavaScript", percentage: 95 },
    { skill: "Git", percentage: 75 },
  ]

  const softwareSkills = [
    { skill: "Photoshop", percentage: 90 },
    { skill: "Illustrator", percentage: 80 },
    { skill: "Adobe XD", percentage: 80 },
    { skill: "Sketch", percentage: 90 },
    { skill: "Figma", percentage: 85 },
  ]

  const languageSkills = [
    { skill: "Deutsch", percentage: 100 },
    { skill: "Englisch", percentage: 95 },
    { skill: "Französisch", percentage: 55 },
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
            <h2>Meine Werkzeuge</h2>
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
