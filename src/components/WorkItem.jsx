function WorkItem({ work }) {
    return (
        <div className="work__item">
            <img className="work__image" src={work.img} alt="" />
            <article className="work__details">
                <header className="work__header">
                    <span className="work__subtitle">Mi trabajo</span>
                    <h3 className="work__title">{work.name}</h3>
                </header>
                <p className="work__description">{work.description}</p>
            </article>
        </div>
    )
}

export default WorkItem
