/**
 * Handle states of the data
 */
import data from '../db/mock-employees.json';

const employees = data.employees;
// console.log(employees);

export const initialState = {
  employeesList: [...employees],
};

const reducer = (state, action) => {
  console.log(action);

  switch (action.type) {
    case 'UPDATE_EMPLOYEESLIST':  // bug implementation
      return {
        ...state,
        employeesList: [...action.employees]
      };
    case 'ADD_EMPLOYEE':
      return {
        ...state,
        employeesList: [...state.employeesList, action.employee],
      };
    case 'DELETE_EMPLOYEE':
      const index = action.id;
      let tempList = [...state.employeesList];
      tempList.splice(index, 1);
      return {
        ...state,
        employeesList: tempList,
      };
      default:
        return state;
  }
};

export default reducer;