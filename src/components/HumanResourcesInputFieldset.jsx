import React, { useState } from 'react'

export default function HumanResourcesInputFieldset(props) {
  const [newField, setNewField] = useState({ resource_name: "", days: "",overnight: false, hours: "", cost: "" });
  const humanResourcesData = props.data && Array.isArray(props?.data.days[props.currentDataIndex].resources) ? props?.data.days[props.currentDataIndex].resources : [];

  const handleAddField = () => {
    props.setData((prevData) => {
      const updatedDays = prevData.days.map((day, index) => {
        if (index === props.currentDataIndex) {
          return { ...day, resources: [...day.resources, newField] };
        }
        return day;
      });
  
      return { ...prevData, days: updatedDays };
    });
  
    setNewField({ resource_name: "", days: "",overnight: false, hours: "", cost: "" });
  };

  const handleresourceChange = (e, index) => {
    const newData = [...props.data.days];
    newData[props.currentDataIndex].resources[index].resource_name = e.target.value;
    props.setData({ ...props.data, days: newData });
  };

  const handleDaysChange = (e, index) => {
    const newData = [...props.data.days];
    newData[props.currentDataIndex].resources[index].days = e.target.valueAsNumber;
    props.setData({ ...props.data, days: newData });
  };

  const handleOvernightChange = (e, index) => {
    const newData = [...props.data.days];
    newData[props.currentDataIndex].resources[index].overnight = e.target.checked;
    props.setData({ ...props.data, days: newData });
  };  

  const handleHoursChange = (e, index) => {
    const newData = [...props.data.days];
    newData[props.currentDataIndex].resources[index].hours = e.target.valueAsNumber;
    props.setData({ ...props.data, days: newData });
  };

  return (
    <fieldset className='row mx-lg-1 mb-3 p-2 border border-1 rounded'>
      <div className="col-4 mb-5 px-0">
        <p className='w-100 text-start mb-1'>Human resources</p>
        {humanResourcesData.map((item, index) => (<select className="form-select mb-3" key={index} value={item?.resource_name} onChange={(e) => handleresourceChange(e, index)} aria-label="Select Vehicle">
          <option disabled value="" className='d-none'></option>
          <option value="3.5T_driver">3.5T Driver</option>
          <option value="7.5T_Driver">7.5T Driver</option>
          <option value="HGV_Driver">HGV driver</option>
          <option value="Porter">Porter</option>
        </select>))}
      </div>
      <div className="col-2 mb-5 ps-2 pe-0">
        <p className='w-100 text-start mb-1'>No.</p>
        {humanResourcesData.map((item, index) => (<input type="number" key={index} onChange={(e) => handleDaysChange(e, index)} value={item?.days} className="form-control mb-3" />))}
      </div>
      <div className="col-1 mb-5 ps-2 pe-0">
        <p className='w-100 text-start mb-1'>O/N</p>
        {humanResourcesData.map((item, index) => (
        <div className="form-check mb-3" style={{minHeight: "2.5rem"}}>
          <input type="checkbox" key={index} checked={item?.overnight} onChange={(e) => handleOvernightChange(e, index)} className="form-check-input mb-3" />
        </div>
        ))}
      </div>

      <div className="col-2 mb-5 ps-2 pe-0">
        <p className='w-100 text-start mb-1'>Hours</p>
        {humanResourcesData.map((item, index) => (
          <input type="number" key={index} value={item?.hours} onChange={(e) => handleHoursChange(e, index)} className="form-control mb-3 bg-warning bg-opacity-10" />
        ))}
      </div>
      <div className="col-3 mb-5 ps-2 pe-0">
        <p className='w-100 text-start mb-1'>Cost</p>
        {humanResourcesData.map((item, index) => (
          <input type="text" key={index} value={item?.cost} className="form-control mb-3 bg-success bg-opacity-10" />
        ))}
      </div>
      <div className="col-4 px-0"></div>
      <div className="col-2 ps-2 pe-0">
        <input type="text" readOnly className="form-control mb-3" />
      </div>
      <div className="col-1 ps-2 pe-0"></div>
      <div className="col-2 ps-2 pe-0"></div>
      <div className="col-3 ps-2 pe-0">
        <input type="text" readOnly className="form-control mb-3 bg-success bg-opacity-10" />
      </div>
      <div className="col-12 p-0">
        <button className="btn btn-primary" onClick={handleAddField}>Add Human resource</button>
      </div>
    </fieldset>
  )
}
