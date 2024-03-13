import React, { useState } from 'react'

export default function CostTypeInputFieldset(props) {

    const [newField, setNewField] = useState({
        otherService:"",
        otherserviceValue: "",
        currency:"",
        currencyNotes:"",
        margin:"",
        cost:""
     });
  const OtherData = props.data && Array.isArray(props?.data.days[props.currentDataIndex].others) ? props?.data.days[props.currentDataIndex].others : [];


  const calculateTotalCost = (days) => {
    return days.reduce((totalSum, day) => totalSum + calculateCostSum(day), 0);
  };
  const calculateCostSum = (day) => {
    return day.others.reduce((sum, other) => sum + other.cost, 0);
  };

  const handleAddField = () => {
    props.setData((prevData) => {
      const updatedDays = prevData.days.map((day, index) => {
        if (index === props.currentDataIndex) {
          return { ...day, others: [...day.others, newField] };
        }
        return day;
      });
  
      return { ...prevData, days: updatedDays };
    });
  
    setNewField({
        otherService:"",
        otherserviceValue: "",
        currency:"",
        currencyNotes:"",
        margin:"",
        cost:""
     });
  };

  const handleOtherserviceChange = (e, index) => {
    const newData = [...props.data.days];
    // let overallcost = {...props.data.costCalculation}
     newData[props.currentDataIndex].others[index].otherService = e.target.options[e.target.selectedIndex].text;
     newData[props.currentDataIndex].others[index].otherserviceValue = e.target.value
    // newData[props.currentDataIndex].drivers[index].cost = +(e.target.value) * +(newData[props.currentDataIndex].drivers[index].days);
    // let totalVehicleCost = calculateTotalCost(newData);
    // newData[props.currentDataIndex].totalVehicleCost = calculateCostSum(newData[props.currentDataIndex])
    // overallcost.VehicleTotalCost = totalVehicleCost;
    // let totatcostcalculation = overallcost.VehicleTotalCost + overallcost.HumanTotalCost + overallcost.materialTotalCost + overallcost.totalFualCost;
    // overallcost.TotalCost = totatcostcalculation;
    // overallcost.Quatation = ((totatcostcalculation / 1000) * 20) + totatcostcalculation;
     props.setData({ ...props.data, days: newData });
  };

  const handleChangeCurrency = (e, index) => {
    const newData = [...props.data.days];
    // let overallcost = {...props.data.costCalculation}
     newData[props.currentDataIndex].others[index].currency = e.target.value
    // newData[props.currentDataIndex].drivers[index].cost = +(e.target.value) * +(newData[props.currentDataIndex].drivers[index].days);
    // let totalVehicleCost = calculateTotalCost(newData);
    // newData[props.currentDataIndex].totalVehicleCost = calculateCostSum(newData[props.currentDataIndex])
    // overallcost.VehicleTotalCost = totalVehicleCost;
    // let totatcostcalculation = overallcost.VehicleTotalCost + overallcost.HumanTotalCost + overallcost.materialTotalCost + overallcost.totalFualCost;
    // overallcost.TotalCost = totatcostcalculation;
    // overallcost.Quatation = ((totatcostcalculation / 1000) * 20) + totatcostcalculation;
     props.setData({ ...props.data, days: newData });
  };

  const handleChangeCurrencyNotes = (e, index) => {
    const newData = [...props.data.days];
    // let overallcost = {...props.data.costCalculation}
     newData[props.currentDataIndex].others[index].currencyNotes = e.target.value
    // newData[props.currentDataIndex].drivers[index].cost = +(e.target.value) * +(newData[props.currentDataIndex].drivers[index].days);
    // let totalVehicleCost = calculateTotalCost(newData);
    // newData[props.currentDataIndex].totalVehicleCost = calculateCostSum(newData[props.currentDataIndex])
    // overallcost.VehicleTotalCost = totalVehicleCost;
    // let totatcostcalculation = overallcost.VehicleTotalCost + overallcost.HumanTotalCost + overallcost.materialTotalCost + overallcost.totalFualCost;
    // overallcost.TotalCost = totatcostcalculation;
    // overallcost.Quatation = ((totatcostcalculation / 1000) * 20) + totatcostcalculation;
     props.setData({ ...props.data, days: newData });
  };

  const handleChangeCost = (e, index) => {
    const newData = [...props.data.days];
    // let overallcost = {...props.data.costCalculation}
     newData[props.currentDataIndex].others[index].cost = +(e.target.value)
     //newData[props.currentDataIndex].others[index].cost = +(e.target.value) * +(newData[props.currentDataIndex].drivers[index].days);
    // let totalVehicleCost = calculateTotalCost(newData);
    newData[props.currentDataIndex].totalOtherCost = calculateCostSum(newData[props.currentDataIndex])
    // overallcost.VehicleTotalCost = totalVehicleCost;
    // let totatcostcalculation = overallcost.VehicleTotalCost + overallcost.HumanTotalCost + overallcost.materialTotalCost + overallcost.totalFualCost;
    // overallcost.TotalCost = totatcostcalculation;
    // overallcost.Quatation = ((totatcostcalculation / 1000) * 20) + totatcostcalculation;
     props.setData({ ...props.data, days: newData });
  };

  const handleChangeMargin = (e, index) => {
    const newData = [...props.data.days];
    // let overallcost = {...props.data.costCalculation}
     newData[props.currentDataIndex].others[index].margin = e.target.value
    // newData[props.currentDataIndex].drivers[index].cost = +(e.target.value) * +(newData[props.currentDataIndex].drivers[index].days);
    // let totalVehicleCost = calculateTotalCost(newData);
    // newData[props.currentDataIndex].totalVehicleCost = calculateCostSum(newData[props.currentDataIndex])
    // overallcost.VehicleTotalCost = totalVehicleCost;
    // let totatcostcalculation = overallcost.VehicleTotalCost + overallcost.HumanTotalCost + overallcost.materialTotalCost + overallcost.totalFualCost;
    // overallcost.TotalCost = totatcostcalculation;
    // overallcost.Quatation = ((totatcostcalculation / 1000) * 20) + totatcostcalculation;
     props.setData({ ...props.data, days: newData });
  };


    return (
        <fieldset className='row my-3 p-2 px-lg-3 border border-1 rounded'>
            <div className="col-2 mb-5 px-0">
                <p className='w-100 text-start mb-1'>Cost Type</p>
                {OtherData.map((item, index) => (
                <select className="form-select mb-3" aria-label="Select Vehicle" key={index} value={item?.driver_value} onChange={(e) => handleOtherserviceChange(e, index)}>
                    <option disabled selected value className='d-none'></option>
                    <option value="EuroTunnel">EuroTunnel</option>
                    <option value="Toll">Toll</option>
                    <option value="Manpower">Manpower</option>
                    <option value="Seafreight">Seafreight</option>
                    <option value="Destination Ratet">Destination Rate</option>
                    <option value="Sub Contract">Sub Contract</option>
                    <option value="Customs Clearance">Customs Clearance</option>
                </select>
                 ))}
            </div>
            
            <div className="col-2 mb-5 ps-2 pe-0">
                <p className='w-100 text-start mb-1'>Currency</p>
                {OtherData.map((item, index) => ( <input type="text" value={item?.currency} onChange={(e) => handleChangeCurrency(e, index)} className="form-control mb-3" />))}
            </div>
            <div className="col-2 mb-5 ps-2 pe-0">
                <p className='w-100 text-start mb-1'>Cost</p>
                {OtherData.map((item, index) => ( <input type="number" value={item?.cost} onChange={(e) => handleChangeCost(e, index)} className="form-control mb-3" />))}
            </div>
            <div className="col-2 mb-5 ps-2 pe-0">
                <p className='w-100 text-start mb-1'>Cost Notes</p>
                {OtherData.map((item, index) => ( <input type="text" value={item?.currencyNotes} onChange={(e) => handleChangeCurrencyNotes(e, index)} className="form-control mb-3" />))}
            </div>
            <div className="col-2 mb-5 ps-2 pe-0">
                <p className='w-100 text-start mb-1'>Margin</p>
                {OtherData.map((item, index) => ( <input type="text" value={item?.margin} onChange={(e) => handleChangeMargin(e, index)} className="form-control mb-3" />))}
            </div>
            <div className="col-2 px-0"></div>
            
            <div className="col-2 ps-2 pe-0"></div>
            <div className="col-2 ps-2 pe-0">
            </div>
            <div className="col-2 ps-2 pe-0"></div>
            <div className="col-2 ps-2 pe-0">
            <p className='w-100 text-start mb-1'>Total Other Cost</p>
                <input type="text" readOnly className="form-control mb-3" value={props?.data.days[props.currentDataIndex].totalOtherCost} />
            </div>
            <div className="col-12 p-0">
        <button className="btn btn-primary" onClick={handleAddField}>Add Other Cost</button>
      </div>
        </fieldset>
    )
}
