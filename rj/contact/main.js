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
