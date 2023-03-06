function faq() {
  const faqbtns = document.querySelectorAll('.ask')
  const faqans = document.querySelectorAll('.answer')
  console.log(faqbtns)

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
}

faq()

function abrirWhatsapp() {
  var nome = document.getElementById('name').value
  var telefone = document.getElementById('telefone').value
  var email = document.getElementById('email').value
  var msg = document.getElementById('story').value
  var url =
    'https://wa.me/+5521996707806?text=' + // Seu numero
    '*Formulário de Contato*' +
    '%0a' + // Mensagem personalizada
    '%0a' + // Quebra de linha
    '*Nome*: ' +
    nome +
    '%0a' + // Dados do formulário
    '*Telefone*: ' +
    telefone +
    '%0a' +
    '*E-mail*: ' +
    email +
    '%0a' +
    '*Mensagem*: ' +
    msg
  window.open(url, '_blank').focus()
}
