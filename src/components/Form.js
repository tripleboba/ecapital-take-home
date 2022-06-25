import React, { useState } from 'react'
import { useStateValue } from '../providers/StateProvider';

// SHOULD BE HIDDEN - IMPLEMENTED LATER!!!!!
// button clicked -> inline form with save/cancel - similar to edit button

export default function Form() {
  const [{ employeeList }, dispatch] = useStateValue();

  const [newEmployee, setNewEmployee] = useState({
    firstName: '',
    lastName: '',
    salary: ''
  });

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
    <div className='field is-horizontal'>
      <div className='field-body'>
        <div className='field'>
          <input className='input is-small'
            type='text' name='firstName'
            placeholder='enter first name'
            onChange={onChangeHandler}
          />
          {/* <p className='help is-danger'>this field is required</p> */}
        </div>
        <div className='field'>
          <input className='input is-small'
            type='text' name='lastName'
            placeholder='enter last name'
            onChange={onChangeHandler}
          />
        </div>
        <div className='field'>
          <input className='input is-small'
            type='number' name='salary'
            placeholder='enter salary'
            onChange={onChangeHandler}
          />
        </div>
        <div className='field'>
          <button className='button is-small is-success is-outlined is-pulled-right'
            type='submit'
            onClick={addEmployee}
          >Add Employee</button>
        </div>
      </div>
    </div>
  )
}
