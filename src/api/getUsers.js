import { Query, gql } from '../lib'

export default async function () {
  try {
    const result = await Query(
      gql`
        query {
          users {
            name
          }
        }
      `
    )

    return result.data.users
  } catch (e) {
    throw e
  }
}