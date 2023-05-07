import React from "react";

function Card(props) {

    function handleClick() {
        props.onCardClick(props.card);
    }

    return (
        <article onClick={handleClick} key={props.card._id} className="place">
            <img src={props.card.link} alt={props.card.name} className="place__image"/>
            <div className="place__info">
                <h2 className="place__name">{props.card.name}</h2>
                <div className="place__like-block">
                    <button type="button" className="place__like"></button>
                    <p className="place__like-count">{props.card.likes.length}</p>
                </div>
            </div>
        </article>
    )
}

export default Card