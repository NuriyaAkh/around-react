import PopupWithForm from './PopupWithForm';

export default function ConfirmationPopup({
  isOpen,
  onUpdate,
  onClose,
  card,
  buttonText,
}) {
  function handleCardDeleteSubmit(evt) {
    evt.preventDefault();
    console.log('yes to delete');
    onUpdate(card);
  }

  return (
    <PopupWithForm
      title="Are you sure?"
      name="confirm-form"
      buttonText={buttonText}
      onClose={onClose}
      isOpen={isOpen}
      onSubmit={handleCardDeleteSubmit}
    />
  );
}
<div class="forms" id="confirm-popup">
  <div class="forms__container">
    <button
      aria-label="close"
      type="button"
      class="forms__button-close"
    ></button>
    <form class="form" name="confirm-form" id="confirm-form" novalidate>
      <h3 class="forms__title">Are you sure?</h3>
      <button type="submit" class="form__button">
        Yes
      </button>
    </form>
  </div>
</div>;
