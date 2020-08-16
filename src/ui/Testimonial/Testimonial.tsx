import React from 'react'

import './Testimonial.scss'

type Props = { author: string; text: string }

export const Testimonial: React.FC<Props> = ({ author, text }) => (
  <blockquote className="testimonials__modal__quote">
    <p className="testimonials__text">{text}</p>
    <p className="quote-writer">{author}</p>
  </blockquote>
)
