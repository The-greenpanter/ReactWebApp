import React from 'react'

const Header = () => {
  return (
      <header class="encabezado">
    <section class="Radio">
        <iframe src="https://zeno.fm/player/chispero-records" width="100%" height="250" frameborder="0" scrolling="no"></iframe><a href="https://zeno.fm/" target="_blank"  style={{ fontSize: '0.9em', lineHeight: '10px' }}></a>
    </section>
        <div class="conteiner">
            <nav class="menu">
                <a id="btn-acerca-de" class="acercade">Acerca de</a>
                <a id="btn-Trabajos" class="Diseños">Diseños</a>
                <a id="btn-contacto" class="contacto">Contacto</a> 
            </nav>
            <div class="titlecontainer" id="">
                <div class="texto">
                    <h1 class="Tituloprincipal">The Green <h1 class="Tituloprincipal" >Panter </h1> </h1>
                    <h2 class="descripcion">Diseñador Digital</h2>
                </div>
            </div>
        </div>
      </header>
  )
}

export default Header
