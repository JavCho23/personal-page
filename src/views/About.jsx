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
                        Mi nombre es Javier Chávez, soy un desarrollador de
                        sofware peruano. Cuando no estoy desarrollando, juego
                        videojuegos o hago deporte.
                    </p>
                    <p className="about__description">
                        En un proyecto de sofware, me encargo principalmente del
                        Backend y de las actividades de despliegue, sin embargo
                        también puedo realizar tareas de Frontend.
                    </p>
                    <p className="about__description">
                        {/* TODO hacer Securitec un enlace */}
                        Actualmente estoy trabajando con Securitec.
                    </p>
                </div>
            </article>
        </section>
    )
}
export default About
