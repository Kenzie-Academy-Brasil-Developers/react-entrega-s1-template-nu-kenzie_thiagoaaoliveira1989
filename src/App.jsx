import { useState } from "react";
import { HomePage } from "./pages/HomePage"


function App() {

  const [listFinances, setListFinances] = useState([]);

  const addFinances = (description, price, type) => {
    setListFinances([...listFinances, { description, price, type }]);
  }

  return (
    <>
      <HomePage listFinances={listFinances} addFinances={addFinances} />
    </>
  )
}

export default App
