import React, { useState } from 'react';

export default function DayTaskInputFieldset(props) {

  const daysData = props.data && Array.isArray(props.data.days) ? props.data.days : [];

  const [newField, setNewField] = useState({ date: "", task: "", drivers: [], resources: [], material: [] });

  const handleAddField = () => {
    props.setData((prevData) => {
        return { ...prevData, days: [...prevData.days, newField] };
      });    setNewField({ date: "", task: "", drivers: [], resources: [], material: [] });
  };

  const handleDateChange = (e, index) => {
    const newData = [...daysData];
    newData[index].date = e.target.value;
    props.setData({ ...props.data, days: newData });
  };

  const handleTaskChange = (e, index) => {
    const newData = [...daysData];
    newData[index].task = e.target.value;
    props.setData({ ...props.data, days: newData });
  };

  return (
    <>
      {daysData.map((item, index) => (
        <fieldset key={index} className='row p-2 mb-3 border border-1 rounded'>
          <div className="col-4 pe-0">
            <p className='w-100 text-start mb-1'>Day</p>
            <select className="form-select mb-3" aria-label="Select Day" value={item.date} onChange={(e) => handleDateChange(e, index)}>
              <option disabled selected={!item.date} value="" className='d-none'></option>
              <option value="Monday">Monday</option>
              <option value="Tuesday">Tuesday</option>
              <option value="Wednesday">Wednesday</option>
              <option value="Thursday">Thursday</option>
              <option value="Friday">Friday</option>
              <option value="Weekend">Weekend</option>
            </select>
          </div>
          <div className="col-8">
            <p className='w-100 text-start mb-1'>Task</p>
            <input type="text" className="form-control mb-3" value={item.task} onChange={(e) => handleTaskChange(e, index)} />
          </div>
        </fieldset>
      ))}
      <div className="row">
        <button className="btn btn-primary" onClick={handleAddField}>Add Day</button>
      </div>
    </>
  );
}
