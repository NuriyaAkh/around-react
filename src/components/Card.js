export default function Card({card, onCardClick,onDeleteCardClick}) {
  
  function handleImageClick() {
    onCardClick(card);
  }
  function handleDeleteClick() {
    onDeleteCardClick();
  }

  return (
    <li className="card">
      <img
        className="card__img"
        src={card.link}
        alt={card.name}
        onClick={handleImageClick}
      />
      <button
        aria-label="delete button"
        className="card__delete"
        type="button"
        onClick ={handleDeleteClick}
      />
      <div className="card__info">
        <h2 className="card__title">{card.name}</h2>
        <div className="card__like">
          <button
            aria-label="love it"
            type="button"
            className="card__button"
          />
          <p className="card__likes-counter">{card.likes.length}</p>
        </div>
      </div>
    </li>
  );
}
