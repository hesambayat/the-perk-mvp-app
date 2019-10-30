import gql from 'graphql-tag'

const CREDIT = gql`
  subscription credit {
    credit {
      node {
        title
        amount
        creditTo {
          id
        }
        creditBy {
          id
        }
      }
    }
  }
`

const USER = gql`
  subscription user {
    user {
      node {
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
  }
`

export { CREDIT, USER }