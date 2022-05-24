import ProfileImage from '../images/image_jc.jpg';
import EditIcon from '../images/edit-avatar-logo.svg';
import AddSign from '../images/+.svg';
import PopupWithForm from './PopupWithForm';
import React from'react';
import {api} from'../utils/api';

export default function Main( {
  onEditProfileClick, 
  onAddPlaceClick,
  onEditAvatarClick} )
  {
    const [userName, setUserName]= React.useState("");
    const [userDescription, setUserDescription] = React.useState("");
    const [userAvatar, setUserAvatar] = React.useState("");

    React.useEffect(()=>{
api.getAllData()
.then((data)=>{
  setUserName(data.name);
  setUserDescription(data.about);
  setUserAvatar(data.avatar);
}

)
    })
return (
  <>
<main className="content">
      <section className="profile">
        <div className ="profile__img-container">
        <img className="profile__img" src={userAvatar} alt="profile image" />
        <div className ="profile__img-edit-logo">
          <img className ="profile__img-icon" src={EditIcon} alt="edit avatar icon"
          onClick={onEditAvatarClick } />
        </div>
        </div>
        <div className="profile__info">
          <div className="profile__text">
            <h1 className="profile__name">{userName}</h1>
            <button aria-label="edit" type="button" className="profile__button-name-edit"
            onClick={onEditProfileClick }>
            </button>
            <p className="profile__about">{userDescription}</p>
          </div>
  
          <button aria-label="add" type="button" className="profile__button-add" onClick={onAddPlaceClick }>
            <img className="profile__add-img" src={AddSign} alt="add sidn" />
          </button>
        </div>
      </section>
      <section className="cards">
        <ul className="cards__container"></ul>
      </section>
    </main>
    
    </>
);
}
