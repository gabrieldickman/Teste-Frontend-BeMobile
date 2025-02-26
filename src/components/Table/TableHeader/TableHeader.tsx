import styles from "./TableHeader.module.css";

const TableHeader = () => {
  return (
    <thead className={styles.thead}>
      <tr>
        <th>FOTO</th>
        <th>NOME</th>
        <th>CARGO</th>
        <th>DATA DE ADMISSÃO</th>
        <th>TELEFONE</th>
      </tr>
    </thead>
  );
};

export default TableHeader;
