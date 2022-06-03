import EditIcon from '../images/edit-avatar-logo.svg';
import AddSign from '../images/+.svg';
import React, {useEffect, useState} from 'react';
import {api} from '../utils/api';
import Card from './Card';

export default function Main({
  onEditProfileClick,
  onAddPlaceClick,
  onEditAvatarClick,
  onCardClick,
  onDeleteCardClick,
}) {
  const [userData, setUserData] = useState({});
  //const [userName, setUserName] = useState("");
  // const [userDescription, setUserDescription] = useState("");
  // const [userAvatar, setUserAvatar] = useState("");
  const [cards, setCards] = useState([]);

  useEffect(() => {
    api
      .getUserData()
      .then((data) => {
        //console.log(data);
        setUserData(data);
        //setUserName(data.name);
        // setUserDescription(data.about);
        // setUserAvatar(data.avatar);
      })
      .catch((err) => console.error(`Error while executing: ${err}`));
  }, []);
  useEffect(() => {
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
            <img
              className="profile__img"
              src={userData.avatar}
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
              <h1 className="profile__name">{userData.name}</h1>
              <button
                aria-label="edit"
                type="button"
                className="profile__button-name-edit"
                onClick={onEditProfileClick}
              />
              <p className="profile__about">{userData.about}</p>
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
                  onDeleteCardClick={onDeleteCardClick}
                />
              );
            })}
          </ul>
        </section>
      </main>
    </>
  );
}
