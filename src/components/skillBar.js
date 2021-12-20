import React, { useState, useEffect, useRef } from "react"

import classNames from "classnames"

const SkillBar = props => {
  const skillBarRef = useRef()
  const [wasInView, setWasInView] = useState(false)

  useEffect(() => {
    const handleScroll = () =>
      setWasInView(
        wasInView
          ? true
          : window.scrollY + window.innerHeight >
              skillBarRef.current.offsetTop +
                skillBarRef.current.offsetHeight * 0.5
      )
    handleScroll()

    window.addEventListener("scroll", handleScroll)

    return () => window.removeEventListener("scroll", handleScroll)
  }, [wasInView])

  return (
    <div
      ref={skillBarRef}
      className={classNames("skill-bar", { "skill-bar--pre": !wasInView })}
    >
      <div className="skill-bar__label">{props.skill}</div>
      <div className="skill-bar__bar">
        <div
          style={{ width: `${props.percentage}%` }}
          className="skill-bar__bar-fill"
        ></div>
      </div>
    </div>
  )
}

export default SkillBar
