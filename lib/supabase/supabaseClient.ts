import { createClient } from "@supabase/supabase-js"
import type { Testimonial } from "types/testimonials"

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL as string
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_KEY as string

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

export const getTestimonials = async () => {
  const { data, error } = await supabase.from<Testimonial>("testimonials").select("*")

  if (error) {
    throw new Error(`${error.message}: ${error.details}`)
  }

  return data
}
