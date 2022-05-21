import ProfileImage from '../images/image_jc.jpg';
import EditIcon from '../images/edit-avatar-logo.svg';
import AddSign from '../images/+.svg';
export default function Main(){
return (
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
);
}
function handleAddPlaceClick() {
document.querySelector("#img-add").classList.add("forms_is-open")
}
function handleEditAvatarClick() {
  document.querySelector("#update-avatar-popup").classList.add("forms_is-open") 
}
function handleEditProfileClick(){
  document.querySelector("#edit-profile").classList.add("forms_is-open") 
}