import React from 'react'
import { useStateValue } from '../providers/StateProvider';
import Employee from './Employee';
import Form from './Form';

function Table(props) {

  // const { employeesList } = props;
  const [{employeesList}] = useStateValue();
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
      <Form />
    </div>
  )
}

export default Table