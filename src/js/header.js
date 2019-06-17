const HeaderController = (headerSelector = 'header') => {
  const header = document.querySelector(headerSelector)

  let _open = false

  const open = () => {
    _open = true
    header.classList.add('open')
  }

  const close = () => {
    _open = false
    header.classList.remove('open')
  }

  const toggle = () => {
    const action = _open ? 'close' : 'open'
    _open = !_open

    const actions = { open, close }
    actions[action]()
  }

  return { open, close, toggle }
}

window.HeaderController = HeaderController
