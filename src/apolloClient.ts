// Remove the apollo-boost import and change to this:
import { ApolloClient, InMemoryCache } from "@apollo/client";

import { split, HttpLink } from '@apollo/client';
import { getMainDefinition } from '@apollo/client/utilities';
import { WebSocketLink } from '@apollo/client/link/ws';

export const HASURA_GRAPHQL_ENGINE_HOSTNAME = 'realtime-poll.demo.hasura.app';

const httpLink = new HttpLink({
  uri: process.env.REACT_APP_HASURA_ENDPOINT
});

const wsLink = new WebSocketLink({
  uri: `ws://localhost:5000/`,
  options: {
    reconnect: true
  }
});

// The split function takes three parameters:
//
// * A function that's called for each operation to execute
// * The Link to use for an operation if the function returns a "truthy" value
// * The Link to use for an operation if the function returns a "falsy" value
const splitLink = split(
  ({ query }) => {
    const definition = getMainDefinition(query);
    return (
      definition.kind === 'OperationDefinition' &&
      definition.operation === 'subscription'
    );
  },
  wsLink,
  httpLink,
);


const client = new ApolloClient({
  link: splitLink,
  cache: new InMemoryCache({}),
  uri: process.env.REACT_APP_HASURA_ENDPOINT,
  headers: {
    'X-hasura-admin-secret': process.env.REACT_APP_HASURA_GRAPHQL_ADMIN_SECRET!
  }
});

export { client };