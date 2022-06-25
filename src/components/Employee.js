import React, { Fragment, useState } from 'react'
import { useStateValue } from '../providers/StateProvider';
import InlineForm from './InlineForm';
import CurrencyFormat from 'react-currency-format';


function Employee(props) {
  const { id, ...employee} = props;

  const [{ employeesList }, dispatch] = useStateValue();
  console.log("current employeesList from Employee.js: ", employeesList);

  const [trigger, setTrigger] = useState(false);
  // const [currEmployee, setCurrEmpolyee] = useState(employeesList[id]);

  // button handlers
  const editEmployee = (e) => {
    e.preventDefault();
    console.log("edit clicked index-id in Employee.js:", id);
    setTrigger(true);

    // // get the value in table row
    // let tr = document.getElementsByTagName("tr")[id + 1];
    // console.log("tr: ", tr);
    // let td = tr.getElementsByTagName("td")[0];  // firstName
    // let td_text = td.innerHTML;
    // console.log("td value:", td_text)
  }

  const deleteEmployee = (e) => {
    e.preventDefault();
    dispatch({
      type: 'DELETE_EMPLOYEE',
      id: id,
    })
    setTrigger(false);
  }
  return (
    <Fragment>

      <tr>
        <td>{employee.firstName}</td>
        <td>{employee.lastName}</td>
        <td>
          <CurrencyFormat
            decimalScale={2}
            value={employee.salary}
            displayType={"text"}
            thousandSeparator={true}
            prefix={"$"}
          />
        </td>
        <td>
          <button
          onClick={editEmployee}>edit</button>
          <button onClick={deleteEmployee}>delete</button>
        </td>
      </tr>

      <InlineForm
        trigger={trigger} setTrigger={setTrigger}
        employee={employeesList[id]}
      />
    </Fragment>
  )
}

export default Employee