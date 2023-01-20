import { ApolloClient, InMemoryCache,createHttpLink } from '@apollo/client/core'
const cache = new InMemoryCache();
const HttpLink = new createHttpLink({
  uri: 'https://innocent-hare-56.hasura.app/v1/graphql',
  headers: {
    'x-hasura-admin-secret':'XISb4EgoKs0HvklvBBcjW0p1kAwJmHphDK1KsHBFtbMzTmqJcB4N78H6CMB6Nrhk',
    'content-type':'application/json',

}
})
const apolloClient = new ApolloClient({
    link: HttpLink,
    
    cache
})

export {apolloClient}