import Mainsytle from "../Estilos/output.module.css"

const finalSection = () => {
  return (
<section className={Mainsytle["social-media"]}>
    <div className={Mainsytle.container}><a href="https://www.instagram.com/the.green_panter/" className={Mainsytle.IG} aria-label="Instagram">
  <i className="fa fa-instagram"></i>
</a>
<a href="https://github.com/The-greenpanter" className={Mainsytle.GitHub} aria-label="GitHub">
  <i className="fa fa-github"></i>
</a>
<a href="https://www.linkedin.com/in/juan-diego-peña-castillo-932396138/" className={Mainsytle.Linkin} aria-label="LinkedIn">
  <i className="fa fa-linkedin"></i>
</a>

    </div>
</section>
  )
}

export default finalSection
