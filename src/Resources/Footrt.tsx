import React  from 'react'
import PropTypes from 'prop-types';
import FinalSection from './finalSection';
import {useForm, SubmitHandler} from "react-hook-form";
import {z} from "zod";
import { zodResolver } from '@hookform/resolvers/zod';



const schema = z.object({
  name: z.string().min(8),
  mensaje: z.string().max(200).min(20), 
  email: z.string().email(),
});

type FormFields = z.infer<typeof schema>;

const Footrt = () => {
    
  const { register, handleSubmit, setError, formState:{ errors, isSubmitting },} = useForm<FormFields>({resolver: zodResolver(schema),}); 
  // { defaultValues: { name: '', email: '', mensaje: '' } }

  const onSubmit: SubmitHandler<FormFields> = async (data) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      console.log(data);
    } catch (error) {
      setError("root", {
        message: "Please enter a valid email \n Por favor ingrese un email valido",
      });
    }
  };

return (
  <footer>
    <section className="contacto">
          <div className="container">
            <h3 className="titulo" id="contacto">Contact</h3>
            <form className="formulario" onSubmit={handleSubmit(onSubmit)}>
              <input className="InsertNombre" type="text" placeholder="Name" {...register("name")} />
              {errors.name && (
                    <div className="text-red-500">{errors.name.message}</div>
                  )}
              <input className="InsertCorreo" type="email" placeholder="Email" {...register("email")} />
                  {errors.email && (
                    <div className="text-red-500">{errors.email.message}</div>
                  )}
              <textarea placeholder="Message"  {...register("mensaje")}/>
              {errors.mensaje && (
                    <div className="text-red-500">{errors.mensaje.message}</div>
                  )}
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
