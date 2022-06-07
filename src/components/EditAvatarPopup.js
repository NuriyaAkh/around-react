import PopupWithForm from "./PopupWithForm";
// import { CurrentUserContext } from '../contexts/CurrentUserContext';
import {useRef } from "react";
export default function EditAvatarPopup({isOpen, onUpdate,onClose}){
  // const [avatar,setAvatar]= useState("");
  // const currentUser = useContext(CurrentUserContext);
  const avatarRef= useRef();

  // useEffect(()=>{
  //   if(currentUser){
  //     setAvatar(currentUser.avatar);
  //   }
  // }, [currentUser]);
  // function handleAvatarChange(e){
  //   setAvatar(e.target.value);
  // }
  function handleFormSubmit(evt){
    evt.preventDefault();
    onUpdate({
      avatar: avatarRef.current.value
    });
  }
  return(
<PopupWithForm
        title="Change profile picture"
        name="avatar-form"
        onSubmit={handleFormSubmit}
        isOpen={isOpen}
        onClose={onClose}
        children={
          <>
            <input 
            type="URL" 
            className="form__input" id="avatar-link" 
            name="avatar" 
            placeholder="New Image URL" 
            required 
            //onChange={handleAvatarChange}
            ref= {avatarRef}
            />
            <span className="avatar-link-input-error form__error-text"/>
          </>
        }
        
      />
  )
}