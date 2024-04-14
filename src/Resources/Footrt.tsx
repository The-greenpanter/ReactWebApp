import React  from 'react'
import PropTypes from 'prop-types';
import FinalSection from './finalSection';
import {useForm, SubmitHandler} from "react-hook-form";


type FormFields = {
  name: string;
  email: string;
  mensaje: string;
};


const Footrt = () => {
    
  const { register, handleSubmit } = useForm<FormFields>(); 
  // { defaultValues: { name: '', email: '', mensaje: '' } }

  const onSubmit: SubmitHandler<FormFields> = (data) => {

    console.log(data)
  }

return (
  <footer>
    <section className="contacto">
          <div className="container">
            <h3 className="titulo" id="contacto">Contact</h3>
            <form className="formulario" onSubmit={handleSubmit(onSubmit)}>
              <input className="InsertNombre" type="text" placeholder="Name" {...register("name")} />
              <input className="InsertCorreo" type="email" placeholder="Email" {...register("email")} />
              <textarea placeholder="Message"  {...register("mensaje")}/>
              <input className="boton" type="submit" value="Send" />
            </form>
          </div>
        <FinalSection/> 
    </section>  
   
  </footer>
  )
}

Footrt.protoTypes  = {
  initialValues: PropTypes.shape({
    nombre: PropTypes.string.isRequired,
    correo: PropTypes.string.isRequired,
    Mensaje: PropTypes.string.isRequired,
  }),
  onSubmit: PropTypes.func.isRequired,
  errors: PropTypes.object,
};

export default Footrt
