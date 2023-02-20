class MyFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `<div id="footer">
    <img id="elipse-footer" src="../assets/elipse/Ellipse 26.png" alt="" />
    <div class="footer">
      <div class="container">
        <div id="info-footer">
          <div id="contact-footer">
            <h2>Fale Conosco</h2>
            <div class="ctt" id="phone">
              <span class="icon-phone-call"></span>
              <p>(21) 3794-4677</p>
            </div>
            <div class="ctt id="wpp">
              <span class="icon-whatsapp"></span>
              <p>(21) 99670-7806</p>
            </div>
            <div class="ctt id="adress">
              <span class="icon-location"></span>
              <p>Palhada, 2346 – 1 – Comendador Soares, Nova Iguaçu – RJ</p>
            </div>
          </div>
          <div id="enjoy">
            <h2>Aproveite</h2>
            <ul>
            <a href="../banda larga/index.html"><li>Nossos Planos</li></a> 
            <a href="../contact/index.html"><li>Assine Agora</li></a> 
            <a href="../link dedicado/index.html"><li>Para Empresas</li></a> 
            </ul>
          </div>
          <div id="sintercom-info">
            <div id="footer-logo">
            <a href="../home/sinter.html">
            <img src="../assets/logos/logo 6.png" alt="" />
            </a>
            </div>
            <ul>
              <li>© 2023 - Sintercom Fibra LTDA</li>
              <li>Todos os direitos reservados.</li>
              <li>CNPJ : 00000000000000</li>
            </ul>
          </div>
        </div>
        <div id="copy">Desenvolvido por: KOLAB dev team</div>
      </div>
    </div>
  </div>`
  }
}

customElements.define('my-footer', MyFooter)
