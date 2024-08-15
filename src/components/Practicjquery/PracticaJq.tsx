import Stylessheets from "./CSS/stylesheet.module.css"

const PracticaJq = () => {
    return (
        <>

            <header className={Stylessheets.encabezado}>
                <div className={Stylessheets.container}>
                    <nav className={Stylessheets.menu}>
                        <a href="" className={Stylessheets.acercade} id="btn-acerca-de">Acerca de</a>
                        <a href="" className={Stylessheets.Diseños} id="btn-menu">Menu</a>
                        <a href="" className={Stylessheets.contacto} id="btn-galeria">Galeria</a>
                        <a href="" className={Stylessheets.contacto} id="btn-ubicacion">Ubicacion</a>
                    </nav>
                    <div className={Stylessheets["container-texto"]}>
                        <h1 className={Stylessheets.Tituloprincipal}>Las <span className={Stylessheets.delicias}>Delicias</span> de Oli
                        </h1>
                        <h3 className={Stylessheets.descripcion}>Restaurante Tradicional Colombiano</h3>
                    </div>
                </div>
            </header>
            <section className={Stylessheets.main}>
                <section className={Stylessheets["acerca-de"]} id="acerca-de">
                    <div className={Stylessheets.container}>
                        <div className={Stylessheets.fotoportada}>
                            <img src="../Practicjquery/Media/WhatsApp Image 2022-12-15 at 8.44.02 AM.png"
                                alt="Portada_Restaurante" className={Stylessheets.fportada} />
                        </div>
                        <article className={Stylessheets.generalInfo} id="generalInfo">
                            <h3 className={Stylessheets.AcercaD}>Acerca de</h3>
                            <p>Lorem <span className={Stylessheets.bold}> ipsum</span> dolor sit amet consectetur adipisicing elit. Ex sit ullam
                                cupiditate dolor laudantium! Molestiae nemo placeat aut consequatur porro sunt doloribus <span
                                    className={Stylessheets.bold}> odit repellat facere sequi? Similique minus cupiditate</span> tenetur!</p>
                            <p>Molestiae nemo placeat aut consequatur porro sunt doloribus</p>
                        </article>
                    </div>
                </section>
                <section className={Stylessheets.menu}>
                    <div className={Stylessheets.container}>
                        <h3 className={Stylessheets.title} id="platillos">Menu</h3>
                        <div className={Stylessheets["contenedor-menu"]}>
                            <div className={Stylessheets["contenedor-menu2"]}>
                                <article>
                                    <p className={Stylessheets["categoria eatable"]}>De Comer</p>
                                    <div className={Stylessheets.platillo}>
                                        <p className={Stylessheets.nombre}>Tostada Francesa</p>
                                        <p className={Stylessheets.precio}>$30K</p>
                                        <p className={Stylessheets.description}>Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                                            Accusamus quia, consectetur molestiae sed ratione suscipit in minus </p>
                                    </div>

                                    <div className={Stylessheets.platillo}>
                                        <p className={Stylessheets.nombre}>Tostada Francesa</p>
                                        <p className={Stylessheets.precio}>$30K</p>
                                        <p className={Stylessheets.description}>Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                                            Accusamus quia, consectetur molestiae sed ratione suscipit in minus </p>
                                    </div>

                                    <div className={Stylessheets.platillo}>
                                        <p className={Stylessheets.nombre}>Tostada Francesa</p>
                                        <p className={Stylessheets.precio}>$30K</p>
                                        <p className={Stylessheets.description}>Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                                            Accusamus quia, consectetur molestiae sed ratione suscipit in minus </p>
                                    </div>

                                    <div className={Stylessheets.platillo}>
                                        <p className={Stylessheets.nombre}>Tostada Francesa</p>
                                        <p className={Stylessheets.precio}>$30K</p>
                                        <p className={Stylessheets.description}>Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                                            Accusamus quia, consectetur molestiae sed ratione suscipit in minus </p>
                                    </div>

                                </article>
                                <article>
                                    <p className={Stylessheets.categoria}>Bebidas</p>
                                    <div className={Stylessheets["platillo Drinks"]} >
                                    <p className={Stylessheets.nombre}>Tostada Francesa</p>
                                    <p className={Stylessheets.precio}>$30K</p>
                                    <p className={Stylessheets.description}>Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                                        Accusamus quia, consectetur molestiae sed ratione suscipit in minus </p>
                            </div>

                            <div className={Stylessheets.platillo}>
                                <p className={Stylessheets.nombre}>Tostada Francesa</p>
                                <p className={Stylessheets.precio}>$30K</p>
                                <p className={Stylessheets.description}>Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                                    Accusamus quia, consectetur molestiae sed ratione suscipit in minus </p>
                            </div>

                            <div className={Stylessheets.platillo}>
                                <p className={Stylessheets.nombre}>Tostada Francesa</p>
                                <p className={Stylessheets.precio}>$30K</p>
                                <p className={Stylessheets.description}>Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                                    Accusamus quia, consectetur molestiae sed ratione suscipit in minus </p>
                            </div>

                            <div className={Stylessheets.platillo}>
                                <p className={Stylessheets.nombre}>Tostada Francesa</p>
                                <p className={Stylessheets.precio}>$30K</p>
                                <p className={Stylessheets.description}>Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                                    Accusamus quia, consectetur molestiae sed ratione suscipit in minus </p>
                            </div>
                            </article>
                        </div>
                        </div>
                    </div>
                    </section >
                    <section className={Stylessheets.galeria} id="galeria">
                        {/* <!-- <div className={Stylessheets.foto}>
                            <img src="Media/IMG-20221026-WA0038.png" alt="foto1" />
                        </div> --> */}
                        <div className={Stylessheets.foto}>
                            <img src="Media/plant.png" alt="foto1" />
                        </div>
                        <div className={Stylessheets.foto}>
                            <img src="Media/IMG_20220906_153117_626.png" alt="foto1" />
                        </div>
                        <div className={Stylessheets.foto}>
                            <img src="Media/plant.png" alt="foto1" />
                        </div>
                        <div className={Stylessheets.foto}>
                            <img src="Media/tiger.png" alt="foto1" />
                        </div>
                        {/* <!-- <div className={Stylessheets.foto}>
                            <img src="Media/IMG-20221026-WA0038.png" alt="foto1" />
                        </div> --> */}
                        <div className={Stylessheets.foto}>
                            <img src="Media/plant.png" alt="foto1" />
                        </div>
                        <div className={Stylessheets.foto}>
                            <img src="Media/tiger.png" alt="foto1" />
                        </div>
                        <div className={Stylessheets.foto}>
                            <img src="Media/IMG_20220906_153117_626.png" alt="foto1" />
                        </div>
                        <div className={Stylessheets.foto}>
                            <img src="Media/plant.png" alt="foto1" />
                        </div>
                    </section>
                    <section className={Stylessheets.ubicacion} id="ubicacion">
                        <div className={Stylessheets.container}>
                            <h3 className={Stylessheets.titulo}>Ubicacion</h3>
                            <div className={Stylessheets.direccion}>
                                <p className={Stylessheets.calle}>Direccion: <br/> Ac. 24 #43A-80, Bogotá</p>
                                <p className={Stylessheets.telefono}>telefono</p>
                                <p className={Stylessheets.correo}>correo</p>
                            </div>
                            <div className={Stylessheets.horarios}>
                                <h4>horarios</h4>
                                <p className={Stylessheets.entresemana}>lunes a viernes <br/> 12 a 21</p>
                                <p className={Stylessheets.finesdesemana}>domingos <br/> 16-22</p>
                            </div>
                        </div>
                    </section>
                    <section className={Stylessheets.mapa}><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16569.778957596107!2d-74.07639445379847!3d4.634262263562452!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9bd14943c13b%3A0x3de530667d9ff6b0!2sUniversidad%20Nacional%20de%20Colombia!5e0!3m2!1ses!2sco!4v1671490929430!5m2!1ses!2sco" width="800" height="600" style={{border:0}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </section>
                </section >
                <hr className={Stylessheets.separador} />
                    <footer>
                        <div className={Stylessheets.copyright}>
                            <p>Copy Right</p>
                        </div>
                    </footer>

                </>
                )
}

export default PracticaJq
