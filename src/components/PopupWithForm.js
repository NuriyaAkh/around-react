import React from "react";
export default function PopupWithForm({ title, name, isOpen, buttonText = "Save", onClose, children }) {
  return (
    <div className={`forms ${isOpen ? "forms_is-open" : ""}`}>
      <div className="forms__container">
        <button aria-label="close" type="button" className="forms__button-close" onClick={onClose}></button>
        <h3 className="forms__title">{title}</h3>
        <form className="form" name={name} noValidate>
          {children}
          <button type="submit" className="form__button">
            {buttonText}
          </button>
        </form>
      </div>
    </div>
  );
}
