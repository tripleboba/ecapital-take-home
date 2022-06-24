import React, { useState } from 'react'
import data from '../db/mock-employees.json';

function Table() {

  const [employees, setEmployees] = useState(data["employees"]);
  const listOfEmployees = employees.map((employee, index) => (
    <tr key={index}>
      <td>{employee.firstName}</td>
      <td>{employee.lastName}</td>
      <td>{employee.salary}</td>
      <td>
        <button>edit</button>
        <button>delete</button>
      </td>
    </tr>
  ))

  return (
    <div>
      <h3>Employees</h3>
      <table>
        <thead>
          <tr>
            <th>first name</th>
            <th>last name</th>
            <th>salary</th>
          </tr>
        </thead>
        <tbody>
          {listOfEmployees}
        </tbody>
      </table>

      <button>add new employee</button>

    </div>

  )
}

export default Table