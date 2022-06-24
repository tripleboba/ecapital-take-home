import React, {useState} from 'react'
import { useStateValue } from '../providers/StateProvider';

// SHOULD BE HIDDEN - IMPLEMENTED LATER!!!!!
// button clicked -> inline form with save/cancel - similar to edit button

export default function Form() {
  const [{employeeList}, dispatch] = useStateValue();

  const [newEmployee, setNewEmployee] = useState({
    firstName: '',
    lastName: '',
    salary: ''
  });

  // capture inputs
  const onChangeHandler = (e) => {
    e.preventDefault();
    const inputFieldName = e.target.getAttribute('name');
    const inputValue = e.target.value;
    const formData = { ...newEmployee };

    formData[inputFieldName] = inputValue;
    setNewEmployee(formData);
  }

  const addEmployee = (e) => {
    e.preventDefault();
    console.log("newEmployee data from Form.js", newEmployee);
    dispatch({
      type: 'ADD_EMPLOYEE',
      employee: newEmployee,
    })
  }

  return (
    <div>
      <form>
        <input
          type='text' name='firstName'
          placeholder='enter first name'
          onChange={onChangeHandler}
        />
        <input
          type='text' name='lastName'
          placeholder='enter last name'
          onChange={onChangeHandler}
        />
        <input
          type='number' name='salary'
          placeholder='enter salary'
          onChange={onChangeHandler}
        />
        <button
          type='submit'
          onClick={addEmployee}
        >Add Employee</button>
      </form>
    </div>
  )
}
