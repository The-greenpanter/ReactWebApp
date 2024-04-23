import React from 'react'

const Body = () => {
  return (
    <section className="main">
        <section className="Acercade" id="generalInfo">
            <div className="container">
                <div className="IMGportada">
                    <img src="/img/IMG_20211216_032205_333.jpg" alt="The Green Panter" width="115" className="portada"></img>
                </div>
                <div className="generalInfo" id="generalInfo">
                    <h3 className="AcercaD">Acerca de</h3>
                    <p>La marca <span className="bold"> The Green Panter</span> es especialista de diseño digital, pensando siempre en la mejor experiencia para el usuario; Recopila y emplea ideas y referencias de los entornos naturales, ya que <span className="bold"> los modelos y esquemas de la vida llevan miles de años evolucionando</span>. Manejo lenguaje HTML5, CSS, JavaScript, jQuery, y PHP entre otros para el <span className="bold">diseño web, front-end</span> ademas con expandimos nuestro diseño para ser portatil y lo lleven en applicativos para dispositivos<span className="bold"> IOs y Android mediante reactNative</span> </p>
                </div>
            </div>
            </section>
        <section className="trabajos" id="Trabajos">
            <div className="container">
                <h3 className="titulo">
                    Trabajos
                </h3>     
                <div className="trabanos">
                    <div className="work">
                        <div className="thumb">
                                <img src="img/music.png" alt="" className="Iuno"></img>
                                    <div className="descripcion">
                                        <p className="smalltittle">Produccion musica</p>
                                        <p className="smalldescription">Grabacion, edicion y composicion</p>
                                    </div>   
                        </div>
                    </div>
                    <div className="work">
                        <div className="thumb">
                            <a href="#" className="link">
                                <a href="#/Articuloflexbox/" className="link">
                                    <img src="img/Landscape.png" alt="" className="Iuno"></img>
                                    <div className="descripcion">
                                        <p className="smalltittle">Biologia</p>
                                        <p className="smalldescription">Detalles de un Biologo egresado de la UNAL-Sede Bogota </p>
                                    </div>
                                </a>
                            </a>   
                        </div>
                    </div>
                    <div className="work">
                        <div className="thumb">
                            <a href="#../src/Practicjquery/index.html" className="link">
                                <img src="img/Disenho.png" alt="" className="Iuno"></img>
                                <div className="descripcion">
                                    <p className="smalltittle">Diseñado para start up</p>
                                    <p className="smalldescription">Diseño web dinamico con jQuery </p>
                                </div>                    
                            </a> 
                        </div>
                    </div>
                    <div className="work">     
                        <div className="thumb">
                            <a href="#/TemaParawordpress/index.html" className="link">
                                <img src="img/PSX_20220321_084354(1).png" alt="" className="Iuno"></img>
                                <div className="descripcion">
                                    <p className="smalltittle">Cafe Euphonia</p>
                                    <p className="smalldescription">De la finca a la taza</p>
                                </div>
                            </a>   
                        </div>
                    </div>
                    <div className="work">     
                        <div className="thumb">
                            <a href="#" className="link">
                                <img src="img/sun.png" alt="" className="Iuno"></img>
                                <div className="descripcion">
                                    <p className="smalltittle">Title of work</p>
                                    <p className="smalldescription">Tools and ideas main</p>
                                </div>
                            </a>   

                        </div>
                </div>
                    <div className="work">
                        <div className="thumb">
                            <a href="#/target" className="link">
                                <img src="img/Travel.png" alt="" className="Iuno"></img>
                                <div className="descripcion">
                                    <p className="smalltittle">Title of work</p>
                                    <p className="smalldescription">Tools and ideas main</p>
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
