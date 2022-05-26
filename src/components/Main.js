import EditIcon from "../images/edit-avatar-logo.svg";
import AddSign from "../images/+.svg";
import React from "react";
import { api } from "../utils/api";
import Card from "./Card";

export default function Main({ onEditProfileClick, onAddPlaceClick, onEditAvatarClick, onCardClick }) {
  const [userName, setUserName] = React.useState("");
  const [userDescription, setUserDescription] = React.useState("");
  const [userAvatar, setUserAvatar] = React.useState("");
  const [cards, setCards] = React.useState([]);

  //Better to implement different logic in different effects: create two effects, receive user in one of them and receive cards in another.
  React.useEffect(() => {
    api.getUserData()
    .then((data) => {
      //console.log(data);
      setUserName(data.name);
      setUserDescription(data.about);
      setUserAvatar(data.avatar);
    })
    .catch((err) => console.error(`Error while executing: ${err}`));
  }, []);
  React.useEffect(() => {
    api
  .getInitialCards()
  .then((data) => {
    setCards(data);
  })
  .catch((err) => console.error(`Error while executing: ${err}`));
  }, []);
  
  return (
    <>
      <main className="content">
        <section className="profile">
          <div className="profile__img-container">
            <img className="profile__img" src={userAvatar} alt="profile image" />
            <div lassName="profile__img-edit-logo">
              <img className="profile__img-icon" src={EditIcon} alt="edit avatar icon" onClick={onEditAvatarClick} />
            </div>
          </div>
          <div className="profile__info">
            <div className="profile__text">
              <h1 className="profile__name">{userName}</h1>
              <button aria-label="edit" type="button" className="profile__button-name-edit" onClick={onEditProfileClick}/>
              <p className="profile__about">{userDescription}</p>
            </div>

            <button aria-label="add" type="button" className="profile__button-add" onClick={onAddPlaceClick}>
              <img className="profile__add-img" src={AddSign} alt="add sidn" />
            </button>
          </div>
        </section>
        <section className="cards">
          <ul className="cards__container">
            {cards.map((card) => {
              console.log(card);
              return <Card key={card._id} card={card} onCardClick={onCardClick} onDeleteCardClick ={onDeleteCardClick}/>;
            })}
          </ul>
        </section>
      </main>
    </>
  );
}
