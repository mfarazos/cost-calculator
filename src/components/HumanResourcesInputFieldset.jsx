import React, { useState } from 'react'

export default function HumanResourcesInputFieldset(props) {
  const [newField, setNewField] = useState({ resource_name: "3.5T Driver", resource_Value: "120", days: "",overnight: false, hours: 0, cost: 0 });
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
  
    setNewField({ resource_name: "3.5T Driver", resource_Value: "120", days: "",overnight: false, hours: 0, cost: 0 });
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
  return day.resources.reduce((sum, resource) => sum + resource.hours, 0);
};

  const handleresourceChange = (e, index) => {
    const newData = [...props.data.days];
    let overallcost = {...props.data.costCalculation}
    newData[props.currentDataIndex].resources[index].resource_Value = e.target.value;
    newData[props.currentDataIndex].resources[index].resource_name = e.target.options[e.target.selectedIndex].text;
    
    if(newData[props.currentDataIndex].resources[index].overnight){
    newData[props.currentDataIndex].resources[index].cost = (+(e.target.value) + 45)  * +(newData[props.currentDataIndex].resources[index].hours);
    
    }else{
    newData[props.currentDataIndex].resources[index].cost = +(e.target.value) * +(newData[props.currentDataIndex].resources[index].hours);
    }
    overallcost.HumanTotalCost = calculateTotalCost(newData);
    newData[props.currentDataIndex].totalResourceCost = calculateCostSum(newData[props.currentDataIndex]);
    let totatcostcalculation = props.data.ZonePrice.TotalCost + overallcost.other + overallcost.VehicleTotalCost + overallcost.HumanTotalCost + overallcost.materialTotalCost + overallcost.totalFualCost;
    let totatcostcalculationwithmarup = overallcost.VehicleTotalCost + overallcost.HumanTotalCost + overallcost.materialTotalCost + overallcost.totalFualCost;
    overallcost.TotalCost = totatcostcalculation;
    overallcost.Quatation = ((totatcostcalculationwithmarup / 100) * 20) + totatcostcalculation;
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
    let totatcostcalculation = props.data.ZonePrice.TotalCost + overallcost.other + overallcost.VehicleTotalCost + overallcost.HumanTotalCost + overallcost.materialTotalCost + overallcost.totalFualCost;
    let totatcostcalculationwithmarup = overallcost.VehicleTotalCost + overallcost.HumanTotalCost + overallcost.materialTotalCost + overallcost.totalFualCost;
    overallcost.TotalCost = totatcostcalculation;
    overallcost.Quatation = ((totatcostcalculationwithmarup / 100) * 20) + totatcostcalculation;
    props.setData({ ...props.data, days: newData, costCalculation : overallcost });
  };

  const handleOvernightChange = (e, index) => {
    const newData = [...props.data.days];
    newData[props.currentDataIndex].resources[index].overnight = e.target.checked;
    let overallcost = {...props.data.costCalculation}
    
    if(newData[props.currentDataIndex].resources[index].overnight){
    newData[props.currentDataIndex].resources[index].hours = newData[props.currentDataIndex].resources[index].hours;
    newData[props.currentDataIndex].resources[index].cost = +(newData[props.currentDataIndex].resources[index].hours) * (+(newData[props.currentDataIndex].resources[index].resource_Value) + 45);
    newData[props.currentDataIndex].totalResource = calculateTotalHuman(newData[props.currentDataIndex]);
    overallcost.HumanTotalCost = calculateTotalCost(newData);
    newData[props.currentDataIndex].totalResourceCost = calculateCostSum(newData[props.currentDataIndex]);
    let totatcostcalculation = props.data.ZonePrice.TotalCost + overallcost.other + overallcost.VehicleTotalCost + overallcost.HumanTotalCost + overallcost.materialTotalCost + overallcost.totalFualCost;
    let totatcostcalculationwithmarup = overallcost.VehicleTotalCost + overallcost.HumanTotalCost + overallcost.materialTotalCost + overallcost.totalFualCost;
    overallcost.TotalCost = totatcostcalculation;
    overallcost.Quatation = ((totatcostcalculationwithmarup / 100) * 20) + totatcostcalculation;
    }else{
    newData[props.currentDataIndex].resources[index].cost = +(newData[props.currentDataIndex].resources[index].hours) * +(newData[props.currentDataIndex].resources[index].resource_Value);
    newData[props.currentDataIndex].totalResource = calculateTotalHuman(newData[props.currentDataIndex]);
    overallcost.HumanTotalCost = calculateTotalCost(newData);
    newData[props.currentDataIndex].totalResourceCost = calculateCostSum(newData[props.currentDataIndex]);
    let totatcostcalculation = props.data.ZonePrice.TotalCost + overallcost.other + overallcost.VehicleTotalCost + overallcost.HumanTotalCost + overallcost.materialTotalCost + overallcost.totalFualCost;
    let totatcostcalculationwithmarup = overallcost.VehicleTotalCost + overallcost.HumanTotalCost + overallcost.materialTotalCost + overallcost.totalFualCost;
    overallcost.TotalCost = totatcostcalculation;
    overallcost.Quatation = ((totatcostcalculationwithmarup / 100) * 20) + totatcostcalculation;
    }
    
    props.setData({ ...props.data, days: newData, costCalculation : overallcost });
  };  

  const handleHoursChange = (e, index) => {
    // const newData = [...props.data.days];
    // newData[props.currentDataIndex].resources[index].hours = e.target.valueAsNumber;
    // props.setData({ ...props.data, days: newData });


    const newData = [...props.data.days];
    let overallcost = {...props.data.costCalculation}
    newData[props.currentDataIndex].resources[index].hours = e.target.valueAsNumber;
    
    if(newData[props.currentDataIndex].resources[index].overnight){
      newData[props.currentDataIndex].resources[index].cost = +(e.target.value) * (+(newData[props.currentDataIndex].resources[index].resource_Value) + 45);
    
    }else{
      newData[props.currentDataIndex].resources[index].cost = +(e.target.value) * +(newData[props.currentDataIndex].resources[index].resource_Value);
    
    }
    
    newData[props.currentDataIndex].totalResource = calculateTotalHuman(newData[props.currentDataIndex]);
    overallcost.HumanTotalCost = calculateTotalCost(newData);
    newData[props.currentDataIndex].totalResourceCost = calculateCostSum(newData[props.currentDataIndex]);
    let totatcostcalculation = props.data.ZonePrice.TotalCost + overallcost.other + overallcost.VehicleTotalCost + overallcost.HumanTotalCost + overallcost.materialTotalCost + overallcost.totalFualCost;
    let totatcostcalculationwithmarup = overallcost.VehicleTotalCost + overallcost.HumanTotalCost + overallcost.materialTotalCost + overallcost.totalFualCost;
    overallcost.TotalCost = totatcostcalculation;
    overallcost.Quatation = ((totatcostcalculationwithmarup / 100) * 20) + totatcostcalculation;
    props.setData({ ...props.data, days: newData, costCalculation : overallcost });
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
          <input type="number" min={0} key={index} value={item?.hours} onChange={(e) => handleHoursChange(e, index)} className="form-control mb-3 bg-warning bg-opacity-10" />
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
