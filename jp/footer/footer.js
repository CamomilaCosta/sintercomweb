class MyFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `<div id="footer">
    <div id="content-back">
    <my-go-top>
      <span class="icon-arrow-down"></span>
    </my-go-top>
    <div id="fixed-wpp">
      <a href="https://wa.me/5583996100084" target="_blank">
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
            
            <a target="_blank" href="https://wa.me/5583996100084">
              <div class="ctt id="wpp">
                <span class="icon-whatsapp"></span>
                <p>(83) 99610-0084</p>
              </div>
            </a>
            <a target="_blank" href="https://www.google.com/maps/place/R.+Pres.+Ranieri+Mazilli,+612+-+Cristo+Redentor,+Jo%C3%A3o+Pessoa+-+PB,+58071-000/@-7.1636112,-34.8701368,17z/data=!3m1!4b1!4m6!3m5!1s0x7ace9d3f8a26375:0xaeb575abcacc62eb!8m2!3d-7.1636165!4d-34.8679481!16s%2Fg%2F11cpb_k_gw">
              <div class="ctt id="adress">
                <span class="icon-location"></span>
                <p>Av. Minas Gerais, 300 - Estados João Pessoa - PB, 58030-090</p>
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
