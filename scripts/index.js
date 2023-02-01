var navbar = document.querySelector('.header')

window.onscroll = function() {

  // pageYOffset or scrollY
  if (window.pageYOffset > 0) {
    navbar.classList.add('nav-active')
  } else {
    navbar.classList.remove('nav-active')
  }
}

document.querySelectorAll('.certificates .certificate .image .img').forEach(image => {
  image.onclick = () => {
    document.querySelector('.main .certificates .certificate .popup-image').style.display = 'block';
    document.querySelector('.popup-image img').src = image.getAttribute('src');
  }
});

document.querySelector('.popup-image span').onclick = () => {
  document.querySelector('.main .certificates .certificate .popup-image').style.display = 'none';
}