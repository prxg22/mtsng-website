import smoothscroll from 'smoothscroll-polyfill'
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

  smoothscroll.polyfill()

  // header
  menuButton.onclick = () => {
    headerController.toggle()
  }

  nav.onclick = (ev) => {
    const { target } = ev
    const anchors = Array.prototype.slice.call(navAnchors)
    if (!anchors.includes(target)) return
    ev.preventDefault()

    const selector = target.attributes.href.value
    const section = document.querySelector(selector)

    section.scrollIntoView({ behavior: 'smooth' })
    headerController.close()
  }

  logo.onclick = (ev) => {
    debugger
    ev.preventDefault()
    const section = document.querySelector('#cover')
    section.scrollIntoView({ behavior: 'smooth' })
    headerController.close()
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
