import React, { useState } from 'react'
// import data from '../db/mock-employees.json';
import Employee from './Employee';

function Table(props) {
  
  const {employeesList} = props;
  const listOfEmployees = employeesList.map((employee, index) => (
    <Employee 
      key={index}
      {...employee}
      id={index}
    />
  ))

  return (
    <div>
      <h3>Employees</h3>
      <table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Salary</th>
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