import React from 'react'

export default function InlineForm(props) {
  const {trigger, setTrigger, id} = props;

  const saveChange = (e) => {
    e.preventDefault();
    console.log("id from saveChange() in InlineForm",id);
  }
  const cancelChange = (e) => {
    e.preventDefault();
    setTrigger(false);
  }


  return (trigger) ? (
    <tr>
      <td>
        <input
          type='text' name='firstName'
          placeholder='enter first name'
          // onChange={onChangeHandler}
        />
      </td>
      <td>
        <input
          type='text' name='lastName'
          placeholder='enter last name'
          // onChange={onChangeHandler}
        />
      </td>
      <td>
        <input
          type='number' name='salary'
          placeholder='enter salary'
          // onChange={onChangeHandler}
        />
      </td>
      <td>
        <button onClick={saveChange}>Save</button>
        <button onClick={cancelChange}>Cancel</button>
      </td>
    </tr>
  ) : ("")
}
