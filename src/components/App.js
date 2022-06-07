import React, {useEffect, useState} from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";
import "../index.css";
import {api} from '../utils/api';
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import EditProfilePopup from './EditProfilePopup';
import EditAvatarPopup from "./EditAvatarPopup";
import AddPlacePopup from './AddPlacePopup';

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
 function handleCardDelete(card){
   api.deleteCard(card._id)
     .then((res)=>{
       setCards(cards.filter((deletedCard)=> deletedCard._id !== card._id));
     })
     .catch((err) => console.error(`Error while executing: ${err}`));
   }
 function handleUpdateUser(userUpdate){
   api.editProfileInfo(userUpdate)
   .then((res)=>{
     setCurrentUser(res);
     closeAllPopups();
   })
   .catch((err) => console.error(`Error while executing: ${err}`));
 }
 function handleUpdateAvatar(avatarUpdate){
   api.
   editProfilePicture(avatarUpdate)
   .then((res) =>{
     setEditAvatarPopupOpen(res);
     closeAllPopups();
   })
   .catch((err) => console.error(`Error while executing: ${err}`));
 }
 function handleAddPlaceCard(newCard){
   api.
   addNewCard(newCard)
   .then((res)=>{
     setAddPlacePopupOpen(res);
     closeAllPopups();
   })
   .catch((err) => console.error(`Error while adding new card: ${err}`));
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
      onEditAvatarClick={handleEditAvatarClick} 
      onCardDelete={handleCardDelete}
      //onDeleteCardClick={handleDeleteClick} 
      onCardClick={handleImageClick} 
      onCardLike={handleCardLike}
      cards={cards}  />
      
      <Footer />

      <ImagePopup card={selectedCard} onClose={closeAllPopups} />

      <EditProfilePopup
        isOpen={isEditProfilePopupOpen}
        onUpdate={handleUpdateUser}
        onClose={closeAllPopups}
      />
      <EditAvatarPopup
        isOpen={isEditAvatarPopupOpen}
        onUpdate={handleUpdateAvatar}
        onClose={closeAllPopups}
      />
     <AddPlacePopup
      isOpen ={isAddPlacePopupOpen}
      onClose={closeAllPopups}
      onUpdate={handleAddPlaceCard}
     />
     
      <PopupWithForm title="Are you sure?" name="confirm-form" buttonText="Yes" onClose={closeAllPopups} isOpen={isConfirmationPopupOpen} />
      
   </div>
   </CurrentUserContext.Provider>
  );
}

export default App;
