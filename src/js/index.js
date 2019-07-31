window.onload = () => {
  const headerController = window.HeaderController('header')
  const nav = document.querySelector('header nav')
  const navAnchors = document.querySelectorAll('header nav a')
  const menuButton = document.querySelector('#menu_btn')
  const logo = document.querySelector('a#logo')
  const main = document.querySelector('main')
  const cover = document.querySelector('#cover')

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

  // const scrollAnimation = window.ScrollAnimation(main, cover, (offset) => {
  //   console.log('scrolling on cover', offset)
  // })
  //
  // scrollAnimation.init()
}
