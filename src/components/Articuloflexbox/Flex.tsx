// import Stilosflex from "./flex.module.css";
const Flex = () => {
    return (
        <div className={Stilosflex.container}>
            <header className={Stilosflex.encabezado}>
                <div className={Stilosflex.logo}>
                    <img src="pandas.jpg" alt="" className={Stilosflex.logimg}></img>
                </div>
                <nav className={Stilosflex.menu}>
                    <a href="../index.html" className={Stilosflex.Inicio}>Inicio</a>
                    <a href="#" className={Stilosflex.Blog}>Blog</a>
                    <a href="#" className={Stilosflex.Contacto}>Contacto</a>
                </nav>
            </header>
            <section className={Stilosflex.main}>
                <article className={Stilosflex.articuloprincipal}>
                    <div className={Stilosflex.thumb}>
                        <img src="xPorta.png" alt="" className={Stilosflex.thum}></img>
                    </div>
                    <h2>The Green panter</h2>
                    <h3>El Biologo</h3>
                    <hr />
                        <br />
                            <p>Como peoximo egresado de la carrera de Biologia de la Universidad Nacional de Colombia, hemos de hablar del origen de la misma dentro de su Alma Mater </p>
                            <p>
                                El programa curricular de Biología de la Facultad de Ciencias de la Universidad Nacional de Colombia Sede Bogotá, fue creado mediante el Acuerdo 275 de 1965 del Consejo Superior Universitario.  Actualmente exige la aprobación de 163 créditos divididos en tres componentes: Fundamentación (68 créditos), Disciplinar (63 créditos), Libre Elección (32 créditos). Las asignaturas del componente de Fundamentación proporcionan al estudiante las bases estructurales del conocimiento alrededor de las ciencias básicas: Matemáticas, Estadística, Física, Química, Biología y Ciencias de la Tierra.
                            </p>
                            <p>
                                Con avance del 75%, con profundizacion en la fisiologia animal, vegetal asi como de hongos, donde hice intercambio con el: Alma Mater Studiorum Universita di Bologna. Donde aprobe las materias de maestria de fisiologia animal y fisiologia vegetal.
                            </p>
                        </article>
                    </section>
                    <aside>
                        <div className={Stilosflex.AD}><p>AD</p></div>
                        <div className={Stilosflex.AD}><p>AD</p></div>

                    </aside>
                    <footer>
                        <div className={Stilosflex.autor}>The Green Panter productions </div>
                        <div className={Stilosflex["social-media"]}>
                            <a href="" className={Stilosflex.instagram}>IG</a>
                            <a href="" className={Stilosflex.spotify}>Spotify</a>
                        </div>
                    </footer>
                </div>
                )
}
export default Flex
