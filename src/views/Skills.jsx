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
            {
                text: (
                    <p>
                        Mi camino siendo un backend developer empezó con PHP y
                        desde entonces me he <strong>especializado</strong> en
                        trabajar en el lado del servidor. En mis primeros
                        proyectos trabajé principalmente con vanilla PHP, luego
                        empecé a usar Laravel y Slim para cuando necesitaba
                        desarrollar solo una API Rest.
                    </p>
                ),
            },
            {
                text: (
                    <p className="skills__optional">
                        Me he encargado de mantener una buena{" "}
                        <strong>arquitectura</strong> para los proyectos en los
                        que he trabajado, manteniendo mi código lo más limpio
                        posible y crear productos de calidad.
                    </p>
                ),
            },
            {
                text: (
                    <p>
                        Actualmente estoy aprendiendo{" "}
                        <strong>JavaScript</strong> a fondo, usando Node.js como
                        entorno y Adonis.js como framework.
                    </p>
                ),
            },
        ],
    },
    {
        img: "./assets/svg/techs/js.svg",
        name: "Web development",
        descriptions: [
            {
                text: (
                    <p>
                        Actualmente estoy desarrollando mis habilidades como{" "}
                        <strong>frontend developer</strong>, profundizando mis
                        conocimientos de CSS y JavaScript para el frontend. La
                        mayoría de aplicaciones web que he construido han sido
                        con Vanilla JS y Vue.js.
                    </p>
                ),
            },
            {
                text: (
                    <p>
                        Tambien estoy aprendiendo React.js y construí esta
                        página usándolo.
                    </p>
                ),
            },
        ],
    },
    {
        img: "./assets/svg/techs/mysql.svg",
        name: "Databases",
        descriptions: [
            {
                text: (
                    <p>
                        En la mayoría de proyectos que he trabajado, me he
                        encargado del <strong>diseño</strong> y administración
                        de la base de datos, trabajando principalmente con
                        MySql.
                    </p>
                ),
            },
            {
                text: (
                    <p>
                        Actualmente estoy trabajando con una base de datos no
                        relacional, <strong>MongoDB</strong>, y el poder que
                        tiene para la gran demanda de datos que una aplicación
                        puede alcanzar, junto con su rápido desarrollo. Me han
                        fascinado.
                    </p>
                ),
            },
        ],
    },
    {
        img: "./assets/svg/techs/aws.svg",
        name: "Cloud services",
        descriptions: [
            {
                text: (
                    <p>
                        La infraestructura a demanda, y auto-escalable es el
                        futuro, y decidí aprender a administrarla. He
                        desarrollado microservicios con una infraestructura{" "}
                        <strong>serveless</strong> usando Lambda, APIGateway y
                        CloudFormation, Teniendo así más tiempo para mejorar la
                        calidad de mi código.
                    </p>
                ),
            },
        ],
    },
]
class Skills extends React.Component {
    componentDidMount() {
        const controller = new ScrollMagic.Controller()
        const movePercent = 100 / skills.length
        const wipeAnimation = new TimelineMax()
        for (let index = 1; index < skills.length; index++) {
            wipeAnimation.to("#skillsContainer", 0.5, {
                z: -150,
            }) // move in to first panel
            wipeAnimation.to("#skillsContainer", 1, {
                x: `-${index * movePercent}%`,
            }) // move in to first panel
            wipeAnimation.to("#skillsContainer", 0.5, {
                z: 0,
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
                        {skills.map((skill, skillIndex) => (
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
                                            (description, index) =>
                                                description.text
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
