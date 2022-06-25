import React, {useState} from 'react'
import { useStateValue } from '../providers/StateProvider';

export default function InlineForm(props) {
  const { trigger, setTrigger, employee } = props;
  const [{ employeeList }, dispatch] = useStateValue();

  const [newInfo, setnewInfo] = useState({
    ...employee
  });
  const onChangeHandler = (e) => {
    e.preventDefault();
    const inputFieldName = e.target.getAttribute('name');
    const inputValue = e.target.value;
    const inlineFormData = { ...newInfo };

    inlineFormData[inputFieldName] = inputValue;
    setnewInfo(inlineFormData);
  }

  const saveChange = (e) => {
    e.preventDefault();
    // dispatch({
    //   type: 'UPDATE_EMPLOYEESLIST',
    //   employee: newInfo,
    // })
    console.log(">>>>>>>>>>>>>",newInfo);
  }

  const cancelChange = (e) => {
    e.preventDefault();
    // setTrigger(false);
    console.log(">>>>>>>>>>>>>",newInfo);
  }

  return (trigger) ? (
    <tr>
      <td>
        <input
          type='text' name='firstName'
          // value={employee.firstName}
          onChange={onChangeHandler}
        />
      </td>
      <td>
        <input
          type='text' name='lastName'
          // value={employee.lastName}
          onChange={onChangeHandler}
        />
      </td>
      <td>
        <input
          type='number' name='salary'
          // value={employee.salary}
          onChange={onChangeHandler}
        />
      </td>
      <td>
        <button onClick={saveChange}>save</button>
        <button onClick={cancelChange}>cancel</button>
      </td>
    </tr>
  ) : ("")
}
