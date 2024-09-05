import { useState } from "react";
import Mainsytle from "../Estilos/output.module.css";
import { useForm, SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Finalsection from "./finalSection";

// Validación con Zod
const schema = z.object({
  name: z.string().min(8),
  email: z.string().email(),
  mensaje: z.string().max(200).min(20),
});

type FormFields = z.infer<typeof schema>;

const encode = (data: { [key: string]: string }) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
};

const Footrt = () => {
  const { register, handleSubmit, setError, formState: { errors, isSubmitting } } = useForm<FormFields>({
    resolver: zodResolver(schema),
  });

  const [formState, setFormState] = useState({ name: "", email: "", mensaje: "" });

  const onSubmit: SubmitHandler<FormFields> = async (data) => {
    try {
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({ "form-name": "contact", ...data }), // Incluir los datos del formulario
      });
      alert("Success!");
    } catch (error) {
      alert("There was an error");
      setError("root", {
        message: "Error al enviar el formulario",
      });
    }
  };

  return (
    <footer className={Mainsytle.footer}>
      <section className={Mainsytle.contacto}>
        <div className={Mainsytle.container}>
          <h3 className={Mainsytle.titulo} id="contacto">Contact</h3>
          <form
            className={Mainsytle.formulario}
            onSubmit={handleSubmit(onSubmit)}
            method="POST"
            data-netlify="true"
            data-netlify-recaptcha="true"
          >
            <input type="hidden" name="form-name" value="contact" />
            <input className={Mainsytle.InsertNombre} type="text" placeholder="Name" {...register("name")} />
            {errors.name && <div className={Mainsytle["error-message"]}>{errors.name.message}</div>}
            <input className={Mainsytle.InsertCorreo} type="email" placeholder="Email" {...register("email")} />
            {errors.email && <div className={Mainsytle["error-message"]}>{errors.email.message}</div>}
            <textarea placeholder="Message" {...register("mensaje")} />
            {errors.mensaje && <div className={Mainsytle["error-message"]}>{errors.mensaje.message}</div>}
            <div data-netlify-recaptcha="true"></div>            
            <input className={Mainsytle.boton} type="submit" value="Send" disabled={isSubmitting} />
          </form>
        </div>
        <Finalsection/>
      </section>
    </footer>
  );
};

export default Footrt;
