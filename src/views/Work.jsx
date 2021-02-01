import "../assets/css/Work.css"
import "../assets/css/View.css"

import React from "react"
import WorkItem from "../components/WorkItem"

import { TimelineMax, TweenMax } from "gsap"
import ScrollMagic from "scrollmagic"
import { ScrollMagicPluginGsap } from "scrollmagic-plugin-gsap"

ScrollMagicPluginGsap(ScrollMagic, TweenMax, TimelineMax)

const works = [
    {
        img: "./assets/img/work/personal-page.png",
        name: "Personal page",
        description: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Repellat hic ut dolorem quidem fugit, doloremque repudiandae
        ea harum in. Commodi officia quibusdam eius recusandae omnis
        sunt aliquid, a accusantium perferendis.`,
    },
    {
        img: "./assets/img/work/personal-page.png",
        name: "Trabajo",
        description: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Repellat hic ut dolorem quidem fugit, doloremque repudiandae
        ea harum in. Commodi officia quibusdam eius recusandae omnis
        sunt aliquid, a accusantium perferendis.`,
    },
    {
        img: "./assets/img/work/personal-page.png",
        name: "Trabajo 2",
        description: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Repellat hic ut dolorem quidem fugit, doloremque repudiandae
        ea harum in. Commodi officia quibusdam eius recusandae omnis
        sunt aliquid, a accusantium perferendis.`,
    },
    {
        img: "./assets/img/work/personal-page.png",
        name: "Trabajo 3",
        description: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Repellat hic ut dolorem quidem fugit, doloremque repudiandae
        ea harum in. Commodi officia quibusdam eius recusandae omnis
        sunt aliquid, a accusantium perferendis.`,
    },
    {
        img: "./assets/img/work/personal-page.png",
        name: "Trabajo 4",
        description: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Repellat hic ut dolorem quidem fugit, doloremque repudiandae
        ea harum in. Commodi officia quibusdam eius recusandae omnis
        sunt aliquid, a accusantium perferendis.`,
    },
]
class Work extends React.Component {
    componentDidMount() {
        const controller = new ScrollMagic.Controller()
        const movePercent = 100 / works.length
        const wipeAnimation = new TimelineMax()
        for (let index = 1; index < works.length; index++) {
            wipeAnimation
                .to("#worksContainer", 0.5, { z: -150 }) // move back in 3D space
                .to("#worksContainer", 1, { x: `-${index * movePercent}%` }) // move in to first panel
                .to("#worksContainer", 0.5, { z: 0 }) // move back to origin in 3D space
        }

        // create scene to pin and link animation
        new ScrollMagic.Scene({
            triggerElement: "#work",
            triggerHook: "onLeave",
            duration: "500%",
        })
            .setPin("#work")
            .setTween(wipeAnimation)
            .addTo(controller)
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
            </section>
        )
    }
}
export default Work
