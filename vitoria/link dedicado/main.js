const swipertest = new Swiper('.swiper-testmonials', {
  speed: 1000,
  slidesPerView: 1,
  spaceBetween: 40,
  pagination: {
    el: '.swiper-pagination'
  },
  mousewheel: true,
  keyboard: true,
  loop: true,
  autoplay: {
    delay: 3800
  },
  breakpoints: {
    // when window width is >= 320px
    991: {
      slidesPerView: 2,
      spaceBetween: 20
    }
  }
})

const faqbtns = document.querySelectorAll('.ask')
const faqans = document.querySelectorAll('.answer')
const imgx = document.querySelectorAll('.ask img')

for (const btn of faqbtns) {
  btn.addEventListener('click', function () {
    for (const btn of faqbtns) {
      btn.classList.remove('active')
    }
    btn.classList.toggle('active')

    for (i in faqbtns) {
      if (faqbtns[i].classList.contains('active')) {
        for (const text of faqans) {
          text.classList.remove('show')
        }
        faqans[i].classList.add('show')
      } else {
        faqans[i].classList.remove('show')
      }
    }
  })
}
