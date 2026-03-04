import styles from "./Card.module.css";



function Card({film}) {
  return (
<div className={styles["card"]}>
  <div className={styles["marker"]}><img src="/star.svg" alt="star" /><span>{film.choiceCount}</span></div>
  <img src={film.imgName} alt={film.imgAlt} className={styles["card-img-top"]}/>
  <div className={styles["card-body"]}>
    <h4 className={styles["card-text"]}><b>{film.cardName}</b></h4>
    <p className={styles["card-choice"]}>{film.cardChoice}</p>
  </div>
</div>
  );
}




export default Card;