import { definitions } from "./supabase"

export type Booking = definitions["bookings"]

export type BookingPayload = Omit<Booking, "id">
