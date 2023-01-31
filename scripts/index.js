var navbar = document.querySelector('.header')

window.onscroll = function() {

  // pageYOffset or scrollY
  if (window.pageYOffset > 0) {
    navbar.classList.add('nav-active')
  } else {
    navbar.classList.remove('nav-active')
  }
}