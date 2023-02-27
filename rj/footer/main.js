const backToTopButton = document.querySelector('my-go-top')
const footer = document.querySelector('#footer')

backToTopButton.addEventListener('click', function () {
  window.scrollTo(0, 0)
})
window.addEventListener('scroll', function () {
  if (window.scrollY >= 560) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
  if (footer.getBoundingClientRect().top <= 625) {
    backToTopButton.classList.add('fixed')
  } else {
    backToTopButton.classList.remove('fixed')
  }
})
