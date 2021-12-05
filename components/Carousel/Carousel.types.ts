import { Testimonial } from "types/testimonials"

export type Props = {
  loading: boolean
  error: boolean
  testimonials?: Testimonial[] | null
}
