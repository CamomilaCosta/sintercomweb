const backToTopButton = document.querySelector('my-go-top')
const footer = document.querySelector('#footer')
const espacodobtn = document.querySelector('#content-back')

backToTopButton.addEventListener('click', function () {
  window.scrollTo(0, 0)
})
window.addEventListener('scroll', function () {
  console.log(espacodobtn.getBoundingClientRect().top)
  if (window.scrollY >= 560) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
  if (espacodobtn.getBoundingClientRect().top <= 890) {
    backToTopButton.classList.add('fixed')
  } else {
    backToTopButton.classList.remove('fixed')
  }
})
