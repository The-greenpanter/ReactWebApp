import React from 'react'
import PropTypes from 'prop-types'

const footrt = (props) => {
    const handleSubmit = (event) => {
      event.preventDefault(); // Prevent default form submission
      const formData = new FormData(event.target);
      const nombre = formData.get('nombre');
      const correo = formData.get('correo');
      const mensaje = formData.get('Mensaje');
  
      // Do something with the values (e.g., call props.onSubmit or store them in state)
      props.onSubmit({ nombre, correo, mensaje });
    };
  return (
  <footer>
    <section class="contacto">
        <div class="container">
            <h3 class="titulo" id="contacto">Contacto</h3>
            <form class="formulario" onSubmit={handleSubmit}>
                <input class="InsertNombre" type="text" placeholder="Nombre" name="nombre" required></input>
                <input class="InsertCorreo" type="email" placeholder="Correo" name="correo" required></input>
                <textarea name="Mensaje" placeholder="Mensaje" required></textarea>
                <input class="boton" type="sumit" value="Enviar"></input>
            </form>
        </div>
    </section>  
    <section class="social-media">
        <div class="container">
            <a href="https://www.instagram.com/the.green_panter/" class="IG"><i class="fa-brands fa-instagram"></i></a>
            <a href="" class="FB"><i class="fa-brands fa-facebook-f"></i></a>
            <a href="https://github.com/The-greenpanter" class="GitHub"><i class="fa-brands fa-github"></i></a>
            <a href="https://www.linkedin.com/in/juan-diego-peña-castillo-932396138/" class="Linkin"><i class="fa-brands fa-linkedin"></i></a>
        </div>
    </section>
  </footer>
  )
}

footrt.propTypes = {
  initialValues: React.PropTypes.shape({
    nombre: React.PropTypes.string,
    correo: React.PropTypes.string,
    Mensaje: React.PropTypes.string,
  }),
  onSubmit: React.PropTypes.func.isRequired,
  errors: React.PropTypes.object,
};

export default footrt
