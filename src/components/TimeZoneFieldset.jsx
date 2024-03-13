import React from 'react'

export default function TimeZoneFieldset() {
    return (
        <fieldset className='row mt-5 mb-3 p-2 border border-1 rounded'>
            <div className="col-3 mb-4 px-0">
                <p className='w-100 text-start mb-1'>Eurozone</p>
                <select className="form-select" value={""} aria-label="Select TimeZone">
                    <option disabled value="" className='d-none'></option>
                    <option value="north_france">North France</option>
                    <option value="south_france">South France</option>
                    <option value="north_germany">North Germany</option>
                    <option value="south_germany">South Germany</option>
                </select>
            </div>
            <div className="col-3 mb-4 ps-2 pe-0">
                <p className='w-100 text-start mb-1'>CuFt Price</p>
                <input type="number" className="form-control" value="" />
            </div>
            <div className="col-3 mb-4 ps-2 pe-0">
                <p className='w-100 text-start mb-1'>Cubic ft.</p>
                <input type="number" className="form-control" value="" />
            </div>
            <div className="col-3 mb-4 ps-2 pe-0">
                <p className='w-100 text-start mb-1'>Price</p>
                <input type="number" className="form-control" value="" />
            </div>
        </fieldset>
    )
}
