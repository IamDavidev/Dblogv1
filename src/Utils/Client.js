import { ApolloClient, HttpLink, from, InMemoryCache } from '@apollo/client';
import { onError } from '@apollo/client/link/error';
import { URI_BACKEND } from './SchemasQueries';

const httpLink = new HttpLink({
  uri: `${URI_BACKEND}/graphql`,
});

const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        posts: {
          merge(existing, incoming,{mergeObjects}) {
            return mergeObjects(existing, incoming);
          },
        },
      },
    },
  },
});

const errorLink = onError(({ graphQLErrors, networkError }) => {
  graphQLErrors &&
    graphQLErrors.map(({ message, locations, path }) => {
      console.error(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
      );
    });
  networkError && console.error(`[Network error]: ${networkError}`);
});

export const client = new ApolloClient({
  link: from([errorLink, httpLink]),
  cache,
});
