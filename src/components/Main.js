import React from "react";
import api from '../utils/Api.js'
import Card from "./Card";

function Main(props) {

    const [userName, setUserName] = React.useState();
    const [userDescription, setUserDescription] = React.useState();
    const [userAvatar, setUserAvatar] = React.useState();

    const [cards, setCards] = React.useState([])

    React.useEffect(() => {
        Promise.all([api.getUserInfo(), api.getInitialCards()])
            .then(([userData, cardsData]) => {
                setUserName(userData.name);
                setUserDescription(userData.about);
                setUserAvatar(userData.avatar);

                setCards(cardsData);
            })
            .catch(err => console.log(err))
    }, [])

    return(
        <main className="content">
            <section className="profile">
                <div className="profile__data">
                    <div onClick={props.onEditAvatar} className="profile__avatar-container">
                        <img src={userAvatar} alt="аватар" className="profile__avatar"/>
                        <div className="profile__avatar-hover"></div>
                    </div>
                    <div className="profile__info">
                        <div className="profile__name-edit">
                            <h1 className="profile__name">{userName}</h1>
                            <button onClick={props.onEditProfile} type="button" className="profile__edit-btn"></button>
                        </div>
                        <h2 className="profile__description">{userDescription}</h2>
                    </div>
                </div>
                <button onClick={props.onAddPlace} type="button" className="profile__add-btn"></button>
            </section>
            <section className="places">
                {cards.map((card) => <Card key={card._id} card={card} onCardClick={props.onCardClick}/>)}
            </section>
        </main>
    )


}

export default Main