import * as BrainHubCarousel from '@brainhubeu/react-carousel'
import React from "react"
{ Dots, slidesToShowPlugin }
import styles from "ui/Testimonial/Testimonial.module.scss";


type Props = {

}

export const Carousel = ({ slides }: Props) => {
  const [dotValue, setDotValue] = React.useState(0);
  const [slides, setSlides] = React.useState<JSX.Element[]>([])
  return (
    <div className="container">
          <div className="testimonials">
            <div className={styles.modal}>
              <h2 className={styles.heading}>Guest reviews</h2>
              <BrainHubCarousel
                plugins={[
                  'centered',
                  {
                    resolve: BrainHubCarousel.slidesToShowPlugin,
                    options: {
                    numberOfSlides: 1
                    }
                  },
                ]}
                value={dotValue}
                slides={slides}
                itemWidth={450}
                onChange={(value) => setDotValue(value)}
              />
              <BrainHubCarousel.Dots
                value={dotValue}
                onChange={(value) => setDotValue(value)}
                number={testimonials?.length}
              />
            </div>
          </div>
        </div>
  )
}