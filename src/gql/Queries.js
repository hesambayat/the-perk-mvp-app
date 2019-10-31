import gql from 'graphql-tag'

const DEPARTMENTS = gql`
  query {
    departments {
      id
      name
    }
  }
`

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

export { DEPARTMENTS, USERS }