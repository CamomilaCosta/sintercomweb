function abrirWhatsapp() {
  var nome = document.getElementById('name').value
  var telefone = document.getElementById('telefone').value
  var email = document.getElementById('email').value
  var msg = document.getElementById('story').value
  var url ='https://wa.me/+5598981130988?text=' +
    '*Formulário de Contato*' +
    '%0a' + 
    '%0a' + 
    '*Nome*: ' + nome +
    '%0a' + 
    '*Telefone*: ' +
    telefone +
    '%0a' +
    '*E-mail*: ' +
    email +
    '%0a' +
    '*Mensagem*: ' +
    story
  window.open(url, '_blank').focus()
}

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
