import { FinanceCard } from "./FinanceCard"
import styles from "./style.module.scss";

export const FinanceList = ({ listFinances }) => {
    console.log(listFinances);
    return (
        <div className={styles.listGroup}>
            <h3 className="title three">Resumo Financeiro</h3>
            <ul className={styles.list}>

                {
                   

                    listFinances.map((finances) => {
                        const { description, price, type } = finances;

                        
                        return <FinanceCard
                            description={description}
                            price={price}
                            type={type}
                            className={styles.flex} />
                    })
                }

            </ul>
        </div>
    )
}