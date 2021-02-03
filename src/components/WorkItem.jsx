function WorkItem({ work }) {
    return (
        <div id={work.name.replace(" ","")} className="work__container">
            <div className="work__item">
                <img className="work__image" src={work.img} alt="" />
                <article className="work__details">
                    <header className="work__header">
                        <span className="work__subtitle">Mi trabajo</span>
                        <h3 className="work__title title">{work.name}</h3>
                    </header>
                    <p className="work__description">{work.description}</p>
                </article>
            </div>
        </div>
    )
}

export default WorkItem
