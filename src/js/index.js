import smoothscroll from 'smoothscroll-polyfill'
import HeaderController from './header'
import Gallery from './gallery'
import Scroll from './scroll'

window.onload = () => {
  const headerController = HeaderController('header')

  const nav = document.querySelector('header nav')
  const navAnchors = document.querySelectorAll('header nav a')
  const menuButton = document.querySelector('#menu_btn')
  const logo = document.querySelector('a#logo')
  const main = document.querySelector('main')
  const cover = document.querySelector('#cover')
  const mouseIcon = cover.querySelector('#cover .mouse-icon path')
  const sections = document.querySelectorAll('section')
  const work = document.querySelector('#work')
  const projects = work.querySelectorAll('#work article')
  const galleries = []

  smoothscroll.polyfill()

  const unlock = () => main.classList.remove('locked')
  // header
  menuButton.onclick = () => {
    headerController.toggle()
  }

  work.style.minHeight = `${projects.length * 100}%`

  nav.onclick = (ev) => {
    const { target } = ev
    const anchors = Array.prototype.slice.call(navAnchors)
    if (!anchors.includes(target)) return
    ev.preventDefault()

    const selector = target.attributes.href.value
    const section = document.querySelector(selector)

    headerController.close()
    section.scrollIntoView({ behavior: 'smooth' })
  }

  logo.onclick = (ev) => {
    ev.preventDefault()
    const section = document.querySelector('#cover')
    headerController.close()
    section.scrollIntoView({ behavior: 'smooth' })
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

  const { show, fade } = Scroll(main)
  show([...Array.from(sections), ...Array.from(projects)])
  fade([mouseIcon])
  unlock()
}
