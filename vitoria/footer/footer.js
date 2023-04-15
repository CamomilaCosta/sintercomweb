class MyFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `<div id="footer">
    <div id="content-back">
    <my-go-top>
      <span class="icon-arrow-down"></span>
    </my-go-top>
    
      <div id="fixed-wpp">
      <a href="https://wa.me/5521996707806" target="_blank"><span class="icon-whatsapp"></span></a>
      </div>
    
    </div>
    <img id="elipse-footer" src="../assets/elipse/Ellipse 26.png" alt="" />
    <div class="footer">
      <div class="container">
        <div id="info-footer">
          <div id="contact-footer">
            <h2>Fale Conosco</h2>
            
            <div id="phone">
                <a class="ctt" target="_blank" href="tel:+552740421491">
                  <span class="icon-phone-call"></span>
                  <p>(27) 4042-1490</p>
                </a>
                <a class="ctt" target="_blank" href="tel:+552740421491">
                  <span class="icon-phone-call"></span>
                  <p>(27) 4042-1491</p>
                </a> 
              </div>
            
            <a target="_blank" href="https://wa.me/5521996707806">
              <div class="ctt id="wpp">
                <span class="icon-whatsapp"></span>
                <p>(21) 99670-7806</p>
              </div>
            </a>
            <a target="_blank" href="https://www.google.com/maps/place/Av.+Central,+1525+-+Parque+Res.+Laranjeiras,+Serra+-+ES,+29165-130/@-20.1945655,-40.2637368,13.81z/data=!4m6!3m5!1s0xb81edd51251c33:0xd373d379ee9bbe97!8m2!3d-20.1954047!4d-40.2581686!16s%2Fg%2F11cnd8fkcj">
              <div class="ctt id="adress">
                <span class="icon-location"></span>
                <p>Av. Central, 1525 - Parque Res. Laranjeiras, Serra - ES</p>
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
