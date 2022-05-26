import React from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";
import "../index.css";

function App() {
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = React.useState(false);
  const [isConfirmationPopupOpen, setConfirmationPopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState(null);

  function handleAddPlaceClick() {
    setAddPlacePopupOpen(true);
  }
  function handleEditAvatarClick() {
    setEditAvatarPopupOpen(true);
  }
  function handleEditProfileClick() {
    setEditProfilePopupOpen(true);
  }
  function handleImageClick(card) {
    setSelectedCard(card);
  }
  function handleDeleteClick() {
    setConfirmationPopupOpen(true);
  }
  function closeAllPopups() {
    setAddPlacePopupOpen(false);
    setEditAvatarPopupOpen(false);
    setEditProfilePopupOpen(false);
    setConfirmationPopupOpen(false);
    setSelectedCard(null);
  }
  return (
    <div className="page">
      <Header />
      <Main onEditProfileClick={handleEditProfileClick} onAddPlaceClick={handleAddPlaceClick} onEditAvatarClick={handleEditAvatarClick} onDeleteCardClick={handleDeleteClick} onCardClick={handleImageClick} />
      <Footer />

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
      <PopupWithForm
        title="New place"
        name="add-form"
        formId="img-add"
        buttonText="Create"
        children={
          <>
            <input type="text" className="form__input " id="title" name="name" placeholder="Title" minLength="1" maxLength="30" required />
            <span className="title-input-error form__error-text "/>
            <input type="URL" className="form__input" id="image-link" name="link" placeholder="Image link" required />
            <span className="image-link-input-error form__error-text"/>
          </>
        }
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
      />
      <PopupWithForm
        title="Change profile picture"
        name="avatar-form"
        children={
          <>
            <input type="URL" className="form__input" id="avatar-link" name="avatar" placeholder="New Image URL" required />
            <span className="avatar-link-input-error form__error-text"/>
          </>
        }
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
      />
      <PopupWithForm title="Are you sure?" name="confirm-form" buttonText="Yes" onClose={closeAllPopups} isOpen={isConfirmationPopupOpen} />
      <ImagePopup card={selectedCard} onClose={closeAllPopups} />
    </div>
  );
}

export default App;
