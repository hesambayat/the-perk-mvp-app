import gql from 'graphql-tag'

const CREATE_CREDIT = gql`
  mutation CreateUser($user: ID!, $amount: String!, $title: String!) {
    createCredit(data: {
      title: $title
      amount: $amount
      creditTo: {
        connect: {
          id: $user
        }
      }
    }) {
      id
    }
  }
`

const CREATE_USER = gql`
  mutation CreateUser($department: ID, $email: String!, $name: String!) {
    createUser(data: {
      name: $name
      email: $email
      password: "12345678"
      rule: "user"
      department: {
        connect: {
          id: $department
        }
      }
    }) {
      user {
        id
      }
    }
  }
`

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

export { CREATE_CREDIT, CREATE_USER, LOGIN }