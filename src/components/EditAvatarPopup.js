import PopupWithForm from './PopupWithForm';
// import { CurrentUserContext } from '../contexts/CurrentUserContext';
import {useRef, useState} from 'react';
export default function EditAvatarPopup({
  isOpen,
  onUpdate,
  onClose,
  buttonText,
}) {
  const avatarRef = useRef();
  const [isNewAvatarUrlValid, setIsNewAvatarUrlValid] = useState(true);
  const [errorMessage, setErrorMessage] = useState({avatar: ' '});

  function handleAvatarChange(e) {
    setIsNewAvatarUrlValid(e.target.validity.valid);
    setErrorMessage({avatar: e.target.validationMessage});
  }
  function handleFormSubmit(evt) {
    evt.preventDefault();
    onUpdate({
      avatar: avatarRef.current.value,
    });
  }
  return (
    <PopupWithForm
      title="Change profile picture"
      name="avatar-form"
      onSubmit={handleFormSubmit}
      isOpen={isOpen}
      onClose={onClose}
      buttonText={buttonText}
      activeButton={isNewAvatarUrlValid}
      children={
        <>
          <input
            type="URL"
            className={`form__input ${
              isNewAvatarUrlValid ? '' : 'form__input_type_error'
            }`}
            id="avatar-link"
            name="avatar"
            placeholder="New Image URL"
            required
            ref={avatarRef}
            onChange={handleAvatarChange}
            //value=?
          />

          <span
            className={`avatar-link-input-error ${
              isNewAvatarUrlValid ? '' : 'form__error-text_active'
            }`}
          >
            {errorMessage.avatar}
          </span>
        </>
      }
    />
  );
}
