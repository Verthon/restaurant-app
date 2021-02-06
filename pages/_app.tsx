import { ApolloProvider } from '@apollo/client'
import { useApollo } from '../lib/apollo/apolloClient'

import "../styles/index.scss"

export default function App({ Component, pageProps }) {
  const apolloClient = useApollo(pageProps)

  return (
    <ApolloProvider client={apolloClient}>
      <Component {...pageProps} />
    </ApolloProvider>
  )
}
