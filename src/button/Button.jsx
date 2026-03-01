import styles from  "./Button.module.css";


function Button() {
    return <button className={styles["button"]}> onClick={(e) => {e}}>Искать</button>
}

export default Button;