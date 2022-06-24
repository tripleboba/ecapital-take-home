import React, { useState } from 'react'
import data from '../db/mock-employees.json';

function Table() {

const [employees, setEmployees] = useState(data["employees"]);

  return (
    <div>
      <h3>Employees</h3>
      <table>
        <thead>
          <tr>
            <th>first name</th>
            <th>last name</th>
            <th>salary</th>
            <th>events</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((e) => (
            <tr>
              <td>{e.firstName}</td>
              <td>{e.lastName}</td>
              <td>{e.salary}</td>
            </tr>
          ))}
          {/* <tr>
            <td>f1</td>
            <td>f2</td>
            <td>$</td>
            <td>edit delete</td>
          </tr> */}
        </tbody>
      </table>

    </div>

  )
}

export default Table