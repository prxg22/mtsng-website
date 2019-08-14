const Button = (dir, {
  onClick,
  onMouseEnter,
  onMouseLeave,
}) => {
  const button = document.createElement('button')

  button.innerText = dir === 'next'
    ? '>'
    : '<'

  button.classList.add(dir)

  button.onclick = (ev) => {
    onClick(dir, ev)
  }

  return button
}

const Gallery = (gallery) => {
  let button
  const showing = { prev: false, next: false }
  const container = gallery.querySelector('.gallery__container')

  const width = () => gallery.clientWidth
  const isMobile = () => window.innerWidth < 1024

  const showButton = (dir = 'next') => {
    if (showing[dir] || isMobile()) return
    showing[dir] = true
    gallery.appendChild(button[dir])
  }

  const hideButton = (dir = 'next') => {
    if (!showing[dir]) return
    showing[dir] = false
    gallery.removeChild(button[dir])
  }

  const go = (dir = 'next') => {
    const direction = dir === 'next'
      ? 1
      : -1

    container.scrollLeft += direction * width()
  }

  const load = () => {
    button = {
      next: Button('next', { onClick: go }),
      prev: Button('prev', { onClick: go }),
    }

    gallery.onmouseenter = () => showButton('prev') || showButton('next')
    gallery.onmouseleave = () => hideButton('prev') || hideButton('next')
  }

  return { load }
}

export default Gallery
