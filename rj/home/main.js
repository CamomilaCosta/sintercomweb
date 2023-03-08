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

const select = document.querySelectorAll('#city option')

for (const op of select) {
  op.addEventListener('click', function () {
    if (op.value == 'vitoria') {
      window.open('../../vitoria/home/sinter.html#plans', '_self')
    }
    if (op.value == 'joao-pessoa') {
      window.open('../../jp/home/sinter.html#plans', '_self')
    }
  })
}

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
}
console.log(window.screen.width)
if (window.screen.width >= 991) {
  console.log(window.screen.width)
  const cardsBenefities = document.querySelectorAll('.card-benefits')
  //const wifiGrid = querySelector('.wifi-icon')
  //const wifiImg = document.querySelectorAll('.wifi-icon img')

  for (const cardBenefitie of cardsBenefities) {
    cardBenefitie.addEventListener('mouseover', function () {
      this.querySelector('.wifi-icon').classList.add('hov')
      const wifiImg = this.querySelectorAll('.wifi-icon img')
      for (const img of wifiImg) {
        img.classList.add('mov')
      }
    })
    cardBenefitie.addEventListener('mouseout', function () {
      this.querySelector('.wifi-icon').classList.remove('hov')
      const wifiImg = this.querySelectorAll('.wifi-icon img')
      for (const img of wifiImg) {
        img.classList.remove('mov')
      }
    })
  }
}

if (window.screen.width < 991) {
  const cardsBenefities = document.querySelectorAll('.card-benefits')
  const sectioncards = document.querySelector('#benefits')
  //const wifiGrid = querySelector('.wifi-icon')
  //const wifiImg = document.querySelectorAll('.wifi-icon img')

  document.addEventListener('scroll', function () {
    for (const cardBenefitie of cardsBenefities) {
      if (
        cardBenefitie.getBoundingClientRect().top < 300 &&
        cardBenefitie.getBoundingClientRect().top > 90
      ) {
        cardBenefitie.querySelector('.wifi-icon').classList.add('hov')
        const wifiImg = cardBenefitie.querySelectorAll('.wifi-icon img')
        for (const img of wifiImg) {
          img.classList.add('mov')
        }
      } else {
        cardBenefitie.querySelector('.wifi-icon').classList.remove('hov')
        const wifiImg = cardBenefitie.querySelectorAll('.wifi-icon img')
        for (const img of wifiImg) {
          img.classList.remove('mov')
        }
      }
    }
  })
}

if (window.screen.width < 540) {
  const cardsPlan = document.querySelectorAll('.card')
  document.addEventListener('scroll', function () {
    for (const card of cardsPlan) {
      if (
        card.getBoundingClientRect().top < 290 &&
        card.getBoundingClientRect().top > 90
      ) {
        card.classList.add('border-active', 'shadow')
        card.querySelector('.name').classList.add('active')
        card.querySelector('.button').classList.add('active')
        card.querySelector('.mega').classList.add('text-active')
        card.querySelector('.price p').classList.add('text-active')
      } else {
        card.classList.remove('border-active', 'shadow')
        card.querySelector('.name').classList.remove('active')
        card.querySelector('.button').classList.remove('active')
        card.querySelector('.mega').classList.remove('text-active')
        card.querySelector('.price p').classList.remove('text-active')
      }
    }
  })
}
