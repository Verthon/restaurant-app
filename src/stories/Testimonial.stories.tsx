import React from 'react'

import { Testimonial } from '../ui/Testimonial/Testimonial'
import '../scss/index.scss'

export default {
  title: 'Testimonial',
  component: Testimonial
}

export const DefaultTestimonial = () => <Testimonial author="Michael Townley" text="My wonderful testimonial, I have spent entire day to write this!" />