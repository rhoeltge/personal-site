const scrollToElement = (event, targetID) => {
  event.preventDefault()

  const targetEl = document.getElementById(targetID)

  if (!targetEl) {
    return
  }

  window.scrollTo({ top: targetEl.offsetTop - 150, behavior: "smooth" })
}

export default scrollToElement
