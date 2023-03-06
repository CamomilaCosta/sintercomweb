class MyFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `<div id="footer">
    <div id="content-back">
    <my-go-top>
      <span class="icon-arrow-down"></span>
    </my-go-top>
    <div id="fixed-wpp">
      <a href="https://wa.me/5521996707806" target="_blank">
      <span class="icon-whatsapp"></span>
      </a>
      </div>
    </div>
    <img id="elipse-footer" src="../assets/elipse/Ellipse 26.png" alt="" />
    <div class="footer">
      <div class="container">
        <div id="info-footer">
          <div id="contact-footer">
            <h2>Fale Conosco</h2>
            
            <a target="_blank" href="tel:+552137944677">
              <div class="ctt" id="phone">
                <span class="icon-phone-call"></span>
                <p>(21) 3794-4677</p>
              </div>
            </a>
            
            <a target="_blank" href="https://wa.me/5521996707806">
              <div class="ctt id="wpp">
                <span class="icon-whatsapp"></span>
                <p>(21) 99670-7806</p>
              </div>
            </a>
            <a target="_blank" href="https://www.google.com.br/maps/place/SINTERCOM+%7C+INTERNET+CORPORATIVA+%26+RESIDENCIAL./@-22.7532898,-43.5195691,17z/data=!4m6!3m5!1s0x995db68e30ffbb:0x3eee25f42e2e2476!8m2!3d-22.7526779!4d-43.5186684!16s%2Fg%2F11b78pypsn">
              <div class="ctt id="adress">
                <span class="icon-location"></span>
                <p>Palhada, 2346 – 1 – Comendador Soares, Nova Iguaçu – RJ</p>
              </div>
            </a>
          </div>
          <div id="enjoy">
            <h2>Aproveite</h2>
            <ul>
            <a href="../home/sinter.html#plans"><li>Nossos Planos</li></a> 
            <a href="../contact/index.html"><li>Assine Agora</li></a> 
            <a href="../home/sinter.html#company"><li>Para Empresas</li></a>  
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
