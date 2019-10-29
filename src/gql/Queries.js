import gql from 'graphql-tag'

const USERS = gql`
  query {
    users {
      id
      name
      rule
      balance
      department {
        name
      }
      lastTransaction {
        title
        amount
      }
      credits {
        title
        amount
      }
    }
  }
`

export { USERS }