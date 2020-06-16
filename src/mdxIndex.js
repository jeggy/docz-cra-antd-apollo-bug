import React from 'react';
import { ApolloClient } from 'apollo-client';
import { ApolloProvider } from '@apollo/react-hooks';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';


const client = new ApolloClient({
  link: new HttpLink({ uri: 'https://spotify-graphql-server.herokuapp.com/graphql' }),
  cache: new InMemoryCache(),
});

export default ({ children }) => (
  <ApolloProvider client={client}>
    {children}
  </ApolloProvider>
);

