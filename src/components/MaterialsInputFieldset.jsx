import React from 'react'

export default function MaterialsInputFieldset() {
  return (
    <>
      <fieldset className='row mx-lg-1 mb-3 p-2 border border-1 rounded'>
        <div className="col-4 mb-5 px-0">
          <p className='w-100 text-start mb-1'>Materials</p>
          <select class="form-select mb-3" aria-label="Select Vehicle">
            <option disabled selected value className='d-none'></option>
            <option value="1">Pk 1 Carton </option>
            <option value="2">PK 2 Carton</option>
            <option value="3">Wardrobe Carton</option>
            <option value="3">Ream of Paper</option>
            <option value="3">Bubble Blanket Roll</option>
            <option value="3">TV wrap</option>
            <option value="3">Picture wrap</option>
            <option value="3">Tape</option>
            <option value="3">Single Mattress Cover</option>
            <option value="3">Double Mattress Cover</option>
          </select>
        </div>
        <div className="col-2 mb-5 ps-2 pe-0">
        </div>

        <div className="col-3 mb-5 ps-2 pe-0">
          <p className='w-100 text-start mb-1'>Hours</p>
          <input type="text" className="form-control mb-3 bg-warning bg-opacity-10" />
        </div>
        <div className="col-3 mb-5 ps-2 pe-0">
          <p className='w-100 text-start mb-1'>Cost</p>
          <input type="text" className="form-control mb-3 bg-success bg-opacity-10" />
        </div>
        <div className="col-4 px-0"></div>
        <div className="col-2 ps-2 pe-0">
        </div>
        <div className="col-3 ps-2 pe-0"></div>
        <div className="col-3 ps-2 pe-0">
          <input type="text" readOnly className="form-control mb-3 bg-success bg-opacity-10" />
        </div>
        <div className="col-12 p-0">
          <button className="btn btn-primary">Add Material</button>
        </div>
      </fieldset>
    </>
  )
}
