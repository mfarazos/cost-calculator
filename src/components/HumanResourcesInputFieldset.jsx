import React, { useState } from 'react'

export default function HumanResourcesInputFieldset(props) {
  const [newField, setNewField] = useState({ resource_name: "", resource_Value: "", days: "",overnight: false, hours: "", cost: "" });
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
  
    setNewField({ resource_name: "", resource_Value: "", days: "",overnight: false, hours: "", cost: "" });
  };

    // Function to calculate the sum of material costs for a given day
const calculateCostSum = (day) => {
  return day.resources.reduce((sum, resource) => sum + resource.cost, 0);
};

// Function to calculate the sum of material costs for all days
const calculateTotalCost = (days) => {
  return days.reduce((totalSum, day) => totalSum + calculateCostSum(day), 0);
};

const calculateTotalHuman = (day) => {
  return day.resources.reduce((sum, resource) => sum + resource.days, 0);
};

  const handleresourceChange = (e, index) => {
    const newData = [...props.data.days];
    let overallcost = {...props.data.costCalculation}
    newData[props.currentDataIndex].resources[index].resource_Value = e.target.value;
    newData[props.currentDataIndex].resources[index].resource_name = e.target.options[e.target.selectedIndex].text;
    newData[props.currentDataIndex].resources[index].cost = +(e.target.value) * +(newData[props.currentDataIndex].resources[index].days);
    overallcost.HumanTotalCost = calculateTotalCost(newData);
    newData[props.currentDataIndex].totalResourceCost = calculateCostSum(newData[props.currentDataIndex]);
    let totatcostcalculation = overallcost.VehicleTotalCost + overallcost.HumanTotalCost + overallcost.materialTotalCost + overallcost.totalFualCost;
    overallcost.TotalCost = totatcostcalculation;
    overallcost.Quatation = ((totatcostcalculation / 100) * 20) + totatcostcalculation;
    props.setData({ ...props.data, days: newData, costCalculation : overallcost  });

  };

  const handleDaysChange = (e, index) => {
    const newData = [...props.data.days];
    let overallcost = {...props.data.costCalculation}
    newData[props.currentDataIndex].resources[index].days = e.target.valueAsNumber;
    newData[props.currentDataIndex].resources[index].cost = +(e.target.value) * +(newData[props.currentDataIndex].resources[index].resource_Value);
    newData[props.currentDataIndex].totalResource = calculateTotalHuman(newData[props.currentDataIndex]);
    overallcost.HumanTotalCost = calculateTotalCost(newData);
    newData[props.currentDataIndex].totalResourceCost = calculateCostSum(newData[props.currentDataIndex]);
    let totatcostcalculation = overallcost.VehicleTotalCost + overallcost.HumanTotalCost + overallcost.materialTotalCost + overallcost.totalFualCost;
    overallcost.TotalCost = totatcostcalculation;
    overallcost.Quatation = ((totatcostcalculation / 100) * 20) + totatcostcalculation;
    props.setData({ ...props.data, days: newData, costCalculation : overallcost });
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
        {humanResourcesData.map((item, index) => (<select className="form-select mb-3" key={index} value={item.resource_Value} onChange={(e) => handleresourceChange(e, index)} aria-label="Select Vehicle">
          <option disabled value="" className='d-none'></option>
          <option value="120">3.5T Driver</option>
          <option value="150">7.5T Driver</option>
          <option value="151">HGV driver</option>
          <option value="100">Porter</option>
        </select>))}
      </div>
      <div className="col-2 mb-5 ps-2 pe-0">
        <p className='w-100 text-start mb-1'>Day #.</p>
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
        <input type="text" readOnly className="form-control mb-3" value={props?.data.days[props.currentDataIndex].totalResource} />
      </div>
      <div className="col-1 ps-2 pe-0"></div>
      <div className="col-2 ps-2 pe-0"></div>
      <div className="col-3 ps-2 pe-0">
        <input type="text" readOnly className="form-control mb-3 bg-success bg-opacity-10" value={props?.data.days[props.currentDataIndex].totalResourceCost} />
      </div>
      <div className="col-12 p-0">
        <button className="btn btn-primary" onClick={handleAddField}>Add Human resource</button>
      </div>
    </fieldset>
  )
}
