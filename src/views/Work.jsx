function Work() {
    const works = [{ name: "Personal page" }]
    return (
        <section id="work" className="work">
            <h2 className="work__subtitle">Mi trabajo</h2>
            {works.map((work) => (
                <div key={work.name} className="work__item">
                    <img className="work__image" src="" alt="" srcset="" />
                    <article className="work__details">
                        <header className="work__header">
                            <h2 className="work__title">Mi trabajo</h2>
                            <h3 className="work__name">{work.name}</h3>
                        </header>
                        <p className="work__description"></p>
                    </article>
                </div>
            ))}
        </section>
    )
}
export default Work
