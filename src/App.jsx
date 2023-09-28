import { useState } from "react";
import { HomePage } from "./pages/HomePage"
import { ToastContainer } from "react-toastify";

import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';

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

  const removeFinance = (id, description) => {
    const newListFinances = listFinances.filter((finance) => {
      return finance.id !== id;
    });

    setListFinances(newListFinances);
    toast.success(`${description} excluido do resumo financeiro!`);

  }

  return (
    <>
      <HomePage removeFinance={removeFinance} listFinances={listFinances} addFinances={addFinances} />
      <ToastContainer />

    </>
  )
}

export default App
