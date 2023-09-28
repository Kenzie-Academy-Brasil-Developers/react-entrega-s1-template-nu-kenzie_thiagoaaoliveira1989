import styles from "./style.module.scss";

export const FinanceCard = ({description, price, type}) => {
    
    console.log("--description", description);
    console.log("--price", price);
    console.log("--type", type);

    return (
        <>

        <li key={description} className={styles.flex}>
            <div>
                <h3 className="title three"> {description} </h3>
                <p className="title four">{type}</p>
            </div>
            <div className={styles.divValue}>
                <p className="title four"> {price.toLocaleString("pt-br", { style: "currency", currency: "BRL" })} </p>
                <button className={styles.btnList}>Excluir</button>
            </div>
        </li>

        </>
    )
}