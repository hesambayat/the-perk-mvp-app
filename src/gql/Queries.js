import gql from 'graphql-tag'

const USERS = gql`
  query {
    users {
      id
      name
      rule
      credits {
        title
        amount
      }
    }
  }
`

export { USERS }