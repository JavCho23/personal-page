import "../assets/css/Skills.css"
import "../assets/css/View.css"

import React from "react"
import { TimelineMax } from "gsap"
import ScrollMagic from "scrollmagic"

const skills = [
    {
        img: "./assets/svg/techs/php.svg",
        name: "Backend",
        description: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Repellat hic ut dolorem quidem fugit, doloremque repudiandae
        ea harum in. Commodi officia quibusdam eius recusandae omnis
        sunt aliquid, a accusantium perferendis.`,
    },
    {
        img: "./assets/svg/techs/js.svg",
        name: "Web development",
        description: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Repellat hic ut dolorem quidem fugit, doloremque repudiandae
        ea harum in. Commodi officia quibusdam eius recusandae omnis
        sunt aliquid, a accusantium perferendis.`,
    },
    {
        img: "./assets/svg/techs/mysql.svg",
        name: "Databases",
        description: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Repellat hic ut dolorem quidem fugit, doloremque repudiandae
        ea harum in. Commodi officia quibusdam eius recusandae omnis
        sunt aliquid, a accusantium perferendis.`,
    },
    {
        img: "./assets/svg/techs/aws.svg",
        name: "Cloud services",
        description: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Repellat hic ut dolorem quidem fugit, doloremque repudiandae
        ea harum in. Commodi officia quibusdam eius recusandae omnis
        sunt aliquid, a accusantium perferendis.`,
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
                                        <p className="skill__description">
                                            {skill.description}
                                        </p>
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
