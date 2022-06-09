export default function PopupWithForm({
  title,
  name,
  isOpen,
  onSubmit,
  buttonText,
  onClose,
  children,
}) {
  return (
    <div className={`forms ${isOpen ? 'forms_is-open' : ''}`}>
      <div className="forms__container">
        <button
          aria-label="close"
          type="button"
          className="forms__button-close"
          onClick={onClose}
        />
        <h3 className="forms__title">{title}</h3>
        <form 
        className="form" 
        name={name} 
        onSubmit={onSubmit}>
          {children}
          <button 
          type="submit" 
          className="form__button"
          noValidate>
            {buttonText}
          </button>
        </form>
      </div>
    </div>
  );
}
