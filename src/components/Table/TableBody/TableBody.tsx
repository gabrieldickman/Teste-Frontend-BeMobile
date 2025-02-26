import formatData from "../../../utils/formatDate";
import formatPhone from "../../../utils/formatPhone";
import { Employee } from "../../../types/employee";

interface TableBodyProps {
  employees: Employee[]
}

const TableBody = ({ employees }: TableBodyProps) => {
  return (
    <tbody>
      {employees.map(({ id, name, job, admission_date, phone, image }) => (
        <tr key={id}>
          <td><img src={image} alt={`Foto de Perfil de ${name}`}/></td>
          <td>{name}</td>
          <td>{job}</td>
          <td>{formatData(admission_date)}</td>
          <td>{formatPhone(phone)}</td>
        </tr>
      ))}
    </tbody>
  );
};

export default TableBody;
