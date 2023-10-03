import { useState } from "react";
import { HomePage } from "./pages/HomePage";
import "./styles/index.scss";

function App() {
  const [listCards, setListCards] = useState([]);

  const addCard = (description, message, category) => {
    const id = crypto.randomUUID();
    const newCard = { description, message, category, id };

    setListCards([...listCards, newCard]);
  };

  const removeCard = (id) => {
    const listFiltered = listCards.filter((card) => {
      if(card.id !== id) {
        return card
      }
    })

    setListCards(listFiltered)
  }

  return (
    <>
      <HomePage addCard={addCard} listCards={listCards} removeCard={removeCard} />
    </>
  );
}

export default App;
