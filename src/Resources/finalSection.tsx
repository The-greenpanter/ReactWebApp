import React from 'react'
import Mainsytle from "../Estilos/output.module.css"

const finalSection = () => {
  return (
<section className={Mainsytle["social-media"]}>
    <div className={Mainsytle.container}>
        <a href="https://www.instagram.com/the.green_panter/" className={Mainsytle.IG}><i className={Mainsytle["fa-instagram"]}></i></a>
        <a href="https://github.com/The-greenpanter" className={Mainsytle.GitHub}><i className={Mainsytle["fa-github"]}></i></a>
        <a href="https://www.linkedin.com/in/juan-diego-peña-castillo-932396138/" className={Mainsytle.Linkin}><i className={Mainsytle["fa-linkedin"]}></i></a>
    </div>
</section>
  )
}

export default finalSection
