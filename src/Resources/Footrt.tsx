import React  from 'react'
import PropTypes from 'prop-types';
import FinalSection from './finalSection.tsx';
import {useForm, SubmitHandler} from "react-hook-form";
import Mainsytle from "../Estilos/output.module.css"
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
  <footer className={Mainsytle.footer}>
    <section className={Mainsytle.contacto}>
          <div className={Mainsytle.container}>
            <h3 className={Mainsytle.titulo} id="contacto">Contact</h3>
            <form className={Mainsytle.formulario} onSubmit={handleSubmit(onSubmit)}>
              <input className={Mainsytle.InsertNombre} type="text" placeholder="Name" {...register("name")} />
              {errors.name && (
                    <div className={Mainsytle["error-message"]}>{errors.name.message}</div>
                  )}
              <input className={Mainsytle.InsertCorreo} type="email" placeholder="Email" {...register("email")} />
                  {errors.email && (
                    <div className={Mainsytle["error-message"]}>{errors.email.message}</div>
                  )}
              <textarea placeholder="Message"  {...register("mensaje")}/>
              {errors.mensaje && (
                    <div className={Mainsytle["error-message"]}>{errors.mensaje.message}</div>
                  )}
              <input className={Mainsytle.boton} type="submit" value="Send" />
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
