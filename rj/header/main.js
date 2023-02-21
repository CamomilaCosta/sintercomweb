/*subitem menu */
const header = document.querySelector('my-header')
const menuCompany = document.querySelector('#menu-company')
const forCompany = document.querySelector('#menu-company p')

const menuSubitem = document.querySelector('#subitem')

const nav = document.querySelector('#content-menumobile')
const toggle = document.querySelectorAll('#menu-mobile span')
const iconx = document.querySelector('.icon-x')

if (window.screen.width >= 992) {
  menuCompany.addEventListener('mouseover', function () {
    menuSubitem.classList.add('hover')
  })
  menuSubitem.addEventListener('mouseover', function () {
    this.classList.add('hover')
  })
  menuSubitem.addEventListener('mouseout', function () {
    this.classList.remove('hover')
  })
  menuCompany.addEventListener('mouseout', function () {
    menuSubitem.classList.remove('hover')
  })
}

forCompany.addEventListener('click', function () {
  menuSubitem.classList.toggle('click')
})

for (const element of toggle) {
  element.addEventListener('click', function () {
    nav.classList.toggle('show')
    iconx.classList.toggle('show')
  })
}
