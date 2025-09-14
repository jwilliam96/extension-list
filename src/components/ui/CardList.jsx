export default function CardList({ props, onToggle, onRemove }) {
    const { name, description, logo, isActive } = props

    return (
        <article className="card">
            <div className="card-content">
                <img src={logo} alt="logo" />

                <div>
                    <h2 className="card-title">{name}</h2>
                    <p className="card-description">{description}</p>
                </div>
            </div>

            <div className="card-content-state">
                <button className="card-button" onClick={() => onRemove(name)}>
                    Remove
                </button>

                {/* BUTTON STATE */}
                <div
                    onClick={() => onToggle(name)}
                    className={`card-state-content ${isActive && "state-content-active"}`}
                >
                    <div className={`card-state ${isActive && "state-active"}`} />
                </div>
            </div>
        </article>
    )
}
