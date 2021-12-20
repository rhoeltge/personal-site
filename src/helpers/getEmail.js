const getEmail = () => {
  const parts = ["ltge.de", "ruw", 64, "en", "hoe"]

  return (
    parts[1] + parts[3] + String.fromCharCode(parts[2]) + parts[4] + parts[0]
  )
}

export default getEmail
