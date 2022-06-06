import EditIcon from '../images/edit-avatar-logo.svg';
import AddSign from '../images/+.svg';
import React, {useEffect, useState,useContext} from 'react';
import {api} from '../utils/api';
import Card from './Card';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

export default function Main({
  onEditProfileClick,
  onAddPlaceClick,
  onEditAvatarClick,
  onCardClick,
  onCardDelete,
  onCardLike,
  cards
}) {
  const currentUser = useContext(CurrentUserContext);
   //const [cards, setCards] = useState([]);
 

//  function handleCardLike(card) {
//   // Check one more time if this card was already liked
//   const isLiked = card.likes.some(user => user._id === currentUser._id);
  
//   // Send a request to the API and getting the updated card data
//   api.changeLikeCardStatus(card._id, !isLiked).then((newCard) => {
//       setCards((state) => state.map((currentCard) => currentCard._id === card._id ? newCard : currentCard));
//   })
//   .catch((err) => console.error(`Error while executing: ${err}`));
// }

  // useEffect(() => {
  //   api
  //     .getInitialCards()
  //     .then((data) => {
  //       setCards(data);
  //     })
  //     .catch((err) => console.error(`Error while executing: ${err}`));
  // }, []);


  return (
    <>
      <main className="content">
        <section className="profile">
          <div className="profile__img-container">
            <img
              className="profile__img"
              src={currentUser.avatar}
              alt="profile image"
            />
            <div className="profile__img-edit-logo">
              <img
                className="profile__img-icon"
                src={EditIcon}
                alt="edit avatar icon"
                onClick={onEditAvatarClick}
              />
            </div>
          </div>
          <div className="profile__info">
            <div className="profile__text">
              <h1 className="profile__name">{currentUser.name}</h1>
              <button
                aria-label="edit profile"
                type="button"
                className="profile__button-name-edit"
                onClick={onEditProfileClick}
              />
              <p className="profile__about">{currentUser.about}</p>
            </div>

            <button
              aria-label="add"
              type="button"
              className="profile__button-add"
              onClick={onAddPlaceClick}
            >
              <img className="profile__add-img" src={AddSign} alt="add sidn" />
            </button>
          </div>
        </section>
        <section className="cards">
          <ul className="cards__container">
            {cards.map((card) => {
              //console.log(card);
              return (
                <Card
                  key={card._id}
                  card={card}
                  onCardClick={onCardClick}
                  onCardDelete={onCardDelete}
                  onCardLike={onCardLike}
                />
              );
            })}
          </ul>
        </section>
      </main>
    </>
  );
}
