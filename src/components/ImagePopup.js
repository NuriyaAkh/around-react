 export default function ImagePopup({
   isOpen,
   onClose
 }){
   return(
 <>
 <div className={`forms${isOpen ? 'forms_is-open' : ''}`}>
  <div className="forms__image-big">
   <button aria-label="close" type="button" className="forms__button-close" onClick={onClose}></button>
   <img className="forms__image" alt=" " src=" "/>
   <h3 className="forms__image-title"></h3>
 </div>
</div>
</> 
)}