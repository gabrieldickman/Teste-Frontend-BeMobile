import TableBody from "./TableBody/TableBody";
import TableHeader from "./TableHeader/TableHeader";
import styles from "./DataTable.module.css";
import { Employee } from "../../types/employee";
import { useEffect, useState } from "react";
import axios from "axios";

const DataTable = () => {
  const [employees, setEmployees] = useState<Employee[]>([]);

  useEffect(() => {
    axios.get("http://localhost:3001/employees")
      .then((response)=> setEmployees(response.data))
      .catch((error) => console.log("Erro ao buscar funcionários", error));
  },[]);

  return (
    <table className={styles.table}>
      <TableHeader/>
      <TableBody employees={employees}/>
    </table>
  );
};

export default DataTable;
