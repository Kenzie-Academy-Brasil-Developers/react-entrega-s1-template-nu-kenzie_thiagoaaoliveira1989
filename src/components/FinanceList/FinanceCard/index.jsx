import styles from "./style.module.scss";

export const FinanceCard = ({ removeFinance, id, description, price, type }) => {

    return (
        <>              
            <li key={id} className={type === "entrada" ? styles.flex : styles.disable}>
                <div>
                    <h3 className="title three"> {description} </h3>
                    <p className="title four">{type}</p>
                </div>
                <div className={styles.divValue}>
                    <p className="title four"> {price.toLocaleString("pt-br", { style: "currency", currency: "BRL" })} </p>
                    <button onClick={() => removeFinance(id, description)} className={styles.btnList}>Excluir</button>
                </div>
            </li>

        </>
    )
}