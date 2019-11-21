export default {
  type: String,
  required: false,
  default() {
    const random = Math.random()
      .toString(36)
      .substring(7)
    return `field-${random}`
  },
}
