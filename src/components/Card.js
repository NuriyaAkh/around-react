import { CurrentUserContext } from '../contexts/CurrentUserContext';
import React, {useEffect, useState,useContext} from 'react';

export default function Card({card, onCardClick,onDeleteCardClick}) {
  
  function handleImageClick() {
    onCardClick(card);
  }
  function handleDeleteClick() {
    onDeleteCardClick();
  }
 const currentUser = React.useContext(CurrentUserContext);
// Checking if the current user is the owner of the current card
const isOwn = card.owner._id === currentUser._id;

// Creating a variable which you'll then set in `className` for the delete button
const cardDeleteButtonClassName = (
  `card__delete ${isOwn ? 'card__delete_visible' : 'card__delete_hidden'}`
);
// Check if the card was liked by the current user
const isLiked = card.likes.some(user => user._id === currentUser._id);

// Create a variable which you then set in `className` for the like button
const cardLikeButtonClassName = (`card__button ${isLiked &&`card__button_active`}`);
  return (
    <li className="card">
      <img
        className="card__img"
        src={card.link}
        alt={card.name}
        onClick={handleImageClick}
      />
      <button
        aria-label="delete button"
        className={cardDeleteButtonClassName}
        type="button"
        onClick ={handleDeleteClick}
      />
      <div className="card__info">
        <h2 className="card__title">{card.name}</h2>
        <div className="card__like">
          <button
            aria-label="love it"
            type="button"
            className={cardLikeButtonClassName}
          />
          <p className="card__likes-counter">{card.likes.length}</p>
        </div>
      </div>
    </li>
  );
}
