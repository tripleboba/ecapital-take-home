import React from 'react'
import { useStateValue } from '../providers/StateProvider';
import CurrencyFormat from 'react-currency-format';

function Employee(props) {
  const { id, firstName, lastName, salary } = props;
  const [{ employeesList }, dispatch] = useStateValue();
  console.log("current employeesList from Employee.js: ", employeesList);

  // button handlers
  const editEmployee = (e) => {
    e.preventDefault();
    console.log(id);
  }

  const deleteEmployee = (e) => {
    e.preventDefault();
    dispatch({
      type: 'DELETE_EMPLOYEE',
      id: id,
    })
  }
  return (
    <tr>
      <td>{firstName}</td>
      <td>{lastName}</td>
      <td>
        <CurrencyFormat
          decimalScale={2}
          value={salary}
          displayType={"text"}
          thousandSeparator={true}
          prefix={"$"}
        />
      </td>
      <td>
        <button onClick={editEmployee}>edit</button>
        <button onClick={deleteEmployee}>delete</button>
      </td>
    </tr>
  )
}

export default Employee