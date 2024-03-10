import React from 'react'
import axios from 'axios';

export default function CostCalculationFieldset(props) {
 
async function submitForm(){
  try {
    const response = await axios.post('http://localhost:3002/api/insertFormData', { DealId: "345gfgt", formData: props.data });
    if(response.data){
     alert("Sucessfuly submit your form");
    }
 } catch (error) {
    console.log(error);
 }
}  
  return (
    <fieldset className='row p-2 border border-1 rounded'>
      <div className="col-12">
        <div className="mb-3 row">
          <label htmlFor="Vehicle-Total-cost" className="col-3 col-form-label">Vehicle</label>
          <div className="col-9">
            <input type="text" readOnly id='Vehicle-Total-cost' className="form-control" value={props.data.costCalculation?.VehicleTotalCost}  />
          </div>
        </div>
        <div className="mb-3 row">
          <label htmlFor="Fuel-Total-cost" className="col-3 col-form-label">Fuel</label>
          <div className="col-9">
            <input type="text" readOnly id='Fuel-Total-cost' className="form-control" value={props.data.costCalculation?.totalFualCost} />
          </div>
        </div>
        <div className="mb-3 row">
          <label htmlFor="Human-Total-cost" className="col-3 col-form-label">Human</label>
          <div className="col-9">
            <input type="text" readOnly id='Human-Total-cost' className="form-control" value={props.data?.costCalculation?.HumanTotalCost} />
          </div>
        </div>
        <div className="mb-3 row">
          <label htmlFor="Material-Total-cost" className="col-3 col-form-label">Material</label>
          <div className="col-9">
            <input type="text" readOnly id='Material-Total-cost' className="form-control" value={props.data.costCalculation?.materialTotalCost} />
          </div>
        </div>
        <hr />
        <div className="mb-3 row">
          <label htmlFor="Fixed-Total-cost" className="col-3 col-form-label">Fixed</label>
          <div className="col-9">
            <input type="text" readOnly id='Fixed-Total-cost' className="form-control" value={props.data.costCalculation.Fixed} />
          </div>
        </div>
        <hr />
        <div className="mb-3 row">
          <label htmlFor="Cost-Total-cost" className="col-3 col-form-label">Cost</label>
          <div className="col-9">
            <input type="text" readOnly id='Cost-Total-cost' className="form-control" value={props.data.costCalculation.TotalCost} />
          </div>
        </div>
        <div className="mb-3 row">
          <label htmlFor="Markup-Total-cost" className="col-3 col-form-label">Markup</label>
          <div className="col-9">
            <input min={0} max={100} type="number" id='Markup-Total-cost' className="form-control" value={props.data.costCalculation.markep} />
          </div>
        </div>
        <div className="mb-3 row">
          <label htmlFor="Other-Total-cost" className="col-3 col-form-label">Other</label>
          <div className="col-9">
            <input type="text" readOnly id='Other-Total-cost' className="form-control" value={props.data.costCalculation.other} />
          </div>
        </div>
        <hr />
        <div className="mb-3 row">
          <label htmlFor="Quote-Total-cost" className="col-3 col-form-label">Quote</label>
          <div className="col-9">
            <input type="text" readOnly id='Quote-Total-cost' className="form-control" value={props.data.costCalculation.Quatation} />
          </div>
        </div>
        <div className="actions my-4 d-flex justify-content-between">
          <button type="button" className="btn btn-primary fs-4 fw-bolder">Σ</button>
          <button type="button" onClick={submitForm()} className="btn btn-secondary px-5 fw-bold">Accept</button>
        </div>
        <div className="form-check mb-2">
          <input className="form-check-input" type="checkbox" value="" id="show-resource-detail" />
          <label className="form-check-label" htmlFor="show-resource-detail">
            Show Resource Details
          </label>
        </div>
        <div className="form-check">
          <input className="form-check-input" type="checkbox" value="" id="show-material-cost" />
          <label className="form-check-label" htmlFor="show-material-cost">
            Show Material Cost
          </label>
        </div>
      </div>
    </fieldset>
  )
}
