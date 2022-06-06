import PopupWithForm from "./PopupWithForm";
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import { useState } from "react";
export default function setEditProfilePopup({isOpen,onClose})

{
  const [name,setname]= useState("");
  const [description, setDescription]= useState("");
return (
 
<PopupWithForm
        title="Edit Profile"
        name="edit-form"
        formId="edit-profile"
        children={
          <>
            <input type="text" className="form__input" id="username" name="username" placeholder="Name" required minLength="2" maxLength="40" />
            <span className="username-input-error form__error-text"/>
            <input type="text" className="form__input" id="about" name="about" placeholder="About Me" required minLength="2" maxLength="200" />
            <span className="about-input-error form__error-text "/>
          </>
        }
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
      />
)
}
