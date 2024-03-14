import React, { useState } from 'react'

export default function VehicleInputFieldset(props) {
  const [newField, setNewField] = useState({ driver_name: "", driver_value: "", miles: "", days: "", fuelcost: "", cost: "" });
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
  
    setNewField({ driver_name: "", driver_value: "", miles: "", days: "", fuelcost: "", cost: "" });
  };

  // Function to calculate the sum of material costs for a given day
const calculateCostSum = (day) => {
  return day.drivers.reduce((sum, driver) => sum + driver.cost, 0);
};

const calculatefuelCostSum = (day) => {
  return day.drivers.reduce((sum, driver) => sum + driver.fuelcost, 0);
};

const calculatetotalvehicle = (day) => {
  return day.drivers.reduce((sum, drive) => sum + drive.days, 0);
};

// Function to calculate the sum of material costs for all days
const calculateTotalCost = (days) => {
  return days.reduce((totalSum, day) => totalSum + calculateCostSum(day), 0);
};

const calculateTotalfuelCost = (days) => {
  return days.reduce((totalSum, day) => totalSum + calculatefuelCostSum(day), 0);
};

  const handleVehicleChange = (e, index) => {
    const newData = [...props.data.days];
    let overallcost = {...props.data.costCalculation}
    newData[props.currentDataIndex].drivers[index].driver_name = e.target.options[e.target.selectedIndex].text;
    newData[props.currentDataIndex].drivers[index].driver_value = e.target.value
    newData[props.currentDataIndex].drivers[index].cost = +(e.target.value) * +(newData[props.currentDataIndex].drivers[index].days);
    let totalVehicleCost = calculateTotalCost(newData);
    newData[props.currentDataIndex].totalVehicleCost = calculateCostSum(newData[props.currentDataIndex])
    overallcost.VehicleTotalCost = totalVehicleCost;
    let totatcostcalculation = props.data.ZonePrice.TotalCost + overallcost.other + overallcost.VehicleTotalCost + overallcost.HumanTotalCost + overallcost.materialTotalCost + overallcost.totalFualCost;
    overallcost.TotalCost = totatcostcalculation;
    overallcost.Quatation = ((totatcostcalculation / 100) * 20) + totatcostcalculation;
    props.setData({ ...props.data, days: newData, costCalculation: overallcost });
  };

  const handleMilesChange = (e, index) => {
    let val = 0.9;
    const newData = [...props.data.days];
    let overallcost = {...props.data.costCalculation}
    newData[props.currentDataIndex].drivers[index].miles = e.target.valueAsNumber;
    newData[props.currentDataIndex].drivers[index].fuelcost = +(e.target.valueAsNumber) * val;
    overallcost.totalFualCost = calculateTotalfuelCost(newData)
    let totatcostcalculation = props.data.ZonePrice.TotalCost + overallcost.other + overallcost.VehicleTotalCost + overallcost.HumanTotalCost + overallcost.materialTotalCost + overallcost.totalFualCost;
    overallcost.TotalCost = totatcostcalculation;
    overallcost.Quatation = ((totatcostcalculation / 100) * 20) + totatcostcalculation;
    props.setData({ ...props.data, days: newData, costCalculation: overallcost });
  };

  const handledaysChange = (e, index) => {
    let val =  e.target.valueAsNumber
    let overallcost = {...props.data.costCalculation}
    const newData = [...props.data.days];
    newData[props.currentDataIndex].drivers[index].days = e.target.valueAsNumber;
    newData[props.currentDataIndex].drivers[index].cost = +(newData[props.currentDataIndex].drivers[index].driver_value) * e.target.valueAsNumber;
    let totalMaterialCost = calculateTotalCost(newData);
    overallcost.VehicleTotalCost = totalMaterialCost;
    let totalquantity = calculatetotalvehicle(newData[props.currentDataIndex])
    newData[props.currentDataIndex].totalVehicle = totalquantity;
    newData[props.currentDataIndex].totalVehicleCost = calculateCostSum(newData[props.currentDataIndex])
    let totatcostcalculation = props.data.ZonePrice.TotalCost + overallcost.other + overallcost.VehicleTotalCost + overallcost.HumanTotalCost + overallcost.materialTotalCost + overallcost.totalFualCost;
    overallcost.TotalCost = totatcostcalculation;
    overallcost.Quatation = ((totatcostcalculation / 100) * 20) + totatcostcalculation;
    props.setData({ ...props.data, days: newData, costCalculation : overallcost  });
  };


  return (
    <>
    <fieldset className='row mx-lg-1 mb-2 p-2 border border-1 rounded'>
      <div className="col-3 mb-5 px-0">
        <p className='w-100 text-start mb-1'>Vehicles</p>
        {vehiclesData.map((item, index) => (
        <select className="form-select mb-3" key={index} value={item?.driver_value} aria-label="Select Vehicle" onChange={(e) => handleVehicleChange(e, index)}>
          <option disabled selected value="" className='d-none'></option>
          <option value="100">3.5T</option>
          <option value="150">7.5T</option>
          <option value="200">HGV</option>
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
        <input type="text" readOnly className="form-control mb-3" value={props?.data.days[props.currentDataIndex].totalVehicle} />
      </div>
      <div className="col-2 ps-2 pe-0"></div>
      <div className="col-3 ps-2 pe-0">
        <input type="text" readOnly className="form-control mb-3 bg-success bg-opacity-10" value={props?.data.days[props.currentDataIndex].totalVehicleCost} />
      </div>
      <div className="col-12 p-0">
        <button className="btn btn-primary" onClick={handleAddField}>Add Vehicle</button>
      </div>
    </fieldset>
    </>
  )
}
