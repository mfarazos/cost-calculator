import React, { useState } from 'react'

export default function VehicleInputFieldset(props) {
  const [newField, setNewField] = useState({ driver_name: "", miles: "", days: "", fuelcost: "", cost: "" });
  const vehiclesData = props.data && Array.isArray(props?.data.days[props.currentDataIndex].drivers) ? props?.data.days[props.currentDataIndex].drivers : [];

  const handleAddField = () => {
    props.setData((prevData) => {
      const updatedDays = prevData.days.map((day, index) => {
        if (index === props.currentDataIndex) {
          return { ...day, drivers: [...day.drivers, newField] };
        }
        return day;
      });
  
      return { ...prevData, days: updatedDays };
    });
  
    setNewField({ driver_name: "", miles: "", days: "", fuelcost: "", cost: "" });
  };

  const handleVehicleChange = (e, index) => {
    const newData = [...props.data.days];
    newData[props.currentDataIndex].drivers[index].driver_name = e.target.value;
    props.setData({ ...props.data, days: newData });
  };

  const handleMilesChange = (e, index) => {
    const newData = [...props.data.days];
    newData[props.currentDataIndex].drivers[index].miles = e.target.valueAsNumber;
    props.setData({ ...props.data, days: newData });
  };

  const handledaysChange = (e, index) => {
    const newData = [...props.data.days];
    newData[props.currentDataIndex].drivers[index].days = e.target.valueAsNumber;
    props.setData({ ...props.data, days: newData });
  };


  return (
    <>
    <fieldset className='row mx-lg-1 mb-2 p-2 border border-1 rounded'>
      <div className="col-3 mb-5 px-0">
        <p className='w-100 text-start mb-1'>Vehicles</p>
        {vehiclesData.map((item, index) => (
        <select className="form-select mb-3" key={index} value={item?.driver_name} aria-label="Select Vehicle" onChange={(e) => handleVehicleChange(e, index)}>
          <option disabled selected value="" className='d-none'></option>
          <option value="3.5ton">3.5T</option>
          <option value="7.5ton">7.5T</option>
          <option value="HGV">HGV</option>
        </select>
        ))} 
      </div>
      <div className="col-2 mb-5 ps-2 pe-0">
        <p className='w-100 text-start mb-1'>Miles</p>
        {vehiclesData.map((item, index) => (<input key={index} type="number" value={item?.miles} onChange={(e) => handleMilesChange(e, index)} className="form-control mb-3" />))}
      </div>
      <div className="col-2 mb-5 ps-2 pe-0">
        <p className='w-100 text-start mb-1'>No.</p>
        {vehiclesData.map((item, index) => (<input type="number" key={index} value={item?.days} onChange={(e) => handledaysChange(e, index)}  className="form-control mb-3" />))}
      </div>
      <div className="col-2 mb-5 ps-2 pe-0">
        <p className='w-100 text-start mb-1'>Fuel</p>
        {vehiclesData.map((item, index) => (<input type="text" readOnly key={index} value={item?.fuelcost} className="form-control mb-3 bg-warning bg-opacity-10" />))}
      </div>
      <div className="col-3 mb-5 ps-2 pe-0">
        <p className='w-100 text-start mb-1'>Cost</p>
        {vehiclesData.map((item, index) => (<input type="text" readOnly key={index} value={item?.cost} className="form-control mb-3 bg-success bg-opacity-10" />))}
      </div>
      <div className="col-3 px-0"></div>
      <div className="col-2 ps-2 pe-0"></div>
      <div className="col-2 ps-2 pe-0">
        <input type="text" readOnly className="form-control mb-3" />
      </div>
      <div className="col-2 ps-2 pe-0"></div>
      <div className="col-3 ps-2 pe-0">
        <input type="text" readOnly className="form-control mb-3 bg-success bg-opacity-10" />
      </div>
      <div className="col-12 p-0">
        <button className="btn btn-primary" onClick={handleAddField}>Add Vehicle</button>
      </div>
    </fieldset>
    </>
  )
}
