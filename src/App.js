import logo from './images/logo.svg';
//import './App.css';
import './index.css';

function App() {
  return (
    
    <body className="page">

    <header className="header">
      <img className="header__logo" src={logo} alt="logo Around US" />
    </header>
    <main className="content">
      <section className="profile">
        <div className ="profile__img-container">
        <img className="profile__img" src="<%=require('./images/image_jc.jpg')%>" alt="profile image" />
        <div className ="profile__img-edit-logo">
          <img className ="profile__img-icon" src="<%=require('./images/edit-avatar-logo.svg')%>" alt="edit avatar icon" />
        </div>
        </div>
        <div className="profile__info">
          <div className="profile__text">
            <h1 className="profile__name">Jacques Cousteau</h1>
            <button aria-label="edit" type="button" className="profile__button-name-edit">
            </button>
            <p className="profile__about">Explorer</p>
          </div>
  
          <button aria-label="add" type="button" className="profile__button-add">
            <img className="profile__add-img" src="<%=require('./images/+.svg')%>" alt="add sidn" />
          </button>
        </div>
      </section>
      <section className="cards">
        <ul className="cards__container"></ul>
      </section>
    </main>
    <footer className="footer">
      <p className="footer__text">© 2022 Around The U.S.</p>
    </footer>
  {/* <!-- Preview image popup --> */}
    <div className="forms" id="image-show">
      <div className="forms__image-big">
        <button aria-label="close" type="button" className="forms__button-close"></button>
        <img className="forms__image" alt=" " src=" "/>
        <h3 className="forms__image-title"></h3>
      </div>
    </div>
  {/* <!-- Profile info popup --> */}
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
    {/* <!-- Add new card popup--> */}
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
    {/* <!--Confirm popup  --> */}
    <div className="forms" id="confirm-popup">
      <div className="forms__container">
        <button aria-label="close" type="button" className="forms__button-close"></button>
        <form className="form" name="confirm-form" id="confirm-form" novalidate>
        <h3 className="forms__title">Are you sure?</h3>
        <button type="submit" className="form__button">Yes</button>
        </form>
      </div>
    </div>
    {/* <!-- Change profile picture popup --> */}
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
    </div>
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
