import React from 'react'

function Employee(props) {
  const {id, firstName, lastName, salary } = props;

  // button handlers
  const editHandler = (e) => {
    e.preventDefault();
    console.log(id);
  }
  
  const deleteHandler = (e) => {
    e.preventDefault();
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