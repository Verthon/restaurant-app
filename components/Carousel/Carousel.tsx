import { Dots, slidesToShowPlugin } from "@brainhubeu/react-carousel";
import BrainHubCarousel from "@brainhubeu/react-carousel";
import React from "react";

import styles from "ui/Testimonial/Testimonial.module.scss";
import { Testimonial } from "ui/Testimonial/Testimonial";
import { Props } from "./Carousel.types";

const CONFIG = {
  numberOfSlides: 1,
  itemWidth: 450,
}

export const Carousel = ({ testimonials, loading, error }: Props) => {
  const [dotValue, setDotValue] = React.useState(0);
  const [slides, setSlides] = React.useState<JSX.Element[]>([]);

  React.useEffect(() => {
    if (testimonials && !loading && !error) {
      const allTestimonials = testimonials.map((testimonial) => {
        return (
          <Testimonial
            key={testimonial.id}
            author={testimonial.author}
            text={testimonial.text}
          />
        );
      });
      setSlides(allTestimonials);
    }
  }, [testimonials]);

  return (
    <div className="container">
      <div className={styles.modal}>
        <h2 className={styles.heading}>Guest reviews</h2>
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
        <Dots
          value={dotValue}
          onChange={(value) => setDotValue(value)}
          number={testimonials?.length}
        />
      </div>
    </div>
  );
};
