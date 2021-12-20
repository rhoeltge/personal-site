import React from "react"

const Testimonial = props => {
  return (
    <div className="testimonial">
      <div className="testimonial__title">
        <img
          className="testimonial__picture"
          src={props.image}
          alt={props.name}
        />
        <div className="testimonial__caption">
          <h4>{props.name}</h4>
          <p>{props.position}</p>
        </div>
      </div>
      <div className="testimonial__content">{props.children}</div>
    </div>
  )
}

export default Testimonial
