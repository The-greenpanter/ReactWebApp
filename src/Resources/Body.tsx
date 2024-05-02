import React from 'react'
import Mainsytle from "../Estilos/output.module.css"

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
        <section className={Mainsytle.trabajos} id="Trabajos">
            <div className={Mainsytle.container}>
                <h3 className={Mainsytle.titulo}>
                    Trabajos
                </h3>     
                <div className={Mainsytle.trabanos}>
                    <div className={Mainsytle.work}>
                        <div className={Mainsytle.thumb}>
                                <img src="img/music.png" alt="" className={Mainsytle.Iuno}></img>
                                    <div className={Mainsytle.descripcion}>
                                        <p className={Mainsytle.smalltittle}>Produccion musica</p>
                                        <p className={Mainsytle.smalldescription}>Grabacion, edicion y composicion</p>
                                    </div>   
                        </div>
                    </div>
                    <div className={Mainsytle.work}>
                        <div className={Mainsytle.thumb}>
                            <a href="#" className={Mainsytle.link}>
                                <a href="#/Articuloflexbox/" className={Mainsytle.link}>
                                    <img src="img/Landscape.png" alt="" className={Mainsytle.Iuno}></img>
                                    <div className={Mainsytle.descripcion}>
                                        <p className={Mainsytle.smalltittle}>Biologia</p>
                                        <p className={Mainsytle.smalldescription}>Detalles de un Biologo egresado de la UNAL-Sede Bogota </p>
                                    </div>
                                </a>
                            </a>   
                        </div>
                    </div>
                    <div className={Mainsytle.work}>
                        <div className={Mainsytle.thumb}>
                            <a href="#../src/Practicjquery/index.html" className={Mainsytle.link}>
                                <img src="img/Disenho.png" alt="" className={Mainsytle.Iuno}></img>
                                <div className={Mainsytle.descripcion}>
                                    <p className={Mainsytle.smalltittle}>Diseñado para start up</p>
                                    <p className={Mainsytle.smalldescription}>Diseño web dinamico con jQuery </p>
                                </div>                    
                            </a> 
                        </div>
                    </div>
                    <div className={Mainsytle.work}>     
                        <div className={Mainsytle.thumb}>
                            <a href="#/TemaParawordpress/index.html" className={Mainsytle.link}>
                                <img src="img/PSX_20220321_084354(1).png" alt="" className={Mainsytle.Iuno}></img>
                                <div className={Mainsytle.descripcion}>
                                    <p className={Mainsytle.smalltittle}>Cafe Euphonia</p>
                                    <p className={Mainsytle.smalldescription}>De la finca a la taza</p>
                                </div>
                            </a>   
                        </div>
                    </div>
                    <div className={Mainsytle.work}>     
                        <div className={Mainsytle.thumb}>
                            <a href="#" className={Mainsytle.link}>
                                <img src="img/sun.png" alt="" className={Mainsytle.Iuno}></img>
                                <div className={Mainsytle.descripcion}>
                                    <p className={Mainsytle.smalltittle}>Title of work</p>
                                    <p className={Mainsytle.smalldescription}>Tools and ideas main</p>
                                </div>
                            </a>   

                        </div>
                </div>
                    <div className={Mainsytle.work}>
                        <div className={Mainsytle.thumb}>
                            <a href="#/target" className={Mainsytle.link}>
                                <img src="img/Travel.png" alt="" className={Mainsytle.Iuno}></img>
                                <div className={Mainsytle.descripcion}>
                                    <p className={Mainsytle.smalltittle}>Title of work</p>
                                    <p className={Mainsytle.smalldescription}>Tools and ideas main</p>
                                </div>
                            </a>   
                        </div>
                    </div>
                </div>     
            </div>
        </section>
    </section>
  )
}

export default Body
