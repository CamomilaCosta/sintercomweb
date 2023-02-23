class MyFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `<div id="footer">
    <img id="elipse-footer" src="../assets/elipse/Ellipse 26.png" alt="" />
    <div class="footer">
      <div class="container">
        <div id="info-footer">
          <div id="contact-footer">
            <h2>Fale Conosco</h2>
            
            <a href="tel:+552137944677">
              <div class="ctt" id="phone">
                <span class="icon-phone-call"></span>
                <p>(21) 3794-4677</p>
              </div>
            </a>
            
            <a href="https://wa.me/5583981996111">
              <div class="ctt id="wpp">
                <span class="icon-whatsapp"></span>
                <p>(83) 98199-6111</p>
              </div>
            </a>
            <a href="https://www.google.com.br/maps/place/SINTERCOM+%7C+INTERNET+CORPORATIVA+%26+RESIDENCIAL./@-22.7532898,-43.5195691,17z/data=!4m6!3m5!1s0x995db68e30ffbb:0x3eee25f42e2e2476!8m2!3d-22.7526779!4d-43.5186684!16s%2Fg%2F11b78pypsn">
              <div class="ctt id="adress">
                <span class="icon-location"></span>
                <p>Palhada, 2346 – 1 – Comendador Soares, Nova Iguaçu – RJ</p>
              </div>
            </a>
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
              <li>CNPJ : 46848680000107</li>
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
