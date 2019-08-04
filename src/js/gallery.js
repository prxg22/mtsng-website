const Gallery = (container) => {
  let width
  let rightButton
  let showingRightButton = false

  const updateWidth = () => {
    width = container.clientWidth
  }

  const showRightButton = () => {
    showingRightButton = true
    container.appendChild(rightButton)
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

    return button
  }

  const go = (dir = 'next') => {
    updateWidth()
    const direction = dir === 'next'
      ? 1
      : -1

    container.scrollLeft += direction * width
  }

  const load = () => {
    updateWidth()
    rightButton = createButton()

    container.onmouseenter = () => {
      if (container.scrollLeft <= 0 && !showingRightButton)
        showRightButton()
    }
  }

  return { load }
}

export default Gallery
