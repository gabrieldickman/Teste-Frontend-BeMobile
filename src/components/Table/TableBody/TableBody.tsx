import { useState } from "react";
import formatData from "../../../utils/formatDate";
import formatPhone from "../../../utils/formatPhone";
import { Employee } from "../../../types/employee";
import styles from "./TableBody.module.css";

interface TableBodyProps {
  employees: Employee[];
}

const TableBody = ({ employees }: TableBodyProps) => {
  const [openDropdown, setOpenDropdown] = useState<{ [key: number]: boolean }>({});

  const toggleDropdown = (id: number) => {
    setOpenDropdown((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <tbody className={styles.tbody}>
      {employees.length > 0 ? (
        employees.map(({ id, name, job, admission_date, phone, image }) => (
          <>
            <tr key={id} className={styles.trow}>
              <td className={styles.tdata}>
                <img src={image} alt={`Foto de ${name}`} className={styles.image} />
              </td>
              <td className={styles.tdata}>{name}</td>
              <td className={`${styles.tdata} ${styles.mobileHide}`}>{job}</td>
              <td className={`${styles.tdata} ${styles.mobileHide}`}>
                {formatData(admission_date)}
              </td>
              <td className={`${styles.tdata} ${styles.mobileHide}`}>
                {formatPhone(phone)}
              </td>
              <td className={styles.tdata}>
                <button
                  className={styles.dropdownBtn}
                  onClick={() => toggleDropdown(id)}
                >
                  {openDropdown[id] ? "▲" : "▼"}
                </button>
              </td>
            </tr>
            {openDropdown[id] && (
              <tr className={styles.dropdownRow}>
                <td colSpan={6} className={styles.dropdownContent}>
                  <p><strong>Cargo </strong> {job}</p>
                  <hr />
                  <p><strong>Data de Admissão </strong> {formatData(admission_date)}</p>
                  <hr />
                  <p><strong>Telefone </strong> {formatPhone(phone)}</p>
                  <hr />
                </td>
              </tr>
            )}
          </>
        ))
      ) : (
        <tr>
          <td className={styles.tdata} colSpan={6}>
            Nenhum funcionário encontrado
          </td>
        </tr>
      )}
    </tbody>
  );
};

export default TableBody;
