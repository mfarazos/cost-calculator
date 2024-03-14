import React from 'react'

export default function TimeZoneFieldset(props) {


    const handleChangeCurrency = (e) => {
        //const newData = [...props.data.days];
         let cost = {...props.data.ZonePrice}
         let overallcost = {...props.data.costCalculation}
         //newData[props.currentDataIndex].others[index].currency = e.target.value
        // newData[props.currentDataIndex].drivers[index].cost = +(e.target.value) * +(newData[props.currentDataIndex].drivers[index].days);
        // let totalVehicleCost = calculateTotalCost(newData);
        // newData[props.currentDataIndex].totalVehicleCost = calculateCostSum(newData[props.currentDataIndex])
         cost.pricepercubicfeed = e.target.value;
         cost.TotalCost = cost.numberofcubicfeed * +(cost.pricepercubicfeed);
         let totatcostcalculation = props.data.ZonePrice.TotalCost + overallcost.other + overallcost.VehicleTotalCost + overallcost.HumanTotalCost + overallcost.materialTotalCost + overallcost.totalFualCost;
         overallcost.TotalCost = totatcostcalculation;
         overallcost.Quatation = ((totatcostcalculation / 100) * 20) + totatcostcalculation;
         props.setData({ ...props.data, ZonePrice: cost, costCalculation: overallcost });
      };

      const handleChangeCost = (e) => {
        //const newData = [...props.data.days];
         let cost = {...props.data.ZonePrice}
         let overallcost = {...props.data.costCalculation}
         //newData[props.currentDataIndex].others[index].currency = e.target.valueAsNumber
        // newData[props.currentDataIndex].drivers[index].cost = +(e.target.value) * +(newData[props.currentDataIndex].drivers[index].days);
        // let totalVehicleCost = calculateTotalCost(newData);
        // newData[props.currentDataIndex].totalVehicleCost = calculateCostSum(newData[props.currentDataIndex])
        cost.numberofcubicfeed = e.target.valueAsNumber 
        cost.TotalCost = e.target.valueAsNumber * +(cost.pricepercubicfeed);
          
         let totatcostcalculation = props.data.ZonePrice.TotalCost + overallcost.other + overallcost.VehicleTotalCost + overallcost.HumanTotalCost + overallcost.materialTotalCost + overallcost.totalFualCost;
         overallcost.TotalCost = totatcostcalculation;
         overallcost.Quatation = ((totatcostcalculation / 100) * 20) + totatcostcalculation;
         props.setData({ ...props.data, ZonePrice: cost, costCalculation: overallcost });
      };

    return (
        <fieldset className='row mt-5 mb-3 p-2 border border-1 rounded'>
            <div className="col-3 mb-4 px-0">
                <p className='w-100 text-start mb-1'>Eurozone</p>
                <select className="form-select" value={props.data.ZonePrice.pricepercubicfeed} aria-label="Select TimeZone" onChange={(e) => handleChangeCurrency(e)} >
                    <option disabled value="" className='d-none'></option>
                    <option value="10">North France</option>
                    <option value="20">South France</option>
                    <option value="30">North Germany</option>
                    <option value="40">South Germany</option>
                </select>
            </div>
            <div className="col-3 mb-4 ps-2 pe-0">
                <p className='w-100 text-start mb-1'>CuFt Price</p>
                <input type="number" readOnly className="form-control" value={+(props.data.ZonePrice.pricepercubicfeed) || 0} />
            </div>
            <div className="col-3 mb-4 ps-2 pe-0">
                <p className='w-100 text-start mb-1'>Cubic ft.</p>
                <input type="number" className="form-control" value={props.data.ZonePrice.numberofcubicfeed}  onChange={(e) => handleChangeCost(e)} />
            </div>
            <div className="col-3 mb-4 ps-2 pe-0">
                <p className='w-100 text-start mb-1'>Price</p>
                <input type="number" readOnly className="form-control" value={props.data.ZonePrice.TotalCost} />
            </div>
        </fieldset>
    )
}
