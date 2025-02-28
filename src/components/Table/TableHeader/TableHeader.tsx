import styles from "./TableHeader.module.css";

const TableHeader = () => {
  return (
    <thead className={styles.thead}>
      <tr className={styles.trow}>
        <th className={styles.tdata}>FOTO</th>
        <th className={styles.tdata}>NOME</th>
        <th className={`${styles.tdata} ${styles.mobileHide}`}>CARGO</th>
        <th className={`${styles.tdata} ${styles.mobileHide}`}>DATA DE ADMISSÃO</th>
        <th className={`${styles.tdata} ${styles.mobileHide}`}>TELEFONE</th>
        <th className={styles.tdata}>
          <span className={styles.dot}></span>
        </th>
      </tr>
    </thead>
  );
};

export default TableHeader;
