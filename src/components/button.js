import React from "react"
import Icon from "@mdi/react"

const Button = props => {
  const buttonContent = (
    <React.Fragment>
      {props.icon && <Icon path={props.icon} size={1.5} />}
      <span>{props.label}</span>
    </React.Fragment>
  )

  if (props.type === "button") {
    return <button className="button">{buttonContent}</button>
  } else {
    return (
      <a
        className="button no-underline"
        href={props.href}
        target={props.target}
      >
        {buttonContent}
      </a>
    )
  }
}

Button.defaultProps = {
  type: "button",
}

export default Button
