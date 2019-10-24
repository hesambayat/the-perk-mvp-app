export default {
  get: prop => {
    try {
      const text = localStorage[prop]
      const data = JSON.parse(text)
      return data
    } catch (err) {
      return undefined
    }
  },
  set: (prop, value) => {
    const data = JSON.stringify(value)
    localStorage[prop] = data
    return true
  }
}