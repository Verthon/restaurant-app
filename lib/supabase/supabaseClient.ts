import { createClient } from "@supabase/supabase-js"
import type { Booking, BookingPayload } from "types/booking"
import type { Product } from "types/product"
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

export const getProducts = async () => {
  const { data, error } = await supabase.from<Product>("products").select("*")

  if (error) {
    throw new Error(`${error.message}: ${error.details}`)
  }

  return data
}

export const addBooking = async (booking: BookingPayload) => {
  const { data, error } = await supabase.from<Booking>("bookings").insert(booking, { returning: "minimal" })

  if (error) {
    throw new Error(`${error.message}: ${error.details}`)
  }

  return data
}
