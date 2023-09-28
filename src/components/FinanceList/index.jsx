import { FinanceCard } from "./FinanceCard";
import styles from "./style.module.scss";

export const FinanceList = ({ listFinances, removeFinance }) => {
    return (
        <div className={styles.listGroup}>
            <h3 className="title three">Resumo Financeiro</h3>
            <ul className={styles.list}>



                {listFinances.length === 0 ? (
                    <p className="title two">Você ainda não possui nenhum lançamento</p>
                ) : (
                    listFinances.map((finances) => {
                        const { id, description, price, type } = finances;


                        return <FinanceCard
                            removeFinance={removeFinance}
                            id={id}
                            description={description}
                            price={price}
                            type={type}
                            className={styles.flex} />
                    })
                )}

            </ul>
        </div>
    )
}