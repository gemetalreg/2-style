import styles from "./Header.module.css";


function Header() {
    return <h1 className={styles["header"]}>
        <img src="/Bookmark.svg" alt="header-logo" className={styles["header-logo"]} />
        <div className={styles["links"]}>
            <a href="">Поиск фильмов</a>
            <a href="">Мои фильмы</a>
            <a href="">Войти <img src="/Login.svg" alt="login" /></a>
        </div>
    </h1>
}

export default Header;