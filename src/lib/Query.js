import { Client } from '.'

export default function (query) {
  return new Promise((resolve, reject) => {
    Client.query({
      query
    }).then(res => resolve(res))
  })
}
