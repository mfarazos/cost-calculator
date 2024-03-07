import React from 'react'

export default function VehicleInputFieldset() {
  return (
    <>
    <fieldset className='row mx-lg-1 mb-2 p-2 border border-1 rounded'>
      <div className="col-2 mb-5 px-0">
        <p className='w-100 text-start mb-1'>Vehicles</p>
        <select class="form-select mb-3" aria-label="Select Vehicle">
          <option disabled selected value className='d-none'></option>
          <option value="3.5T">3.5T</option>
          <option value="7.5T">7.5T</option>
          <option value="HGV">HGV</option>
        </select>
      </div>
      <div className="col-2 mb-5 ps-2 pe-0">
        <p className='w-100 text-start mb-1'>Miles</p>
        <input type="number" className="form-control mb-3" />
      </div>
      <div className="col-2 mb-5 ps-2 pe-0">
        <p className='w-100 text-start mb-1'>KMS</p>
        <input type="number" className="form-control mb-3" />
      </div>
      <div className="col-2 mb-5 ps-2 pe-0">
        <p className='w-100 text-start mb-1'>No.</p>
        <input type="number" className="form-control mb-3" />
      </div>
      <div className="col-2 mb-5 ps-2 pe-0">
        <p className='w-100 text-start mb-1'>Fuel</p>
        <input type="text" className="form-control mb-3 bg-warning bg-opacity-10" />
      </div>
      <div className="col-2 mb-5 ps-2 pe-0">
        <p className='w-100 text-start mb-1'>Cost</p>
        <input type="text" className="form-control mb-3 bg-success bg-opacity-10" />
      </div>
      <div className="col-2 px-0"></div>
      <div className="col-2 ps-2 pe-0"></div>
      <div className="col-2 ps-2 pe-0"></div>
      <div className="col-2 ps-2 pe-0">
        <input type="text" readOnly className="form-control mb-3" />
      </div>
      <div className="col-2 ps-2 pe-0"></div>
      <div className="col-2 ps-2 pe-0">
        <input type="text" readOnly className="form-control mb-3 bg-success bg-opacity-10" />
      </div>
      <div className="col-12 p-0">
        <button className="btn btn-primary">Add Vehicle</button>
      </div>
    </fieldset>
    </>
  )
}
