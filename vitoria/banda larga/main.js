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
