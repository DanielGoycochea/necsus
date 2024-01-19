const getLagerNumber = (listNumbers) => {
  if (!Array.isArray(listNumbers) || !listNumbers.length) {
    return null
  }
  return Math.max(...listNumbers)
}
