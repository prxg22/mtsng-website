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
  const images = gallery.querySelectorAll('img')

  const width = () => gallery.clientWidth
  const isMobile = () => window.innerWidth < 1024

  const previewContainer = document.createElement('div')
  previewContainer.classList.add('preview-container')

  const labelContainer = document.createElement('p')
  previewContainer.appendChild(labelContainer)
  labelContainer.classList.add('label')

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

    container.scrollBy({
      left: container.clientWidth * direction,
      behavior: 'smooth'
    })
  }

  const closePreviewOnEsc = ({ keyCode }) => {
    if (keyCode !== 27) return

    closePreview({ target: previewContainer })
  }

  const closePreview = ({ target }) => {
    if (target !== previewContainer) return

    const img = previewContainer.querySelector('img')
    previewContainer.removeChild(img)

    document.body.removeEventListener('keydown', closePreviewOnEsc)
    document.body.removeChild(previewContainer)
  }

  const openPreview = ({ target }) => {
    if (target.nodeName !== 'IMG') return

    previewContainer.appendChild(target.cloneNode())
    previewContainer.onclick = closePreview

    const label = target.getAttribute('alt')
    labelContainer.innerText = label

    document.body.addEventListener('keydown', closePreviewOnEsc)
    document.body.appendChild(previewContainer)
  }

  const load = () => {
    button = {
      next: Button('next', { onClick: go }),
      prev: Button('prev', { onClick: go }),
    }

    gallery.onmouseenter = () => showButton('prev') || showButton('next')
    gallery.onmouseleave = () => hideButton('prev') || hideButton('next')

    gallery.onclick = openPreview
  }

  return { load }
}

export default Gallery
