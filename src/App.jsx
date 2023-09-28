import { useState } from "react";
import { HomePage } from "./pages/HomePage"

function App() {
  const [listFinances, setListFinances] = useState([]);
  const [nextId, setNextId] = useState(1);

  const addFinances = (description, price, type) => {

    const newItem = {
      id: nextId,
      description,
      price,
      type,
    };


    setListFinances([...listFinances, newItem]);
    setNextId(nextId + 1);
  }

  const removeFinance = (id) => {
    const newListFinances = listFinances.filter((finance) => {
      return finance.id !== id;
    });

    setListFinances(newListFinances);
  }

  return (
    <>
      <HomePage removeFinance={removeFinance} listFinances={listFinances} addFinances={addFinances} />
    </>
  )
}

export default App
