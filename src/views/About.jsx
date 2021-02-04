import "../assets/css/About.css"
import "../assets/css/View.css"
import me from "../assets/img/me.png"
function About() {
    return (
        <section id="about" className="about view">
            <h2 className="subtitle">Sobre mí</h2>
            <article className="about__container">
                <header className="about__header">
                    <img className="about__image" src={me} alt="" />
                </header>
                <div className="about__content">
                    <span className="about__title title">Sobre mí</span>
                    <p className="about__description">
                        Mi nombre es Javier Chávez, nací en Lima pero he pasado
                        la mayor parte de mi vida en Chiclayo.
                    </p>
                    <p className="about__description">
                        Mi nombre es Javier Chávez, nací en Lima pero he pasado
                        la mayor parte de mi vida en Chiclayo.
                    </p>
                </div>
            </article>
        </section>
    )
}
export default About
