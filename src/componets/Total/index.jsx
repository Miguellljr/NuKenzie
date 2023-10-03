import styles from "./style.module.scss";

export const Total = ({ listCards }) => {
  const totalValue = listCards.reduce((prevValue, card) => {
    if(card.category === 'Despesa'){
      return prevValue - Number(card.message) ;
    }
    return prevValue + Number(card.message) ;
  }, 0);

  return (
    <>
      <section className={styles.total}>
        <h2 className="title three">Valor Total:</h2>
        <span className="title three">
          {totalValue.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
        </span>
        <p className="paragrath body">O valor se refere ao saldo</p>
      </section>
    </>
  );
};
