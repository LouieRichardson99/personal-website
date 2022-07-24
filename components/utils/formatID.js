function formatID(heading) {
  return heading.replace(/\s/g, "-").toLowerCase()
}

module.exports = formatID
