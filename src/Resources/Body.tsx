import React from 'react'
import Mainsytle from "../Estilos/output.module.css"
import { Trabajos } from "./Trabajos"

const Body = () => {
  return (
    <section className={Mainsytle.main}>
        <section className={Mainsytle.Acercade} id="generalInfo">
            <div className={Mainsytle.container}>
                <div className={Mainsytle.IMGportada}>
                    <img src="/img/IMG_20211216_032205_333.jpg" alt="The Green Panter" width="115" className={Mainsytle.portada}></img>
                </div>
                <div className={Mainsytle.generalInfo} id="generalInfo">
                    <h3 className={Mainsytle.AcercaD}>Acerca de</h3>
                    <p>La marca <span className={Mainsytle.bold}> The Green Panter</span> es especialista de diseño digital, pensando siempre en la mejor experiencia para el usuario; Recopila y emplea ideas y referencias de los entornos naturales, ya que <span className={Mainsytle.bold}> los modelos y esquemas de la vida llevan miles de años evolucionando</span>. Manejo lenguaje HTML5, CSS, JavaScript, jQuery, y PHP entre otros para el <span className={Mainsytle.bold}>diseño web, front-end</span> ademas con expandimos nuestro diseño para ser portatil y lo lleven en applicativos para dispositivos<span className={Mainsytle.bold}> IOs y Android mediante reactNative</span> </p>
                </div>
            </div>
        </section>
        <Trabajos />
    </section>
  )
}

export default Body
