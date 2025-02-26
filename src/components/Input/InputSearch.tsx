import styles from "./InputSearch.module.css";

interface InputSearchProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
}

const InputSearch = ({ searchTerm, setSearchTerm }: InputSearchProps) => {
  return (
    <input
      className={styles.input}
      type="search"
      placeholder="Pesquisar"
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
    ></input>
  );
};

export default InputSearch;
