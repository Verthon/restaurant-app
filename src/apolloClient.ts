import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  cache: new InMemoryCache({}),
  uri: process.env.REACT_APP_HASURA_ENDPOINT,
  headers: {
    'X-hasura-admin-secret': process.env.REACT_APP_HASURA_GRAPHQL_ADMIN_SECRET!
  }
});

export { client };