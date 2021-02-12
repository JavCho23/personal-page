import "../assets/css/Work.css"
import "../assets/css/View.css"

import React from "react"
import WorkItem from "../components/WorkItem"

import { TimelineMax } from "gsap"
import ScrollMagic from "scrollmagic"

const works = [
    {
        img: "./assets/img/work/inbox.png",
        name: "Inbox",
        description: `Inbox es una plataforma omnicanal, que facilita la comunicación entre empresas y sus clientes. 
        Actualmente pertenezco al equipo de Inbox, y estamos convirtiéndolo en una plataforma automantenible.
         El stack con el que trabajo en Inbox es Vue.js, Adonis.js, MongoDB, Socket.io y Express.js.`,
    },
    {
        img: "./assets/img/work/personal-page.png",
        name: "Personal page",
        description: `Mi página personal es un proyecto que ansiaba poner en marcha, y aún está en desarrollo. 
        Aquí es donde puedo mostrar mis principales trabajos y describir mis habilidades. 
        Realicé esta página usando React por la gran curiosidad que tenía de probar esta librería y agregarla a mi portafolio.`,
    },
    {
        img: "./assets/img/work/buscapatas.png",
        name: "Buscapatas",
        description: `Buscapatas es una plataforma de adopción y donación para el banco de alimentos y mascotas del Perú. 
        Lideré el equipo de backend, en donde desarrollamos una API Rest usando servicios de AWS, principalmente funciones Lambda en JavaScript, APIGateway y S3.`,
    },
    {
        img: "./assets/img/work/gerencia-gestar.png",
        name: "GerenciaGestar",
        description: `GerenciaGestar es una aplicación gerencial para Invitro gestar, que consume datos de su ERP para poder obtener reportes gerenciales. 
        Me encargué del backend de esta aplicación trabajando con vanilla PHP.`,
    },
    {
        img: "./assets/img/work/securitec-music.png",
        name: "SecuritecMusic",
        description: `Securitec music es una API Rest que administra Artistas, albums y canciones. 
        Fue realizado como una prueba de ingreso al equipo de Inbox, en la cual puede demostrar mis habilidades como backend developer. 
        Para realizar esta utilicé Express.js y MySql, basandome en una arquitectura hexagonal. `,
    },
]
class Work extends React.Component {
    componentDidMount() {
        this.controller = new ScrollMagic.Controller()
        const movePercent = 100 / works.length
        const wipeAnimation = new TimelineMax()
        for (let index = 1; index < works.length; index++) {
            wipeAnimation.to("#worksContainer", 1, {
                x: `-${index * movePercent}%`,
            }) // move in to first panel
        }

        // create scene to pin and link animation
        new ScrollMagic.Scene({
            triggerElement: "#work",
            triggerHook: "onLeave",
            duration: works.length + "00%",
        })
            .setPin("#work")
            .setTween(wipeAnimation)
            .addTo(this.controller)
    }
    selectWork(work) {
        this.controller.scrollTo(`#${work}`)
        console.log(this.controller)
    }

    render() {
        return (
            <section id="work" className="work view">
                <h2 className="subtitle">Mi trabajo</h2>

                <div className="works">
                    <div
                        id="worksContainer"
                        style={{ width: works.length + "00%" }}
                        className="works__container"
                    >
                        {works.map((work) => (
                            <WorkItem key={work.name} work={work} />
                        ))}
                    </div>
                </div>
                {/* <div className="works__buttons">
                    {works.map((work) => (
                        <button
                            key={work.name}
                            onClick={() => {
                                this.selectWork(work.name.replace(" ", ""))
                            }}
                            className="work__button"
                        >
                            {work.name}
                        </button>
                    ))}
                </div> */}
            </section>
        )
    }
}
export default Work
