import PopupWithForm from './PopupWithForm';
import {useEffect, useState, useRef} from 'react';
export default function AddPlacePopup({isOpen, onUpdate, onClose, buttonText}) {
  const [cardTitle, setCardTitle] = useState('');
  const [imageLink, setImageLink] = useState('');
  function handleFormSubmit(evt) {
    console.log('card added');
    evt.preventDefault();
    onUpdate({
      name: cardTitle,
      link: imageLink,
    });
  }
  function handleCardTitleChange(e) {
    setCardTitle(e.target.value);
  }
  function handleImageLinkChange(e) {
    setImageLink(e.target.value);
  }
  return (
    <PopupWithForm
      title="New place"
      name="add-form"
      formId="img-add"
      buttonText={buttonText}
      onSubmit={handleFormSubmit}
      isOpen={isOpen}
      onClose={onClose}
      children={
        <>
          <input
            type="text"
            className="form__input "
            id="title"
            name="name"
            placeholder="Title"
            minLength="1"
            maxLength="30"
            required
            onChange={handleCardTitleChange}
            value={cardTitle || ''}
          />
          <span className="title-input-error form__error-text " />
          <input
            type="URL"
            className="form__input"
            id="image-link"
            name="link"
            placeholder="Image link"
            required
            onChange={handleImageLinkChange}
            value={imageLink || ''}
            //ref={imageLinkRef}
          />
          <span className="image-link-input-error form__error-text" />
        </>
      }
    />
  );
}
