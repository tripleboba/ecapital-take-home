import React from 'react';
import './css/App.css';
import Table from './components/Table';
import { useStateValue } from "./providers/StateProvider";

export default function App() {
  const [{employeesList}] = useStateValue();
  
  return (
    <div className="App">
      <Table employeesList={employeesList}/>
    </div>
  );
}

