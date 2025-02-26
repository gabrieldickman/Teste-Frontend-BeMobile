import styles from "./TableHeader.module.css";

const TableHeader = () => {
  return (
    <thead className={styles.thead}>
      <tr className={styles.trow}>
        <th className={styles.tdata}>FOTO</th>
        <th className={styles.tdata}>NOME</th>
        <th className={styles.tdata}>CARGO</th>
        <th className={styles.tdata}>DATA DE ADMISSÃO</th>
        <th className={styles.tdata}>TELEFONE</th>
      </tr>
    </thead>
  );
};

export default TableHeader;
