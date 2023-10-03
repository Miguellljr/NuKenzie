import { Total } from "../Total";
import { FinanceCard } from "./FinanceCard";
import styles from "./style.module.scss";

export const FinanceList = ({ listCards, removeCard }) => {
  return (
    <>
      <section className={styles.financeList}>
        {listCards.length > 0 ? (
          <ul>
            
            <h2 className="title three">Resumo financeiro</h2>
            {listCards.map((card) => {
              const { description, message, category, id } = card;

              return (
                <FinanceCard
                  key={id}
                  id={id}
                  description={description}
                  message={message.toLocaleString("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  })}
                  category={category}
                  removeCard={removeCard}
                />
              );
            })}
          </ul>
        ) : (
          <p className="title two">Você ainda não possui nenhum lançamento</p>
        )}
      </section>
    </>
  );
};
