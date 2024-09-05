import Mainsytle from "../Estilos/output.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const finalSection = () => {
  return (
<section className={Mainsytle["social-media"]}>
    <div className={Mainsytle.container}><a href="https://www.instagram.com/the.green_panter/" className={Mainsytle.IG} aria-label="Instagram">
 <FontAwesomeIcon className="fa fa-instagram" icon={faInstagram} />
</a>
<a href="https://github.com/The-greenpanter" className={Mainsytle.GitHub} aria-label="GitHub">
  <FontAwesomeIcon className="fa fa-github" icon={faGithub} />
</a>
<a href="https://www.linkedin.com/in/juan-diego-peña-castillo-932396138/" className={Mainsytle.Linkin} aria-label="LinkedIn">
   <FontAwesomeIcon className="fa fa-linkedin" icon={faLinkedin} />
</a>

    </div>
</section>
  )
}

export default finalSection
