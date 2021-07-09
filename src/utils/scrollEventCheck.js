const isEnterViewport = (element) => {
  const rect = element.getBoundingClientRect()
  return (rect.top < 120 && rect.top > 0) || (rect.top > -120 && rect.top < 0)
}

export {
  isEnterViewport,
}
