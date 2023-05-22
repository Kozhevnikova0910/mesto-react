import React from "react";
import PopupWithForm from "./PopupWithForm";

function EditAvatarPopup(props) {

    const avatarRef = React.useRef();

    function handleSubmit() {
        props.onUpdateAvatar(avatarRef.current.value);
    }

    return(
        <PopupWithForm onSubmit={handleSubmit} name="avatar" title="Обновить аватар" buttonText="Сохранить" isOpen={props.isOpen} onClose={props.onClose} children={
            <>
                <label className="popup__field">
                    <input ref={avatarRef} type="url" name="link" required className="popup__input popup__input_type_link"
                           placeholder="Ссылка на картинку" id="avatar-link"/>
                    <span className="popup__input-error avatar-link-error"></span>
                </label>
            </>
        }/>
    )
}

export default EditAvatarPopup