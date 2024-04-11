import React, { useState }  from 'react'
import PropTypes from 'prop-types';
import FinalSection from './finalSection';
import {useForm} from "react-hook-form";

type FormFields = {
  name: string;
  email: string;
};


const Footrt = () => {
  
  const { register,handleFormSubmit} = useForm<FormFields>(FormFields);

  const onSubmit: SubmitHandeler<FormFields> = (data) =>{
    console.log(data)
  }

return (
  <footer>
    <section class="contacto">
          <div class="container">
            <h3 class="titulo" id="contacto">Contact</h3>
            <form class="formulario" onSubmit={handleFormSubmit(onSubmit)}>
              <input class="InsertNombre" type="text" placeholder="Name" name="Name" {...register("Name")} />
              <input class="InsertCorreo" type="email" placeholder="Email" name="email" {...register("email")} />
              <textarea name="Mensaje" placeholder="Message"  />
              <input class="boton" type="submit" value="Send" {...register("Message")}/>
            </form>
          </div>
        <FinalSection/> 
    </section>  
   
  </footer>
  )
}

// Footrt.protoTypes  = {
//   initialValues: PropTypes.shape({
//     nombre: PropTypes.string.required,
//     correo: PropTypes.string.required,
//     Mensaje: PropTypes.string.required,
//   }),
//   onSubmit: PropTypes.func.isRequired,
//   errors: PropTypes.object,
// };

export default Footrt
