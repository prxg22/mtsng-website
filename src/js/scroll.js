const ScrollAnimation = (container, target, callback) => {
  const min = target.scrollTop
  const max = min + target.offsetHeight
  let lastPosition = container.scrollY
  let _end = false
  let _pause = false

  const onScroll = (ev) => {
    if (_end || _pause) return
    ev.preventDefault()

    const offset = container.scrollY
    callback(offset)
  }

  const init = () => {
    _end = false
    container.style = 'overflow-y: hidden'
    container.addEventListener('scroll', onScroll)
  }

  const end = () => {
    _end = true
    container.style = 'overflow-y: auto'
    container.removeEventListener(scroll, onScroll)
  }

  const pause = () => {
    _pause = true
  }

  const resume = () => {
    _pause = false
  }

  return { init, end, pause, resume }
}

window.ScrollAnimation = ScrollAnimation
