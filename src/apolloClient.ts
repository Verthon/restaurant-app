import { ApolloClient, InMemoryCache } from "@apollo/client";

import { HASURA_ENDPOINT, HASURA_GRAPHQL_ADMIN_SECRET } from './endpoint'

const client = new ApolloClient({
  cache: new InMemoryCache({}),
  uri: HASURA_ENDPOINT,
  headers: {
    'X-hasura-admin-secret': HASURA_GRAPHQL_ADMIN_SECRET
  }
});

export { client };