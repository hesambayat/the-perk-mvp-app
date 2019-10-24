import ApolloBoost, { gql } from 'apollo-boost'
import Query from './Query'
import Storage from './Storage'

const Client = new ApolloBoost({
  uri: 'http://localhost:3223'
})

export { Client, gql, Query, Storage }