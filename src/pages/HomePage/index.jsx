import { FinanceForm } from "../../components/FinanceForm";
import { FinanceList } from "../../components/FinanceList";
import { Header } from "../../components/Header";
import { Total } from "../../components/Total";


export const HomePage = ({ listFinances, addFinances, removeFinance }) => {
    return (
        <>
            <Header />
            <main className="">
                <section className="container flex">
                    <div className="container__form-total">
                        <FinanceForm addFinances={addFinances} />
                        <Total listFinances={listFinances} />
                    </div>
                    <FinanceList removeFinance={removeFinance} listFinances={listFinances} />
                </section>
            </main>
        </>

    )
}