import Logo from "../../assets/nu-kenzie.svg";
import styles from "./style.module.scss"

export const Header = () => {
    return (
        <header className={styles.header}>
            <div className="container">
                <img className={styles.logo} src={Logo} alt="logo" />
            </div>
        </header>
    )
} 