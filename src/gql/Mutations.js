import gql from 'graphql-tag'

const LOGIN = gql`
  mutation Login($email: String!, $password: String!) {
    login(data: {
      email: $email
      password: $password
    }) {
      token
      user {
        id
        name
        email
        rule
      }
    }
  }
`

export { LOGIN }