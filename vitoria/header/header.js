class MyHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `<div id="header">
    <div class="container">
      <!--Logo-->
      <div id="logo-head">
      <a href="../home/sinter.html">
        <img src="../assets/logos/logo 5.png" alt=""/>
      </a>
      </div>

      <nav>
        <!--Itens do menu-->
        <div id="content-menumobile">
          <ul id="menu">
            <a href="../home/sinter.html"><li>Início</li></a>
            <li id="menu-company">
              <p>Para Empresas</p>
              <!--Subitens do opção para empresas-->
              <ul id="subitem">
                <li><a href="../bandalarga/index.html">Banda Larga</a></li>
                <li><a href="../linkdedicado/index.html">Link Dedicado</a></li>
              </ul>
            </li>
           
            <a href="../about/index.html"><li>Sobre Nós</li></a>
            <a href="../contact/index.html"><li>Contato</li></a>
          </ul>
          <div id="info-mobile">
            <a href="../../index.html">
              <div class="location">
               <span class="icon-location2"></span>
               <p>Vitória</p>
              </div>
             </a>
            <div id="social-menu">
              <p>Siga nossas redes sociais</p>
              <div id="social-icon">
                <a target="_blank" href="https://www.facebook.com/sintercomes/"><span class="icon-facebook"></span></a>
                <a target="_blank" href="https://www.instagram.com/sintercom.vix/"><span class="icon-instagram"></span></a>
              </div>
            </div>
          </div>
        </div>
        <!--Menu mobile-->
        <div id="menu-mobile">
          <span class="icon-menu"></span>
          <span class="icon-x"></span>
        </div>
      </nav>

      <!--Botão de login-->
      <div id="login">
        <a href="https://centraldoassinante.sintnet.com.br/radiusnet/cda/login.php ">
          <p>Área do Cliente</p>
          <span class="icon-user"></span>
        </a>
        <!--login mobile-->
      </div>
    </div>
  </div>`
  }
}

customElements.define('my-header', MyHeader)
