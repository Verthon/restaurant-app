import { ApolloClient, InMemoryCache } from '@apollo/client'

export const client = new ApolloClient({
  uri: process.env.NEXT_PUBLIC_HASURA_ENDPOINT,
  credentials: "same-origin",
  headers: {
    "X-hasura-admin-secret": process.env.HASURA_GRAPHQL_ADMIN_SECRET!,
  },
  cache: new InMemoryCache(),
});