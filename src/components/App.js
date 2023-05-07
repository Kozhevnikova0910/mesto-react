import React from 'react';
import Header from './Header.js'
import Main from './Main.js'
import Footer from './Footer.js'
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";

function App() {

    const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
    const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
    const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);

    const [selectedCard, setSelectedCard] = React.useState(null);

    function handleEditProfileClick() {
        setIsEditProfilePopupOpen(true)
    }

    function handleAddPlaceClick() {
        setIsAddPlacePopupOpen(true)
    }

    function handleCardClick(card) {
        setSelectedCard(card);
    }

    function handleEditAvatarClick() {
        setIsEditAvatarPopupOpen(true)
    }

    function closeAllPopups(e) {
        if ((e.target.classList.contains('popup_opened')) || (e.target.classList.contains('popup__close-btn'))) {
            setIsEditProfilePopupOpen(false);
            setIsAddPlacePopupOpen(false);
            setIsEditAvatarPopupOpen(false);
            setSelectedCard(null);
        }
    }

    return (
        <div className="page">
            <Header/>
            <Main onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick} onEditAvatar={handleEditAvatarClick} onCardClick={handleCardClick}/>
            <Footer/>
            <PopupWithForm name="edit-profile" title="Редактировать профиль" buttonText="Сохранить" isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} children={
                <>
                    <label className="popup__field">
                        <input type="text" name="name" required className="popup__input popup__input_type_name"
                               placeholder="Имя" id="name-input" minLength="2" maxLength="40"/>
                        <span className="popup__input-error name-input-error"></span>
                    </label>
                    <label className="popup__field">
                        <input type="text" name="description" required
                               className="popup__input popup__input_type_about"
                               placeholder="О себе" id="about-input" minLength="2" maxLength="200"/>
                        <span className="popup__input-error about-input-error"></span>
                    </label>
                </>
            }/>
            <PopupWithForm name="add-place" title="Новое место" buttonText="Создать" isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} children={
                <>
                    <label className="popup__field">
                        <input type="text" name="name" required className="popup__input popup__input_type_name"
                               placeholder="Название" id="name-place-input" minLength="2" maxLength="30"/>
                        <span className="popup__input-error name-place-input-error"></span>
                    </label>
                    <label className="popup__field">
                        <input type="url" name="link" required className="popup__input popup__input_type_link"
                               placeholder="Ссылка на картинку" id="link-input"/>
                        <span className="popup__input-error link-input-error"></span>
                    </label>
                </>
            }/>
            <PopupWithForm name="avatar" title="Обновить аватар" buttonText="Сохранить" isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} children={
                <>
                    <label className="popup__field">
                        <input type="url" name="link" required className="popup__input popup__input_type_link"
                               placeholder="Ссылка на картинку" id="avatar-link"/>
                        <span className="popup__input-error avatar-link-error"></span>
                    </label>
                </>
            }/>
            <PopupWithForm name="confirm" title="Вы уверены?" buttonText="Да"/>
            {selectedCard && <ImagePopup card={selectedCard} onClose={closeAllPopups}/>}
        </div>
    );
}

export default App;
