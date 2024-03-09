import React from 'react'

export default function CostTypeInputFieldset() {
    return (
        <fieldset className='row my-3 p-2 px-lg-3 border border-1 rounded'>
            <div className="col-2 mb-5 px-0">
                <p className='w-100 text-start mb-1'>Cost Type</p>
                <select className="form-select mb-3" aria-label="Select Vehicle">
                    <option disabled selected value className='d-none'></option>
                    <option value="EuroTunnel">EuroTunnel</option>
                    <option value="Toll">Toll</option>
                    <option value="Manpower">Manpower</option>
                    <option value="Seafreight">Seafreight</option>
                    <option value="Destination Ratet">Destination Rate</option>
                    <option value="Sub Contract">Sub Contract</option>
                    <option value="Customs Clearance">Customs Clearance</option>
                </select>
            </div>
            <div className="col-2 mb-5 ps-2 pe-0">
                <p className='w-100 text-start mb-1'>Cost</p>
                <input type="number" className="form-control mb-3" />
            </div>
            <div className="col-2 mb-5 ps-2 pe-0">
                <p className='w-100 text-start mb-1'>Currency</p>
                <input type="text" className="form-control mb-3" />
            </div>
            <div className="col-2 mb-5 ps-2 pe-0">
                <p className='w-100 text-start mb-1'>Cost</p>
                <input type="number" className="form-control mb-3" />
            </div>
            <div className="col-2 mb-5 ps-2 pe-0">
                <p className='w-100 text-start mb-1'>Cost Notes</p>
                <input type="text" className="form-control mb-3" />
            </div>
            <div className="col-2 mb-5 ps-2 pe-0">
                <p className='w-100 text-start mb-1'>Margin</p>
                <input type="text" className="form-control mb-3" />
            </div>
            <div className="col-2 px-0"></div>
            <div className="col-2 ps-2 pe-0">
                <input type="text" readOnly className="form-control mb-3" />
            </div>
            <div className="col-2 ps-2 pe-0"></div>
            <div className="col-2 ps-2 pe-0">
            </div>
            <div className="col-2 ps-2 pe-0"></div>
            <div className="col-2 ps-2 pe-0">
                <input type="text" readOnly className="form-control mb-3" />
            </div>
            <div className="col-12 p-0">
        <button className="btn btn-primary">Add Other Cost</button>
      </div>
        </fieldset>
    )
}
