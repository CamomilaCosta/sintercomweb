const backToTopButton = document.querySelector('my-go-top')
const footer = document.querySelector('#footer')
const espacodobtn = document.querySelector('#content-back')
const btnwpp = document.querySelector('#fixed-wpp')

backToTopButton.addEventListener('click', function () {
  window.scrollTo(0, 0)
})

const isVisible = function isInViewport(element) {
  const rect = element.getBoundingClientRect()
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) - 32 &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  )
}

window.addEventListener('scroll', function () {
  if (window.scrollY >= 560) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
  if (isVisible(espacodobtn)) {
    backToTopButton.classList.add('fixed')
    btnwpp.classList.add('fixed')
  } else {
    backToTopButton.classList.remove('fixed')
    btnwpp.classList.remove('fixed')
  }
})
