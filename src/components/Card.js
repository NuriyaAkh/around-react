export default function Card (){

  return(
    <li className="card">
    <img class="card__img" src={card.link} alt={card.name}/>
    <button aria-label="delete button" className="card__delete" type="button"></button>
    <div className="card__info">
      <h2 className="card__title">{card.name}</h2>
      <div className="card__like">
      <button aria-label="love it" type="button" className="card__button"></button>
      <p class ="card__likes-counter">{card.likes.lenght}</p>
      </div>
    </div>
  </li>
  )
}