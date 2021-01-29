function WorkItem({ work }) {
    return (
        <div key={work.name} className="work__item">
            <img className="work__image" src={work.img} alt="" />
            <article className="work__details">
                <header className="work__header">
                    <span className="work__subtitle">Mi trabajo</span>
                    <h3 className="work__title">{work.name}</h3>
                </header>
                <p className="work__description">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Repellat hic ut dolorem quidem fugit, doloremque repudiandae
                    ea harum in. Commodi officia quibusdam eius recusandae omnis
                    sunt aliquid, a accusantium perferendis.
                </p>
            </article>
        </div>
    )
}

export default WorkItem
