import { ApolloClient, InMemoryCache } from "@apollo/client";

import { HASURA_ENDPOINT } from './endpoint'

const client = new ApolloClient({
  cache: new InMemoryCache({}),
  uri: HASURA_ENDPOINT,
});

export { client };