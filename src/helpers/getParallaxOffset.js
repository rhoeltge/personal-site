const getParallaxOffset = (ref, factor, pos) => {
  if (!ref.current) {
    return 0
  }

  return (
    (window.scrollY +
      window.innerHeight * pos -
      ref.current.offsetHeight * 0.5 -
      ref.current.offsetTop) *
    factor *
    -1
  )
}

export default getParallaxOffset
