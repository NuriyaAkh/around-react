import React, {useEffect, useState} from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';

import ImagePopup from './ImagePopup';
import '../index.css';
import api from '../utils/api';
import {CurrentUserContext} from '../contexts/CurrentUserContext';
import EditProfilePopup from './EditProfilePopup';
import EditAvatarPopup from './EditAvatarPopup';
import AddPlacePopup from './AddPlacePopup';
import ConfirmationPopup from './ConfirmationPopup';

function App() {
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = useState(false);
  const [isConfirmationPopupOpen, setConfirmationPopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  const [currentUser, setCurrentUser] = useState({});
  const [cards, setCards] = useState([]);
  const [toDeleteCard, setToDeleteCard] = useState(null);
  const [isLoading, setIsLoading] = React.useState(false);
  //get user data
  useEffect(() => {
    api
      .getUserData()
      .then((data) => {
        // console.log(data);
        setCurrentUser(data);
      })
      .catch((err) =>
        console.error(`Error while loading profile info: ${err}`)
      );
  }, []);
  //get cards data
  useEffect(() => {
    api
      .getInitialCards()
      .then((data) => {
        setCards(data);
      })
      .catch((err) =>
        console.error(`Error while executing cards data: ${err}`)
      );
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
  function handleDeleteClick(card) {
    console.log('delete click');
    console.log(card._id);
    setConfirmationPopupOpen(true);
    setToDeleteCard(card);
  }
  function handleCardLike(card) {
    //Check one more time if this card was already liked
    const isLiked = card.likes.some((user) => user._id === currentUser._id);

    // Send a request to the API and getting the updated card data
    api
      .changeLikeCardStatus(card._id, !isLiked)
      .then((newCard) => {
        setCards((state) =>
          state.map((currentCard) =>
            currentCard._id === card._id ? newCard : currentCard
          )
        );
      })
      .catch((err) => console.error(`Error while executing: ${err}`));
  }
  function handleCardDelete(card) {
    console.log('card deleted');
    setIsLoading(true);
    api
      .deleteCard(card._id)

      .then(() => {
        setCards(cards.filter((deletedCard) => deletedCard._id !== card._id));
        closeAllPopups();
      })
      .catch((err) => console.error(`Error while deleting: ${err}`))
      .finally(() => {
        setIsLoading(false);
      });
  }
  function handleUpdateUser(userUpdate) {
    setIsLoading(true);
    api
      .editProfileInfo(userUpdate)
      .then((res) => {
        setCurrentUser(res);
        closeAllPopups();
      })
      .catch((err) => console.error(`Error while executing: ${err}`))
      .finally(() => {
        setIsLoading(false);
      });
  }
  function handleUpdateAvatar(avatarUpdate) {
    setIsLoading(true);
    api
      .editProfilePicture(avatarUpdate)
      .then((res) => {
        setCurrentUser(res);
        closeAllPopups();
      })
      .catch((err) => console.error(`Error while executing: ${err}`))
      .finally(() => {
        setIsLoading(false);
      });
  }
  function handleAddPlaceCard(newCard) {
    setIsLoading(true);
    api
      .addNewCard(newCard)
      .then((newCard) => {
        setCards([newCard, ...cards]);
        closeAllPopups();
      })
      .catch((err) => console.error(`Error while adding new card: ${err}`))
      .finally(() => {
        setIsLoading(false);
      });
  }
  function closeAllPopups() {
    setAddPlacePopupOpen(false);
    setEditAvatarPopupOpen(false);
    setEditProfilePopupOpen(false);
    setConfirmationPopupOpen(false);
    setSelectedCard(null);
  }
  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <Header />
        <Main
          onEditProfileClick={handleEditProfileClick}
          onAddPlaceClick={handleAddPlaceClick}
          onEditAvatarClick={handleEditAvatarClick}
          onCardDelete={handleDeleteClick}
          onCardClick={handleImageClick}
          onCardLike={handleCardLike}
          cards={cards}
        />
        <Footer />

        <ImagePopup card={selectedCard} onClose={closeAllPopups} />
        <EditProfilePopup
          isOpen={isEditProfilePopupOpen}
          onUpdate={handleUpdateUser}
          onClose={closeAllPopups}
          buttonText={isLoading ? 'Saving...' : 'Save'}
          
        />
        <EditAvatarPopup
          isOpen={isEditAvatarPopupOpen}
          onUpdate={handleUpdateAvatar}
          onClose={closeAllPopups}
          buttonText={isLoading ? 'Saving...' : 'Save'}
        />
        <AddPlacePopup
          isOpen={isAddPlacePopupOpen}
          onUpdate={handleAddPlaceCard}
          onClose={closeAllPopups}
          buttonText={isLoading ? 'Creating...' : 'Create'}
        />
        <ConfirmationPopup
          isOpen={isConfirmationPopupOpen}
          onUpdate={handleCardDelete}
          onClose={closeAllPopups}
          card={toDeleteCard}
          buttonText={isLoading ? 'Deleting...' : 'Yes'}
        />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
