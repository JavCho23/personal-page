import "../assets/css/Work.css"
import "../assets/css/View.css"

import WorkItem from "../components/WorkItem"

function Work() {
    const works = [
        {
            img: "./assets/img/work/personal-page.png",
            name: "Personal page",
            description: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Repellat hic ut dolorem quidem fugit, doloremque repudiandae
            ea harum in. Commodi officia quibusdam eius recusandae omnis
            sunt aliquid, a accusantium perferendis.`,
        },
    ]

    return (
        <section id="work" className="work view">
            <h2 className="subtitle">Mi trabajo</h2>

            {works.map((work) => (
                <WorkItem key={work.name} work={work} />
            ))}
        </section>
    )
}
export default Work
