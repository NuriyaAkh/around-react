import PopupWithForm from "./PopupWithForm";
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import { useEffect, useState,useContext } from "react";
export default function EditProfilePopup({ isOpen,onUpdate, onClose})

{
  const [name,setName]= useState("");
  const [description, setDescription]= useState("");
  const currentUser = useContext(CurrentUserContext);
  useEffect(()=>{
    if(currentUser){
      setName(currentUser.name);
      setDescription(currentUser.about);
    }},
    [currentUser]);

  function handleNameChange(e){
    setName(e.target.value);
  }
  function handleDescriptionChange(e){
   setDescription(e.target.value);
  }
  function handleFormSubmit(evt){
    evt.preventDefault();
    onUpdate({
    name:name,
    about:description});
  }
  
return (
 
<PopupWithForm
        title="Edit Profile"
        name="edit-form"
        formId="edit-profile"
        onSubmit={handleFormSubmit}
        isOpen={isOpen}
        onClose={onClose}
        children={
          <>
            <input 
            type="text" 
            className="form__input" 
            id="username" name="username" placeholder="Name" required minLength="2" 
            maxLength="40" 
            value={name||""}
            onChange={handleNameChange}
            />
            <span className="username-input-error form__error-text"/>
            <input 
            type="text" 
            className="form__input" 
            id="about" 
            name="about" 
            placeholder="About Me" required minLength="2" 
            maxLength="200" 
            value={description||""}
            onChange={handleDescriptionChange}
            />
            <span className="about-input-error form__error-text "/>
          </>
        }
        
      />
)
 }
