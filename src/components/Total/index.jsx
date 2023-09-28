import styles from "./style.module.scss";

export const Total = ({ listFinances }) => {


    const valorEntrada = listFinances.filter((finance)=>{
        return finance.type === 'entrada';
    })

    console.log(valorEntrada);

    const valorTotalEntrada = valorEntrada.reduce((total, finance) => {
        return total + finance.price
    }, 0)



    const valorSaida = listFinances.filter((finance)=>{
        return finance.type === 'saida';
    })

    const valorTotalSaida = valorSaida.reduce((total, finance) => {
        return total + finance.price
    }, 0)


    const valorTotal = valorTotalEntrada - valorTotalSaida;

    return (
        <div className={styles.total}>
            <div >
                <h3 className="title three">Valor Total:</h3>
                <p className="title four">O valor se refere ao saldo</p>
            </div>
            <h2 className="title two primary">{valorTotal.toLocaleString('pt-BR', { style: "currency", currency: "BRL" })}  </h2>
        </div>
    )
}