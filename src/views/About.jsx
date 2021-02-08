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
                        Mi nombre es <strong>Javier Chávez</strong>, soy un
                        desarrollador de <strong>software</strong> peruano. Me
                        considero una persona autodidactica y con una fuerte
                        habilidad de pensamiento lógico
                    </p>
                    <p className="about__description">
                        En un proyecto de sofware, me encargo principalmente del
                        <strong> Backend</strong> y de las actividades de
                        despliegue, sin embargo también puedo realizar tareas de
                        <strong> Frontend</strong>.
                    </p>
                    <p className="about__description">
                        {/* TODO hacer Securitec un enlace */}
                        Actualmente estoy trabajando con{" "}
                        <a
                            href="https://www.securitec.pe/"
                            className="about__link"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Securitec
                        </a>
                        .
                    </p>
                    <p className="about__description">
                        Si quieres conocer más sobre mí puedes seguirme en
                        <a
                            href="https://twitter.com/javcho23"
                            className="about__link"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <strong>Twitter</strong>
                        </a>{" "}
                        y para encontrar todos mis proyectos puedes visitar mi
                        visitar mi{" "}
                        <a
                            href="https://github.com/JavCho23"
                            className="about__link"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <strong>Github</strong>
                        </a>
                    </p>
                </div>
            </article>
        </section>
    )
}
export default About
