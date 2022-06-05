import React, {useEffect, useState} from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";
import "../index.css";
import {api} from '../utils/api';
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function App() {
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = useState(false);
  const [isConfirmationPopupOpen, setConfirmationPopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  const [currentUser,setCurrentUser] = useState({});
  const [cards, setCards] = useState([]);
 //get user data
  useEffect(() => {
    api
      .getUserData()
      .then((data) => {
        console.log(data);
        setCurrentUser(data);
        })
      .catch((err) => console.error(`Error while loading profile info: ${err}`));
  }, []);
  //get cards data
  useEffect(() => {
    api
      .getInitialCards()
      .then((data) => {
        setCards(data);
      })
      .catch((err) => console.error(`Error while executing cards data: ${err}`));
  }, []);

 
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
 function handleCardLike(card){
    //Check one more time if this card was already liked
  const isLiked = card.likes.some(user => user._id === currentUser._id);
  
  // Send a request to the API and getting the updated card data
  api
  .changeLikeCardStatus(card._id, !isLiked).then((newCard) => {
      setCards((state) => state.map((currentCard) => currentCard._id === card._id ? newCard : currentCard));
  })
  .catch((err) => console.error(`Error while executing: ${err}`));
 }
  function closeAllPopups() {
    setAddPlacePopupOpen(false);
    setEditAvatarPopupOpen(false);
    setEditProfilePopupOpen(false);
    setConfirmationPopupOpen(false);
    setSelectedCard(null);
  }
  return (

    <CurrentUserContext.Provider value ={currentUser}>
    <div className="page">
      <Header />
      <Main 
      onEditProfileClick={handleEditProfileClick} onAddPlaceClick={handleAddPlaceClick} 
      onEditAvatarClick={handleEditAvatarClick} onDeleteCardClick={handleDeleteClick} 
      onCardClick={handleImageClick} 
      onCardLike={handleCardLike} />
      cards={cards} 
      {/* ? */}
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
   </CurrentUserContext.Provider>
  );
}

export default App;
