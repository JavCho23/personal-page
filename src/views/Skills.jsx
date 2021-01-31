import "../assets/css/Skills.css"
import "../assets/css/View.css"

function Skills() {
    const skills = [
        {
            img: "./assets/svg/techs/php.svg",
            name: "Backend",
            description: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Repellat hic ut dolorem quidem fugit, doloremque repudiandae
            ea harum in. Commodi officia quibusdam eius recusandae omnis
            sunt aliquid, a accusantium perferendis.`,
        },
    ]

    return (
        <section id="skills" className="skills view">
            <h2 className="subtitle">Mis habilid</h2>

            {skills.map((skill) => (
                <div key={skill.name} className="skill__item">
                    <img className="skill__image" src={skill.img} alt="" />
                    <article className="skill__details">
                        <header className="skill__header">
                            <span className="skill__subtitle">
                                Mis habilidades
                            </span>
                            <h3 className="skill__title">{skill.name}</h3>
                        </header>
                        <p className="skill__description">
                            {skill.description}
                        </p>
                    </article>
                </div>
            ))}
        </section>
    )
}
export default Skills
