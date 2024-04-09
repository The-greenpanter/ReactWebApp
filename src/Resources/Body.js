import React from 'react'

const Body = () => {
  return (
    <section class="main">
        <section class="Acercade" id="generalInfo">
            <div class="container">
                <div class="IMGportada">
                    <img src="/img/IMG_20211216_032205_333.jpg" alt="The Green Panter" width="115" class="portada"></img>
                </div>
                <div class="generalInfo" id="generalInfo">
                    <h3 class="AcercaD">Acerca de</h3>
                    <p>La marca <span class="bold"> The Green Panter</span> es especialista de diseño digital, pensando siempre en la mejor experiencia para el usuario; Recopila y emplea ideas y referencias de los entornos naturales, ya que <span class="bold"> los modelos y esquemas de la vida llevan miles de años evolucionando</span>. Manejo lenguaje HTML5, CSS, JavaScript, jQuery, y PHP entre otros para el <span class="bold">diseño web, front-end</span> ademas con expandimos nuestro diseño para ser portatil y lo lleven en applicativos para dispositivos<span class="bold"> IOs y Android mediante reactNative</span> </p>
                </div>
            </div>
            </section>
        <section class="trabajos" id="Trabajos">
            <div class="container">
                <h3 class="titulo">
                    Trabajos
                </h3>     
                <div class="trabanos">
                    <dib class="work">
                        <div class="thumb">
                         <a href="/Music/PrimerLayoutplusCss.html" class="link">
                            <img src="img/music.png" alt="" class="Iuno"></img>
                                <div class="descripcion">
                                    <p class="smalltittle">Produccion musica</p>
                                    <p class="smalldescription">Grabacion, edicion y composicion</p>
                                </div>   
                         </a>
                        </div>
                    </dib>
                    <dib class="work">
                        <div class="thumb">
                            <a href="" class="link">
                                <a href="/Articuloflexbox/" class="link">
                                    <img src="img/Landscape.png" alt="" class="Iuno"></img>
                                    <div class="descripcion">
                                        <p class="smalltittle">Biologia</p>
                                        <p class="smalldescription">Detalles de un Biologo egresado de la UNAL-Sede Bogota </p>
                                    </div>
                                </a>
                            </a>   
                        </div>
                    </dib>
                    <dib class="work">
                        <div class="thumb">
                            <a href="/Practicjquery/index.html" class="link">
                                <img src="img/Disenho.png" alt="" class="Iuno"></img>
                                <div class="descripcion">
                                    <p class="smalltittle">Diseñado para start up</p>
                                    <p class="smalldescription">Diseño web dinamico con jQuery </p>
                                </div>                    
                            </a> 
                        </div>
                    </dib>
                    <dib class="work">     
                        <div class="thumb">
                            <a href="/TemaParawordpress/index.html" class="link">
                                <img src="img/PSX_20220321_084354(1).png" alt="" class="Iuno"></img>
                                <div class="descripcion">
                                    <p class="smalltittle">Cafe Euphonia</p>
                                    <p class="smalldescription">De la finca a la taza</p>
                                </div>
                            </a>   
                        </div>
                    </dib>
                    <dib class="work">     
                        <div class="thumb">
                            <a href="" class="link">
                                <img src="img/sun.png" alt="" class="Iuno"></img>
                                <div class="descripcion">
                                    <p class="smalltittle">Title of work</p>
                                    <p class="smalldescription">Tools and ideas main</p>
                                </div>
                            </a>   

                        </div>
                </dib>
                    <dib class="work">
                        <div class="thumb">
                            <a href="/target" class="link">
                                <img src="img/Travel.png" alt="" class="Iuno"></img>
                                <div class="descripcion">
                                    <p class="smalltittle">Title of work</p>
                                    <p class="smalldescription">Tools and ideas main</p>
                                </div>
                            </a>   
                        </div>
                    </dib>
                </div>     
            </div>
        </section>
    </section>
  )
}

export default Body
