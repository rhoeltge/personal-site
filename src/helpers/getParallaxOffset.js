const getParallaxOffset = (ref, factor) => {
  if (!ref.current) {
    return 0
  }

  return (
    (window.scrollY +
      window.innerHeight * 0.35 -
      ref.current.offsetHeight * 0.5 -
      ref.current.offsetTop) *
    factor *
    -1
  )
}

export default getParallaxOffset
