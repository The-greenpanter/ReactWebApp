import React from 'react'
import Mainsytle from "../Estilos/output.module.css"

const Header = () => {
  return (
    <header className={Mainsytle.encabezado}>
    <section className={Mainsytle.Radio}>
        <iframe src="https://zeno.fm/player/chispero-records" width="100%" height="250" frameborder="0" scrolling="no"></iframe><a href="https://zeno.fm/" target="_blank"  style={{ fontSize: '0.9em', lineHeight: '10px' }}></a>
    </section>
        <div className={Mainsytle.conteiner}>
            <nav className={Mainsytle.menu}>
                <a id="btn-acerca-de" className={Mainsytle.acercade}>Acerca de</a>
                <a id="btn-Trabajos" className={Mainsytle.Diseños}>Diseños</a>
                <a id="btn-contacto" className={Mainsytle.contacto}>Contacto</a> 
            </nav>
            <div className={Mainsytle.titlecontainer} id="">
                <div className={Mainsytle.texto}>
                    <h1 className={Mainsytle.Tituloprincipal}>The Green <h1 className={Mainsytle.Tituloprincipal} >Panter </h1> </h1>
                    <h2 className={Mainsytle.descripcion}>Diseñador Digital</h2>
                </div>
            </div>
        </div>
      </header>
  )
}

export default Header
