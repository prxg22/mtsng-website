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

  const showButton = (dir = 'next') => {
    showing[dir] = true
    gallery.appendChild(button[dir])
  }

  const hideButton = (dir = 'next') => {
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

    gallery.onmouseenter = () => showButton('next') || showButton('prev')
    gallery.onmouseleave = () => hideButton('next') || hideButton('prev')
  }

  return { load }
}

export default Gallery
