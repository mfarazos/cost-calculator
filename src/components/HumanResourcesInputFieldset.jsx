import React from 'react'

export default function HumanResourcesInputFieldset() {
  return (
    <fieldset className='row mx-lg-1 mb-3 p-2 border border-1 rounded'>
      <div className="col-4 mb-5 px-0">
        <p className='w-100 text-start mb-1'>Human resources</p>
        <select class="form-select mb-3" aria-label="Select Vehicle">
          <option disabled selected value className='d-none'></option>
          <option value="3.5T Driver">3.5T Driver</option>
          <option value="7.5T Driver">7.5T Driver</option>
          <option value="HGV Driver">HGV driver</option>
          <option value="Porter">Porter</option>
        </select>
      </div>
      <div className="col-2 mb-5 ps-2 pe-0">
        <p className='w-100 text-start mb-1'>No.</p>
        <input type="number" className="form-control mb-3" />
      </div>
      <div className="col-1 mb-5 ps-2 pe-0">
        <p className='w-100 text-start mb-1'>O/N</p>
        <div className="form-check">
        <input type="checkbox" className="form-check-input mb-3" />

        </div>
      </div>

      <div className="col-2 mb-5 ps-2 pe-0">
        <p className='w-100 text-start mb-1'>Hours</p>
        <input type="text" className="form-control mb-3 bg-warning bg-opacity-10" />
      </div>
      <div className="col-3 mb-5 ps-2 pe-0">
        <p className='w-100 text-start mb-1'>Cost</p>
        <input type="text" className="form-control mb-3 bg-success bg-opacity-10" />
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
        <button className="btn btn-primary">Add Human resource</button>
      </div>
    </fieldset>
  )
}
