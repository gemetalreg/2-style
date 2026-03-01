import "./Card.css";



function Card({film}) {
  return (
<div className="card">
  <div className="marker"><img src="/star.svg" alt="star" /><span>{film.choiceCount}</span></div>
  <img src={film.imgName} alt={film.imgAlt} className="card-img-top"/>
  <div className="card-body">
    <h4 className="card-text"><b>{film.cardName}</b></h4>
    <p className="card-choice">{film.cardChoice}</p>
  </div>
</div>
  );
}




export default Card;