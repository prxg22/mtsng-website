const scroll = (container) => {
  let showing = []
  let fading = []

  const show = (els) => {
    showing = [ ...showing, ...els ]
  }

  const fade = (els) => {
    fading = [ ...fading, ...els ]
  }

  const opacity = (el, style) => el.style.opacity = style

  container.onscroll = () => {
    let length = showing.length
    showing.forEach((el, index) => {
      const edge = container.scrollHeight - container.clientHeight

      if (index === length - 1 && container.scrollTop >= edge) {
        opacity(el, '1')
        return
      }

      const top = el.offsetTop
      const offset = container.scrollTop - top
      opacity(el, `${1 + (offset / 500)}`)
    })

    length = fading.length
    fading.forEach((el, index) => {
      if (container.scrollTop <= 0) {
        opacity(el, '1')
        return
      }

      const top = el.getBoundingClientRect().top
      const offset = top - container.scrollTop
      opacity(el, `opacity: ${(offset / 500) - 1}`)
    })
  }

  return { show, fade }
}

export default scroll
