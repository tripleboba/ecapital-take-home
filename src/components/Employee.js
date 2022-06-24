import React, {useState} from 'react'
import {useStateValue} from '../providers/StateProvider';

function Employee(props) {
  const {id, firstName, lastName, salary } = props;
  const [{employeesList}, dispatch] = useStateValue();
  console.log("[from <Employee>]: current employeesList:",employeesList);

  // button handlers
  const editHandler = (e) => {
    e.preventDefault();
    console.log(id);
  }
  
  const deleteHandler = (e) => {
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
      <td>{salary}</td>
      <td>
      <button onClick={editHandler}>edit</button>
      <button onClick={deleteHandler}>delete</button>
    </td>
    </tr>
  )
}

export default Employee