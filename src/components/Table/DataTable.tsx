import { useEffect, useState } from "react";
import axios from "axios";
import { Employee } from "../../types/employee";
import TableHeader from "./TableHeader/TableHeader";
import TableBody from "./TableBody/TableBody";
import styles from "./DataTable.module.css";

interface DataTableProps {
  searchTerm: string;
}

const DataTable = ({ searchTerm }: DataTableProps) => {
  const [employees, setEmployees] = useState<Employee[]>([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/employees")
      .then((response) => setEmployees(response.data))
      .catch((error) => console.log("Erro ao buscar funcionários", error));
  }, []);

  const filteredEmployees = employees.filter((employee) =>
    [employee.name, employee.job, employee.phone].some((field) =>
      field.toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  return (
    <table className={styles.table}>
      <TableHeader />
      <TableBody employees={filteredEmployees} />
    </table>
  );
};

export default DataTable;
