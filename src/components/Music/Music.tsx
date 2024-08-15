import Musicstyle from "./practicadospuntocero.module.css"
export const Music = () => {
  return (

<div className ={Musicstyle.contenedor}>
    <header>
        <nav>
            <ul>
                <li>Inicio</li>
                <li>Acerca de</li>
                <li>Producotos</li>
                <li>Contactos</li>
            </ul>
        </nav>
    </header>
    <section className ={Musicstyle.main}>
        <div>
            <img className ={Musicstyle.IMG} src="/Music/IMG_21620467086121.jpeg" alt="" width="1080" heigt="720" > </img>
        </div>
        <section className ={Musicstyle.post}>
            <article>
                <h2>Titulo del Articulo</h2>
                <p>
                    lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum   societes sollicitud in culpa qui officia deserunt mollit anim id est laborum. Excepteur sint occaecat cupidat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum societes sollicitud in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                </p>

                <p> lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum   societes sollicitud in culpa qui officia deserunt mollit anim id est laborum. Excepteur sint occaecat cupidat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum societes sollicitud in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit. sollicitud in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                </p>
            </article>
        </section>

    </section>
    <aside>
        <div className ={Musicstyle.weidget}>
            <div>
                <img className ={Musicstyle.IMG} src="/Music/IMG-20200308-WA0013.jpg" alt=""></img>
            </div>
            <h3 className ={Musicstyle.titulo}>Articulos destacados</h3>
            <ul>
                <li>Canserbero, amet consectetur adipisicing elit.</li>
                <li>-Que las municiones se conviertan en pany que los superheroes salgan de las series donde viven</li>
                <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</li>
                <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</li>
                <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</li>
                <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</li>
            </ul>
        </div>
        <div className ={Musicstyle.weidget}>
            <h3 className ={Musicstyle.titulo}>Informacion</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores vitae tempore eveniet esse non, sed pariatur quas quae aspernatur ad quasi laudantium voluptatum sunt accusamus nam dolor ex distinctio sequi.</p>
        </div>
    </aside>
    <footer>
        <p>The Green Panther productions - Copy right protected</p>
    </footer>
</div>
  )
}
