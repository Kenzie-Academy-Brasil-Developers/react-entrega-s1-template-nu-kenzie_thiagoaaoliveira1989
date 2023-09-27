import Logo from "../../assets/nu-kenzie.svg";
import styles from "./style.module.scss"

export const Header = () => {
    return (
        <div className={styles.header}>
            <div className={styles.divLogo}>
                <img  className={styles.logo} src={Logo} alt="logo" />
            </div>
        </div>
    )
} 