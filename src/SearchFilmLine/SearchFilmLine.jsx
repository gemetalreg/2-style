import styles from "./SearchFilmLine.module.css";


function SearchFilmLine({children}) {
  return (
    <div className={styles["line"]}>
        {children}
    </div>
    
  );
}

export default SearchFilmLine;