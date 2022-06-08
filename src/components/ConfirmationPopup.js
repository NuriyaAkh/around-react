import PopupWithForm from "./PopupWithForm";
import {api} from '../utils/api';
import { useState } from "react";
export default function ConfirmationPopup({isOpen, onUpdate,onClose}){
const [deleteCard, setDeleteCard]=useState(null);
  function handleCardDeleteSubmit(evt){
    evt.preventDefault(); 
    console.log("delete1");
    onUpdate({deleteCard})
    setDeleteCard(null);
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
