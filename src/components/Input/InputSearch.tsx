import styles from "./InputSearch.module.css";

function InputSearch() {
  return (
    <input
      className={styles.input}
      type="search"
      placeholder="Pesquisar"
    ></input>
  );
}

export default InputSearch;
