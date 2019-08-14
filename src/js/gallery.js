const Gallery = (gallery) => {
  let rightButton
  let showingRightButton = false

  const container = gallery.querySelector('.gallery__container')

  const width = () => gallery.clientWidth

  const showRightButton = () => {
    showingRightButton = true
    gallery.appendChild(rightButton)
  }

  const hideRightButton = () => {
    showingRightButton = false
    gallery.removeChild(rightButton)
  }

  const createButton = (dir = 'next') => {
    const button = document.createElement('button')
    button.innerText = dir === 'next'
      ? '>'
      : '<'

    button.classList.add(dir)
    button.onclick = () => {
      go(dir)
    }

    gallery.onmouseenter = () => {
      if (!showingRightButton)
        showRightButton()
    }

    gallery.onmouseleave = () => {
      if (showingRightButton)
        hideRightButton()
    }

    return button
  }

  const go = (dir = 'next') => {
    const direction = dir === 'next'
      ? 1
      : -1

    container.scrollLeft += direction * width()
  }

  const load = () => {
    rightButton = createButton()
  }

  return { load }
}

export default Gallery
