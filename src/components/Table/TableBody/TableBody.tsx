import formatData from "../../../utils/formatDate";
import formatPhone from "../../../utils/formatPhone";
import { Employee } from "../../../types/employee";
import styles from "./TableBody.module.css";

interface TableBodyProps {
  employees: Employee[];
}

const TableBody = ({ employees }: TableBodyProps) => {
  return (
    <tbody className={styles.tbody}>
      {employees.length > 0 ? (
        employees.map(({ id, name, job, admission_date, phone, image }) => (
          <tr key={id} className={styles.trow}>
            <td className={styles.tdata}>
              <img
                src={image}
                alt={`Foto de Perfil de ${name}`}
                className={styles.image}
              />
            </td>
            <td className={styles.tdata}>{name}</td>
            <td className={styles.tdata}>{job}</td>
            <td className={styles.tdata}>{formatData(admission_date)}</td>
            <td className={styles.tdata}>{formatPhone(phone)}</td>
          </tr>
        ))
      ) : (
        <tr>
          <td className={styles.tdata} colSpan={5}>Nenhum funcionário encontrado</td>
        </tr>
      )}
    </tbody>
  );
};

export default TableBody;
