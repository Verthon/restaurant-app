import { ApolloError } from "@apollo/client";

export type Testimonial = {
  id: number;
  author: string;
  text: string;
};

export type Props = {
  testimonials: Testimonial[];
  loading: boolean;
  error: ApolloError | null;
};