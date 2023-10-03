import { useState } from "react";
import styles from "./style.module.scss";
import { Input } from "./Input";
import { Select } from "./Select";

export const FinanceForm = ({ addCard }) => {
  const [description, setDescription] = useState("");
  const [message, setMessage] = useState(1);

  const [category, setCategory] = useState("Entrada");

  const submit = (e) => {
    e.preventDefault();

    if (description !== "" && message !== 0) {
      addCard(description, Number(message), category);

      setDescription("");
      setMessage("");
      setCategory("Entrada");
    }
  };

  return (
    <>
      <section className={styles.financeForm}>
        <form onSubmit={submit}>
          <Input
            label="Descrição"
            type="text"
            placeholder="Digite aqui sua descrição"
            id="description"
            value={description}
            setValue={setDescription}
          />
          <p className="paragrath body">Ex: Compra de roupas</p>

          <Input
            label="Valor(R$)"
            type="number"
            placeholder="1"
            id="message"
            value={message.toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })}
            setValue={setMessage}
          />

          <Select
            label="Tipo de valor"
            id="category"
            value={category}
            setValue={setCategory}
          >
            <option value="Entrada">Entrada</option>
            <option value="Despesa">Despesa</option>
          </Select>
          <button type="submit" className="btn">
            Inserir valor
          </button>
        </form>
      </section>
    </>
  );
};
