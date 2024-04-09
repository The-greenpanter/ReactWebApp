import React, { useState }  from 'react'
import PropTypes from 'prop-types';
import FinalSection from './finalSection';

const Footrt = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleFormSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission

    // Process form data (e.g., call props.onSubmit or store them in state)
    console.log({ name, email, message }); // Example processing
  };
return (
  <footer>
    <section class="contacto">
          <div class="container">
            <h3 class="titulo" id="contacto">Contact</h3>
            <form class="formulario" onSubmit={handleFormSubmit}>
              <input class="InsertNombre" type="text" placeholder="Name" name="name" required value={name} onChange={(e) => setName(e.target.value)} />
              <input class="InsertCorreo" type="email" placeholder="Email" name="email" required value={email} onChange={(e) => setEmail(e.target.value)} />
              <textarea name="Mensaje" placeholder="Message" required value={message} onChange={(e) => setMessage(e.target.value)} />
              <input class="boton" type="submit" value="Send" />
            </form>
          </div>
        <FinalSection/> 
    </section>  
   
  </footer>
  )
}

Footrt.protoTypes  = {
  initialValues: PropTypes.shape({
    nombre: PropTypes.string,
    correo: PropTypes.string,
    Mensaje: PropTypes.string,
  }),
  onSubmit: PropTypes.func.isRequired,
  errors: PropTypes.object,
};

export default Footrt
