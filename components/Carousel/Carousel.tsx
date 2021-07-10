import * as React from "react"
import { Dots, slidesToShowPlugin } from "@brainhubeu/react-carousel"
import BrainHubCarousel from "@brainhubeu/react-carousel"
import "@brainhubeu/react-carousel/lib/style.css"

import styles from "ui/Testimonial/Testimonial.module.scss"
import { Testimonial } from "ui/Testimonial/Testimonial"
import { Heading } from "ui/Heading/Heading"
import { Container } from "ui/Container/Container"
import { Props } from "./Carousel.types"

const CONFIG = {
  numberOfSlides: 1,
  itemWidth: 450,
}

export const Carousel = ({ testimonials, loading, error }: Props) => {
  const [dotValue, setDotValue] = React.useState(0)
  const [slides, setSlides] = React.useState<JSX.Element[]>([])

  React.useEffect(() => {
    if (testimonials && !loading && !error) {
      const allTestimonials = testimonials.map((testimonial) => {
        return <Testimonial key={testimonial.id} author={testimonial.author} text={testimonial.text} />
      })
      setSlides(allTestimonials)
    }
  }, [testimonials])

  return (
    <Container>
      <div className={styles.modal}>
        <Heading level="h2" size="sm" color="secondary">
          Guest reviews
        </Heading>
        <BrainHubCarousel
          plugins={[
            "centered",
            {
              resolve: slidesToShowPlugin,
              options: {
                numberOfSlides: CONFIG.numberOfSlides,
              },
            },
          ]}
          value={dotValue}
          slides={slides}
          itemWidth={CONFIG.itemWidth}
          onChange={(value) => setDotValue(value)}
        />
        <Dots value={dotValue} onChange={(value) => setDotValue(value)} number={testimonials?.length} />
      </div>
    </Container>
  )
}
