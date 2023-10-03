import { DefaultTemplate } from "../../componets/DefaultTemplate";
import { Total } from "../../componets/Total";
import { FinanceForm } from "../../componets/FinanceForm";
import { FinanceList } from "../../componets/FinanceList";

export const HomePage = ({ addCard, listCards, removeCard }) => {
  return (
    <>
      <DefaultTemplate>
        <div>
          <FinanceForm addCard={addCard} />
          {listCards.length > 0 ? <Total listCards={listCards} /> : null}
        </div>
        <FinanceList listCards={listCards} removeCard={removeCard} />
      </DefaultTemplate>
    </>
  );
};
