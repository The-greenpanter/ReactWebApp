import React from 'react'
import 'practicadospuntocero.css'

const music = () => {
  return (
    <div className="contenedor">
    <header>
        <nav>
            <ul>
                <li><a href="../index.html" >Inicio</a></li>
                <li><a href="#">Acerca de</a></li>
                <li><a href="#">Producotos</a></li>
                <li><a href="#">Contactos</a></li>
            </ul>
        </nav>
    </header>
    <section className="main">
        <div>
            <img className ="IMG" src="/Music/IMG_21620467086121.jpeg" alt="" width="1080" heigt="720" />
        </div>
        <section className="post">
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
    <div className="weidget">
        <div>
            <img className="IMG"  src="/Music/IMG-20200308-WA0013.jpg" alt=""/>
        </div>
        <h3 className="titulo">Articulos destacados</h3>
        <ul>
            <li><a href="#">Canserbero, amet consectetur adipisicing elit.</a></li>
            <li><a href="#">-Que las municiones se conviertan en pany que los superheroes salgan de las series donde viven</a></li>
            <li><a href="#">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</a></li>
            <li><a href="#">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</a></li>
            <li><a href="#">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</a></li>
            <li><a href="#">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</a></li>
        </ul>
    </div>
    <div className="weidget">
        <h3 className="titulo">Informacion</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores vitae tempore eveniet esse non, sed pariatur quas quae aspernatur ad quasi laudantium voluptatum sunt accusamus nam dolor ex distinctio sequi.</p>        
    </div>
</aside>
<footer>
    <p>The Green Panther productions - Copy right protected</p>
</footer>
</div>
  )
}

export default music
