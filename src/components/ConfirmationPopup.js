import PopupWithForm from "./PopupWithForm";
import { useState } from "react";

export default function ConfirmationPopup({isOpen,onUpdate, onClose, card}){

  function handleCardDeleteSubmit(evt){
    evt.preventDefault(); 
    console.log("yes to delete");
    onUpdate(card);
    
  }

return (
<PopupWithForm 
title="Are you sure?" 
name="confirm-form" 
buttonText="Yes" 
onClose={onClose} 
isOpen={isOpen}
onSubmit ={handleCardDeleteSubmit} />
)
}
