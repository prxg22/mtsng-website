import smoothscroll from 'smoothscroll-polyfill'
import HeaderController from './header'
import Gallery from './gallery'
import Scroll from './scroll'

window.onload = () => {
  const headerController = HeaderController('header')

  const header = document.querySelector('header')
  const nav = header.querySelector('nav')
  const navAnchors = nav.querySelectorAll('a')
  const menuButton = header.querySelector('#menu_btn')
  const logo = header.querySelector('a#logo')
  const main = document.querySelector('main')
  const cover = main.querySelector('#cover')
  const mouseIcon = cover.querySelector('#cover .mouse-icon path')
  const sections = main.querySelectorAll('section')
  const projects = main.querySelectorAll('#work article')
  const galleries = []

  smoothscroll.polyfill()

  const unlock = () => {
    main.classList.remove('locked')
    header.classList.remove('locked')
  }
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
