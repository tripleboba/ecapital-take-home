import React, { Fragment, useState } from 'react'
import { useStateValue } from '../providers/StateProvider';
import CurrencyFormat from 'react-currency-format';
import InlineForm from './InlineForm';

function Employee(props) {
  const { id, firstName, lastName, salary } = props;
  const [{ employeesList }, dispatch] = useStateValue();
  console.log("current employeesList from Employee.js: ", employeesList);

  const [trigger, setTrigger] = useState(false);

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
  }
  return (
    <Fragment>

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
      <InlineForm
        trigger={trigger} setTrigger={setTrigger}
        id={id}
      />
    </Fragment>
  )
}

export default Employee