import React, { useState } from 'react';

export default function MaterialsInputFieldset(props) {
  const [newField, setNewField] = useState({ material: "", materialValue: "", hours: "", cost: "" });
  const MaterialData = props.data && Array.isArray(props?.data.days[props.currentDataIndex].material) ? props?.data.days[props.currentDataIndex].material : [];
  const handleAddField = () => {
    props.setData((prevData) => {
      const updatedDays = prevData.days.map((day, index) => {
        if (index === props.currentDataIndex) {
          return { ...day, material: [...day.material, newField] };
        }
        return day;
      });
  
      return { ...prevData, days: updatedDays };
    });
  
    setNewField({ material: "", materialValue: "", hours: "", cost: "" });
  };

    // Function to calculate the sum of material costs for a given day
const calculateCostSum = (day) => {
  return day.material.reduce((sum, material) => sum + material.cost, 0);
};

// Function to calculate the sum of material costs for all days
const calculateTotalCost = (days) => {
  return days.reduce((totalSum, day) => totalSum + calculateCostSum(day), 0);
};

  const handleMaterialChange = (e, index) => {
    const newData = [...props.data.days];
    let overallcost = {...props.data.costCalculation}
    newData[props.currentDataIndex].material[index].material = e.target.options[e.target.selectedIndex].text;
    newData[props.currentDataIndex].material[index].materialValue = e.target.value;
    newData[props.currentDataIndex].material[index].cost = +(e.target.value) * newData[props.currentDataIndex].material[index].hours 
    newData[props.currentDataIndex].totalMaterialCost = calculateCostSum(newData[props.currentDataIndex])
    overallcost.materialTotalCost = overallcost.materialTotalCost = calculateTotalCost(newData);
    let totatcostcalculation = overallcost.VehicleTotalCost + overallcost.HumanTotalCost + overallcost.materialTotalCost + overallcost.totalFualCost;
    overallcost.TotalCost = totatcostcalculation;
    overallcost.Quatation = ((totatcostcalculation / 100) * 20) + totatcostcalculation;
    props.setData({ ...props.data, days: newData, costCalculation : overallcost });
  };

  const handleHoursChange = (e, index) => {
    const newData = [...props.data.days];
    let overallcost = {...props.data.costCalculation}
    newData[props.currentDataIndex].material[index].hours = e.target.valueAsNumber;
    newData[props.currentDataIndex].material[index].cost = e.target.valueAsNumber * +(newData[props.currentDataIndex].material[index].materialValue) || 0;
    newData[props.currentDataIndex].totalMaterialCost = calculateCostSum(newData[props.currentDataIndex])
    overallcost.materialTotalCost = calculateTotalCost(newData);
    let totatcostcalculation = overallcost.VehicleTotalCost + overallcost.HumanTotalCost + overallcost.materialTotalCost + overallcost.totalFualCost;
    overallcost.TotalCost = totatcostcalculation;
    overallcost.Quatation = ((totatcostcalculation / 100) * 20) + totatcostcalculation;
    props.setData({ ...props.data, days: newData, costCalculation : overallcost });
  };

  return (
    <>
      <fieldset className='row mx-lg-1 mb-3 p-2 border border-1 rounded'>
        <div className="col-4 mb-5 px-0">
          <p className='w-100 text-start mb-1'>Materials</p>
          {MaterialData.map((item, index) => (
          <select className="form-select mb-3" key={index} value={item.materialValue} onChange={(e) => {handleMaterialChange(e, index)}} aria-label="Select Material">
            <option disabled value="" className='d-none'></option>
            <option value="1.5">Pk 1 Carton </option>
            <option value="1.51">PK 2 Carton</option>
            <option value="6.5">Wardrobe Carton</option>
            <option value="12">Ream of Paper</option>
            <option value="80">Bubble Blanket Roll</option>
            <option value="7.5">TV Wrap</option>
            <option value="4">Picture Wrap</option>
            <option value="0.6">Tape</option>
            <option value="3.5">Single Mattress Cover</option>
            <option value="2.5">Double Mattress Cover</option>
          </select>
          ))}
        </div>
        <div className="col-2 mb-5 ps-2 pe-0">
        </div>

        <div className="col-3 mb-5 ps-2 pe-0">
          <p className='w-100 text-start mb-1'>QTY</p>
          {MaterialData.map((item, index) => (
            <input type="number" className="form-control mb-3 bg-warning bg-opacity-10" value={item?.hours} onChange={(e) => {handleHoursChange(e, index)}} key={index} />
          ))}
        </div>
        <div className="col-3 mb-5 ps-2 pe-0">
          <p className='w-100 text-start mb-1'>Cost</p>
          {MaterialData.map((item, index) => (
          <input type="text" key={index} value={item?.cost} className="form-control mb-3 bg-success bg-opacity-10" />
          ))}
        </div>
        <div className="col-4 px-0"></div>
        <div className="col-2 ps-2 pe-0">
        </div>
        <div className="col-3 ps-2 pe-0"></div>
        <div className="col-3 ps-2 pe-0">
          <input type="text" readOnly className="form-control mb-3 bg-success bg-opacity-10" value={props?.data.days[props.currentDataIndex].totalMaterialCost} />
        </div>
        <div className="col-12 p-0">
          <button className="btn btn-primary" onClick={handleAddField}>Add Material</button>
        </div>
      </fieldset>
    </>
  )
}
