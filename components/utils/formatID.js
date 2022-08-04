function formatID(heading) {
  if (typeof heading === "object") {
    return heading.text.toLowerCase().replace(/\s/g, "-")
  }

  return heading.toLowerCase().replace(/\s/g, "-")
}

module.exports = formatID
