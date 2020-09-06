import React, { useEffect, useState, useContext } from 'react'
import 'aos/dist/aos.css'
import AOS from 'aos'

import { Home } from './Home'
import { getCollection, getData } from '../../utils/database'
import { Testimonial } from '../../ui/Testimonial/Testimonial'
import { CompanyDataContext } from '../../context/companyData/CompanyDataContext'

export const HomeContainer = () => {
  const company = useContext(CompanyDataContext)
  const { hours, location, contact } = company.companyData
  const [dotValue, setDotValue] = useState(0)
  const [slides, setSlides] = useState<JSX.Element[]>([])
  useEffect(() => {
    AOS.init({ duration: 750 })
  }, [])
  useEffect(() => {
    getCollection('testimonials').then(snapshot => {
      const data = getData(snapshot)
      const allTestimonials = data.map(testimonial => {
        return <Testimonial key={testimonial.id} author={testimonial.data.author} text={testimonial.data.text} />
      })
      setSlides(allTestimonials)
    })
  }, [])
  return <Home company={{hours, location, contact}} dotState={{dotValue, setDotValue}} slidesState={{slides, setSlides}}/>
}