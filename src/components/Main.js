import ProfileImage from '../images/image_jc.jpg';
import EditIcon from '../images/edit-avatar-logo.svg';
import AddSign from '../images/+.svg';
import PopupWithForm from './PopupWithForm';
export default function Main(){
  function handleAddPlaceClick() {
    document.querySelector("#img-add").classList.add("forms_is-open")
    }
    function handleEditAvatarClick() {
      document.querySelector("#update-avatar-popup").classList.add("forms_is-open") 
    }
    function handleEditProfileClick(){
      document.querySelector("#edit-profile").classList.add("forms_is-open") 
    }
return (
  <>
<main className="content">
      <section className="profile">
        <div className ="profile__img-container">
        <img className="profile__img" src={ProfileImage} alt="profile image" />
        <div className ="profile__img-edit-logo">
          <img className ="profile__img-icon" src={EditIcon} alt="edit avatar icon"
          onClick={handleEditAvatarClick} />
        </div>
        </div>
        <div className="profile__info">
          <div className="profile__text">
            <h1 className="profile__name">Jacques Cousteau</h1>
            <button aria-label="edit" type="button" className="profile__button-name-edit"
            onClick={handleEditProfileClick}>
            </button>
            <p className="profile__about">Explorer</p>
          </div>
  
          <button aria-label="add" type="button" className="profile__button-add" onClick={handleAddPlaceClick}>
            <img className="profile__add-img" src={AddSign} alt="add sidn" />
          </button>
        </div>
      </section>
      <section className="cards">
        <ul className="cards__container"></ul>
      </section>
    </main>
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
    isOpen = {handleEditProfileClick}
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
    isOpen={handleAddPlaceClick}
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
    isOpen={handleEditAvatarClick}
    />
     <PopupWithForm 
    title="Are you sure?"
    name ="confirm-form" 
    formId = "confirm-popup"
    buttonText='Yes'
    //isOpen={}
    />
    </>
);
}
