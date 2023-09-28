import { useState } from 'react';
import { Input } from '../Input';
import styles from './style.module.scss';
import { Select } from '../Select';

export const FinanceForm = ({ addFinances }) => {
    const [description, setDescripion] = useState("");
    const [price, setPrice] = useState("");
    const [type, setType] = useState(""); // Estado para armazenar o tipo selecionado

    const handleSelectChange = (e) => {
        setType(e.target.value); // Atualiza o estado com o valor selecionado
    }

    const submit = (e) => {
        e.preventDefault();

        console.log(addFinances);
        // Passe o valor selecionado como argumento para addFinances
        addFinances(description, Number(price), type);

        // Restaurar os estados para vazios após o envio
        setDescripion("");
        setPrice("");
        setType("");
    }

    return (
        <form onSubmit={submit} className={styles.form}>
            <Input
                className={styles.inputOne}
                label="Descrição"
                name="description"
                type="text"
                placeholder="Digite aqui sua descrição"
                alert="Ex: Compra de Roupa"
                value={description}
                setValue={setDescripion}
            />

            <Input
                className={styles.inputOne}
                label="Valor (R$)"
                name="price"
                type="number"
                placeholder="1"
                value={price}
                setValue={setPrice}
            />

            {/* Adicione o evento onChange para capturar a seleção do usuário */}
            <Select
                className={styles.inputOne}
                label="Tipo de valor"
                name="type"
                value={type}
                onChange={handleSelectChange}
                options={[
                    { label: 'Entrada', value: 'entrada' },
                    { label: 'Saída', value: 'saida' },
                    // Adicione outras opções conforme necessário
                ]}
            />

            <button className={`${styles.button} btn`} type="submit">Inserir valor</button>
        </form>
    );
}
