import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from'./Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup'
import '../index.css';

function App() {
  const [isEditProfilePopupOpen, setEditProfilePopupOpen]= React.useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen]= React.useState(false);
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen]= React.useState(false);
  const [isConfirmationPopupOpen, setConfirmationPopupOpen] = React.useState(false);
  const [isShowImagePopupOpen, setShowImagePopupOpen] = React.useState(false);
  function handleAddPlaceClick() {
    setAddPlacePopupOpen(true);
    }
    function handleEditAvatarClick() {
      setEditAvatarPopupOpen(true);
    }
    function handleEditProfileClick(){
      setEditProfilePopupOpen(true); 
    }
    function handleImageClick(){
      setShowImagePopupOpen(true);
    }
    function handleDeleteClick(){
      setConfirmationPopupOpen(true);
    }
    function closeAllPopups(){
      setAddPlacePopupOpen(false);
      setEditAvatarPopupOpen(false);
      setEditProfilePopupOpen(false);
      setShowImagePopupOpen(false);

    }
  return (
    
    <body className="page">

    <Header/>
    <Main
     onEditProfileClick = {handleEditProfileClick}
     onAddPlaceClick = {handleAddPlaceClick}
     onEditAvatarClick = {handleEditAvatarClick}
     //onCardClick = {}
     />
    <Footer/>

    <PopupWithForm 
    title="Edit Profile"
    name ="edit-form"
    formId = "edit-profile"
    children={
      <>
      <input type="text" className="form__input" id="username" name="username" placeholder="Name" required minlength="2"
      maxlength="40" />
    <span className="username-input-error form__error-text"></span>
    <input type="text" className="form__input" id="about" name="about" placeholder="About Me" required minlength="2"
      maxlength="200" />
    <span className="about-input-error form__error-text "></span>
    </>
    }
    isOpen = {isEditProfilePopupOpen}
    onClose ={closeAllPopups}
    />
     <PopupWithForm 
    title="New place"
    name ="add-form" 
    formId = "img-add"
    buttonText='Create'
    children={
      <>
       <input type="text" className="form__input " id="title" name="name" placeholder="Title" minlength="1" maxlength="30"
            required />
          <span className="title-input-error form__error-text "></span>
          <input type="URL" className="form__input" id="image-link" name="link" placeholder="Image link" required />
          <span className="image-link-input-error form__error-text"></span>
    </>
    }
    isOpen={isAddPlacePopupOpen}
    onClose ={closeAllPopups}
    />
     <PopupWithForm 
    title="Change profile picture"
    name ="avatar-form"
    formId = "update-avatar-popup"
    children={
      <>
       <input type="URL" className="form__input" id="avatar-link" name="avatar" placeholder="New Image URL" required />
          <span className="avatar-link-input-error form__error-text"></span>
    </>
    }
    isOpen={isEditAvatarPopupOpen}
    onClose ={closeAllPopups}
    />
     <PopupWithForm 
    title="Are you sure?"
    name ="confirm-form" 
    formId = "confirm-popup"
    buttonText='Yes'
    onClose ={closeAllPopups}
    isOpen={isConfirmationPopupOpen}
    />
    < ImagePopup 
    isOpen ={isShowImagePopupOpen}
    onClose ={closeAllPopups} />

  {/* <!-- Preview image popup --> */}
    <div className="forms" id="image-show">
      <div className="forms__image-big">
        <button aria-label="close" type="button" className="forms__button-close"></button>
        <img className="forms__image" alt=" " src=" "/>
        <h3 className="forms__image-title"></h3>
      </div>
    </div>
  {/* <!-- Profile info popup --> 
    <div className="forms" id="edit-profile">
      <div className="forms__container">
        <button aria-label="close" type="button" className="forms__button-close"></button>
        <h3 className="forms__title">Edit profile</h3>
        <form className="form" name="edit-form" id="edit-form" novalidate>
          <input type="text" className="form__input" id="username" name="username" placeholder="Name" required minlength="2"
            maxlength="40" />
          <span className="username-input-error form__error-text"></span>
          <input type="text" className="form__input" id="about" name="about" placeholder="About Me" required minlength="2"
            maxlength="200" />
          <span className="about-input-error form__error-text "></span>
          <button type="submit" className="form__button">Save</button>
        </form>
      </div>
    </div>
    {/* <!-- Add new card popup--> 
    <div className="forms" id="img-add">
      <div className="forms__container">
        <button aria-label="close" type="button" className="forms__button-close"></button>
        <h3 className="forms__title">New place</h3>
        <form className="form" name="add-form" id="add-form" novalidate>
          <input type="text" className="form__input " id="title" name="name" placeholder="Title" minlength="1" maxlength="30"
            required />
          <span className="title-input-error form__error-text "></span>
          <input type="URL" className="form__input" id="image-link" name="link" placeholder="Image link" required />
          <span className="image-link-input-error form__error-text"></span>
          <button type="submit" className="form__button" disabled>Create</button>
        </form>
      </div>
    </div>
    {/* <!--Confirm popup  --> 
    <div className="forms" id="confirm-popup">
      <div className="forms__container">
        <button aria-label="close" type="button" className="forms__button-close"></button>
        <form className="form" name="confirm-form" id="confirm-form" novalidate>
        <h3 className="forms__title">Are you sure?</h3>
        <button type="submit" className="form__button">Yes</button>
        </form>
      </div>
    </div>
    {/* <!-- Change profile picture popup --> 
    <div className="forms" id="update-avatar-popup">
      <div className="forms__container">
        <button aria-label="close" type="button" className="forms__button-close"></button>
        <form className="form" name="avatar-form" id="avatar-form" novalidate>
        <h3 className="forms__title">Change profile picture</h3>
        <input type="URL" className="form__input" id="avatar-link" name="avatar" placeholder="New Image URL" required />
          <span className="avatar-link-input-error form__error-text"></span>
        <button type="submit" className="form__button">Save</button>
      </form>
      </div>
    </div>*/}
    <template id="card">
      <li className="card">
        <img className="card__img" src=" " alt=""/>
        <button aria-label="delete button" className="card__delete" type="button"></button>
        <div className="card__info">
          <h2 className="card__title"></h2>
          <div className="card__like">
          <button aria-label="love it" type="button" className="card__button"></button>
          <p className ="card__likes-counter"></p>
          </div>
        </div>
      </li>
    </template>
   
  
  </body>
    
  );
}

export default App;
