import "../assets/css/Skills.css"
import "../assets/css/View.css"

import React from "react"
import { TimelineMax } from "gsap"
import ScrollMagic from "scrollmagic"

const skills = [
    {
        img: "./assets/svg/techs/php.svg",
        name: "Backend",
        descriptions: [
            "Mi camino siendo un backend developer empezó con PHP y desde entonces me especializado en trabajar en el lado del servidor. En los primeros proyectos trabajé principalmente con vanilla PHP, luego empecé a usar Laravel y Slim para cuando necesitaba desarrollar solo una API Rest.",
            "Me he encargado de mantener una buena arquitectura para los proyectos en los que he trabajado, manteniendo mi código lo más limpio posible y crear productos de calidad.",
            "Actualmente estoy aprendiendo JavaScript a fondo, usando Node.js como entorno y Adonis.js como framework.",
        ],
    },
    {
        img: "./assets/svg/techs/js.svg",
        name: "Web development",
        descriptions: [
            "Actualmente estoy desarrollando mis habilidades como frontend developer, profundizando mis conocimientos de CSS y JavaScript para el frontend. La mayoría de aplicaciones web que he construido han sido con Vanilla JS y Vue.js.",
            "Tambien estoy aprendiendo React.js y construí esta página usándolo.",
        ],
    },
    {
        img: "./assets/svg/techs/mysql.svg",
        name: "Databases",
        descriptions: [
            "En la mayoría de proyectos que he trabajado, me he encargado del diseño y administración de la base de datos, trabajando principalmente con MySql.",
            "Actualmente estoy trabajando con una base de datos no relacional, MongoDB, y el poder que tiene para la gran demanda de datos que tiene la aplicación junto con su rápido desarrollo me han fascinado.",
        ],
    },
    {
        img: "./assets/svg/techs/aws.svg",
        name: "Cloud services",
        descriptions: [
            "La infraestructura a demanda, y auto-escalable es el futuro, y decidí aprender a administrarla. He desarrollado microservicios con una infraestructura serveless usando Lambda, APIGateway y CloudFormation, Teniendo así más tiempo para mejorar la calidad de mi código.",
        ],
    },
]
class Skills extends React.Component {
    componentDidMount() {
        const controller = new ScrollMagic.Controller()
        const movePercent = 100 / skills.length
        const wipeAnimation = new TimelineMax()
        for (let index = 1; index < skills.length; index++) {
            wipeAnimation.to("#skillsContainer", 1, {
                x: `-${index * movePercent}%`,
            }) // move in to first panel
        }

        // create scene to pin and link animation
        new ScrollMagic.Scene({
            triggerElement: "#skills",
            triggerHook: "onLeave",
            duration: skills.length + "00%",
        })
            .setPin("#skills")
            .setTween(wipeAnimation)
            .addTo(controller)
    }

    render() {
        return (
            <section id="skills" className="skill view">
                <h2 className="subtitle">Mis habilid</h2>

                <div className="skills">
                    <div
                        id="skillsContainer"
                        style={{ width: skills.length + "00%" }}
                        className="skills__container"
                    >
                        {skills.map((skill) => (
                            <div key={skill.name} className="skill__container">
                                <div className="skill__item">
                                    <img
                                        className="skill__image"
                                        src={skill.img}
                                        alt=""
                                    />
                                    <article className="skill__details">
                                        <header className="skill__header">
                                            <span className="skill__subtitle">
                                                Mis habilidades
                                            </span>
                                            <h3 className="skill__title title">
                                                {skill.name}
                                            </h3>
                                        </header>
                                        {skill.descriptions.map(
                                            (description) => (
                                                <p className="skill__description">
                                                    {description}
                                                </p>
                                            )
                                        )}
                                    </article>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        )
    }
}
export default Skills
