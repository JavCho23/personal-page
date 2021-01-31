import logo from "../assets/svg/logo.svg"
import twitter from "../assets/svg/social/twitter.svg"
import github from "../assets/svg/social/github.svg"
import linkedin from "../assets/svg/social/linkedin.svg"

function Footer() {
    return (
        <footer className="footer">
            <img src={logo} alt="" srcset="" />
            <div className="footer__social-media">
                <a
                    href="https://twitter.com/javcho23"
                    target="_blank"
                    rel="noreferrer"
                >
                    <img
                        className="home__social-media-item"
                        src={twitter}
                        alt="Twiiter"
                    />
                </a>
                <a
                    href="https://linkedin.com/in/javcho23"
                    target="_blank"
                    rel="noreferrer"
                >
                    <img
                        className="home__social-media-item"
                        src={linkedin}
                        alt="Linkedin"
                    />
                </a>
                <a
                    href="https://github.com/javcho23"
                    target="_blank"
                    rel="noreferrer"
                >
                    <img
                        className="home__social-media-item"
                        src={github}
                        alt="Github"
                    />
                </a>
            </div>
            <p className="footer__slogan">Frase por ver</p>
            <p className="footer__rights">Todos los derechos reservados</p>
        </footer>
    )
}

export default Footer
