window.onload = () => {
  const headerController = window.HeaderController('header')
  const nav = document.querySelector('header nav')
  const navAnchors = document.querySelectorAll('header nav a')
  const anchors = Array.prototype.slice.call(navAnchors)
  const menuButton = document.querySelector('#menu_btn')

  menuButton.onclick = () => {
    headerController.toggle()
  }

  nav.onclick = (e) => {
    if (anchors.includes(e.target)) headerController.close()
  }
}
