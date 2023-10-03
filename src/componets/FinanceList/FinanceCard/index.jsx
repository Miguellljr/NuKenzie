import styles from "./style.module.scss";

export const FinanceCard = ({
  description,
  message,
  category,
  id,
  removeCard,
}) => {
  return (
    <>
      <li
        className={`${styles.card} ${
          category === "Entrada" ? styles.green : styles.gray
        }`}
      >
        <div>
          <h3 className="title three">{description}</h3>
          <span id="category" className="paragrath body">
            {category}
          </span>
        </div>
        <div>
          <p id="value" className="paragrath body">
            {message}
          </p>
          <button onClick={() => removeCard(id)}>Excluir</button>
        </div>
      </li>
    </>
  );
};
