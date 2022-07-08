const nth = (d) => {
  if (d > 3 && d < 21) return "th"
  switch (d % 10) {
    case 1:
      return "st"
    case 2:
      return "nd"
    case 3:
      return "rd"
    default:
      return "th"
  }
}

const formatDate = (unixEpoch) => {
  const day = Intl.DateTimeFormat("en-us", { day: "numeric" }).format(unixEpoch)
  const nthDay = `${day}${nth(day)}`

  const month_year = Intl.DateTimeFormat("en-us", {
    year: "numeric",
    month: "long",
  }).format(unixEpoch)

  return `${nthDay} ${month_year}`
}

module.exports = { formatDate }
