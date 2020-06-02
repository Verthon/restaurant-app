import React from 'react'
import PropTypes from 'prop-types'

const Testimonial = ({ author, text }) => (
  <blockquote className="testimonials__modal__quote">
    <p className="testimonials__text">{text}</p>
    <p className="quote-writer">{author}</p>
  </blockquote>
)

Testimonial.propTypes = {
  author: PropTypes.string,
  text: PropTypes.string
}

export default Testimonial
