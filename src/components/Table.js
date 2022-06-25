import React from 'react'
import { useStateValue } from '../providers/StateProvider';
import Employee from './Employee';
import Form from './Form';

function Table(props) {

  // const { employeesList } = props;
  const [{ employeesList }] = useStateValue();
  const listOfEmployees = employeesList.map((employee, index) => (
    <Employee
      key={index}
      {...employee}
      id={index}
    />
  ))

  return (
    <div className="section">
      <div className='table-container'>
        <h3 className='title'>Employees</h3>
        <table className='table is-fullwidth is-hoverable'>
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Salary</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {listOfEmployees}
          </tbody>
        </table>
      </div>
      <Form />
    </div>
  )
}

export default Table