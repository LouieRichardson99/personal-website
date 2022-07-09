function formatID(heading) {
  return heading.replace(/\W+/g, "-").toLowerCase()
}

module.exports = formatID
