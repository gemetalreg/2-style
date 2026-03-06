import styles from "./Header.module.css";
import Button from "../button/Button";

function Header({loggedInProfiles, handleLogout}) {

    const isLoggedIn = loggedInProfiles && loggedInProfiles.length > 0;
    const userName = isLoggedIn ? loggedInProfiles[0].name : null;


    return <h1 className={styles["header"]}>
        <img src="/Bookmark.svg" alt="header-logo" className={styles["header-logo"]} />
        <div className={styles["links"]}>
            <a href="">Поиск фильмов</a>
            <a href="">Мои фильмы</a>
        {isLoggedIn ? (
          <span className={styles["links"]} style={{color: "#646cff"}}>
            {userName}
            <Button onClick={() => handleLogout(userName)} text="Выйти"/>
          </span>
        ) : (
          <a href="">Войти <img src="/Login.svg" alt="login" /></a>
        )}
        </div>
    </h1>
}

export default Header;