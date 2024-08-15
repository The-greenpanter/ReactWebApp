import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import Mainsytle from "../Estilos/output.module.css";
import {Music} from "../components/Music/Music.tsx";
import Flex from "../components/Articuloflexbox/Flex.tsx";
import Practica from "../components/Practicjquery/PracticaJq.tsx";
import App from "../App.tsx";


export const Trabajos = () => {
    return (
            <Router>
                <section className={Mainsytle.trabajos} id="Trabajos">
                    <div className={Mainsytle.container}>
                        <h3 className={Mainsytle.titulo}>
                            Trabajos
                        </h3>
                        <div className={Mainsytle.trabanos}>
                            <NavLink to='/Music'>
                                <div className={Mainsytle.work}>
                                    <div className={Mainsytle.thumb}>
                                        <img src="img/music.png" alt="" className={Mainsytle.Iuno} />
                                        <div className={Mainsytle.descripcion}>
                                            <p className={Mainsytle.smalltittle}>Producción música</p>
                                            <p className={Mainsytle.smalldescription}>Grabación, edición y composición</p>
                                        </div>
                                    </div>
                                </div>
                            </NavLink>

                            <NavLink to='Flex'>
                                <div className={Mainsytle.work}>
                                    <div className={Mainsytle.thumb}>
                                        <img src="img/Landscape.png" alt="" className={Mainsytle.Iuno} />
                                        <div className={Mainsytle.descripcion}>
                                            <p className={Mainsytle.smalltittle}>Biología</p>
                                            <p className={Mainsytle.smalldescription}>Detalles de un Biólogo egresado de la UNAL-Sede Bogotá </p>
                                        </div>
                                    </div>
                                </div>
                            </NavLink>

                            <NavLink to='/Practicajq'>
                                <div className={Mainsytle.work}>
                                    <div className={Mainsytle.thumb}>
                                        <img src="img/Disenho.png" alt="" className={Mainsytle.Iuno} />
                                        <div className={Mainsytle.descripcion}>
                                            <p className={Mainsytle.smalltittle}>Diseñado para start up</p>
                                            <p className={Mainsytle.smalldescription}>Diseño web dinámico con jQuery </p>
                                        </div>
                                    </div>
                                </div>
                            </NavLink>

                            <NavLink to='/'>
                                <div className={Mainsytle.work}>
                                    <div className={Mainsytle.thumb}>
                                        <img src="img/PSX_20220321_084354(1).png" alt="" className={Mainsytle.Iuno} />
                                        <div className={Mainsytle.descripcion}>
                                            <p className={Mainsytle.smalltittle}>Café Euphonia</p>
                                            <p className={Mainsytle.smalldescription}>De la finca a la taza</p>
                                        </div>
                                    </div>
                                </div>
                            </NavLink>

                            <NavLink to='/'>
                                <div className={Mainsytle.work}>
                                    <div className={Mainsytle.thumb}>
                                        <img src="img/sun.png" alt="" className={Mainsytle.Iuno} />
                                        <div className={Mainsytle.descripcion}>
                                            <p className={Mainsytle.smalltittle}>Título del trabajo</p>
                                            <p className={Mainsytle.smalldescription}>Herramientas e ideas principales</p>
                                        </div>
                                    </div>
                                </div>
                            </NavLink>

                            <NavLink to='/'>
                                <div className={Mainsytle.work}>
                                    <div className={Mainsytle.thumb}>
                                        <img src="img/Travel.png" alt="" className={Mainsytle.Iuno} />
                                        <div className={Mainsytle.descripcion}>
                                            <p className={Mainsytle.smalltittle}>Título del trabajo</p>
                                            <p className={Mainsytle.smalldescription}>Herramientas e ideas principales</p>
                                        </div>
                                    </div>
                                </div>
                            </NavLink>
                        </div>
                    </div>
                </section>
                <Routes>
                    <Route path='/Music' element={<Music />} />
                    <Route path='/Flex' element={<Flex />} />
                    <Route path='/Practicajq' element={<Practica />} />
                    {/* <Route path='/' element={<App/>} />
                    <Route path='/' element={<App/>} />
                    <Route path='/' element={<App/>} /> */}
                </Routes>
            </Router>
    )
}
