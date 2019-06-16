window.onload = () => {
  const headerController = window.HeaderController('header')

  const menuButton = document.querySelector('#menu_btn')

  menuButton.onclick = () => {
    headerController.toggle()
  }


}
