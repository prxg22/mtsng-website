import HeaderController from './header'
import Gallery from './gallery'

window.onload = () => {
  const headerController = HeaderController('header')

  const nav = document.querySelector('header nav')
  const navAnchors = document.querySelectorAll('header nav a')
  const menuButton = document.querySelector('#menu_btn')
  const logo = document.querySelector('a#logo')
  const main = document.querySelector('main')
  const cover = document.querySelector('#cover')
  const galleries = []

  // header
  menuButton.onclick = () => {
    headerController.toggle()
  }

  nav.onclick = ({ target }) => {
    const anchors = Array.prototype.slice.call(navAnchors)
    if (anchors.includes(target)) headerController.close()
  }

  logo.onclick = ({ currentTarget }) => {
    if (currentTarget === logo) headerController.close()
  }

  // galleries
  document.querySelectorAll('.gallery').forEach(g => {
    const gallery = Gallery(g)
    galleries.push(gallery)
    gallery.load()
  })

  window.onresize = () => {
    galleries.forEach(gallery => {
      gallery.load()
    })
  }
}
