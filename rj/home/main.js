const swiper = new Swiper('.swiper', {
  speed: 1000,
  slidesPerView: 1,
  pagination: {
    el: '.swiper-pagination'
  },
  mousewheel: true,
  keyboard: true,
  loop: true,
  autoplay: {
    delay: 3800
  }
})

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

const cards = document.querySelectorAll('.card')
const names = document.querySelectorAll('.name')

for (const card of cards) {
  card.addEventListener('mouseover', function () {
    this.classList.add('border-active', 'shadow')
    this.querySelector('.name').classList.add('active')
    this.querySelector('.button').classList.add('active')
    this.querySelector('.mega').classList.add('text-active')
    this.querySelector('.price p').classList.add('text-active')
  })
  card.addEventListener('mouseout', function () {
    this.classList.remove('border-active', 'shadow')
    this.querySelector('.name').classList.remove('active')
    this.querySelector('.button').classList.remove('active')
    this.querySelector('.mega').classList.remove('text-active')
    this.querySelector('.price p').classList.remove('text-active')
  })

  /*menuSubitem.addEventListener('mouseover', function () {
    this.classList.add('hover')
  })
  menuSubitem.addEventListener('mouseout', function () {
    this.classList.remove('hover')
  })
  menuCompany.addEventListener('mouseout', function () {
    menuSubitem.classList.remove('hover')
  })*/
}
