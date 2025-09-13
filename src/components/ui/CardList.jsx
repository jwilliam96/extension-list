
export default function CardList({ state, setState }) {
    return (
        <article className="card">
            <div className="card-content">
                <img src="/public/images/logo-devlens.svg" alt="logo" />

                <div >
                    <h2 className="card-title">DevLens</h2>
                    <p className="card-description">Quickly inspect page layouts and visualize element boundaries.</p>
                </div>
            </div>

            <div className="card-content-state">
                <button className="card-button">Remove</button>
                <div onClick={setState} className={`card-state-content ${state && "state-content-active"}`}>
                    <div className={`card-state ${state && "state-active"}`} />
                </div>
            </div>

        </article>
    )
}
