import './App.css';

const App = () => {
  return (
    <div className="container my-4">
      <div className="row">
        <div className="col-lg-4 col-12">
          <fieldset className='row p-2 mb-3 border border-1 rounded'>
            <div className="col-4 pe-0">
              <p className='w-100 text-start mb-1'>Day</p>
              <select class="form-select mb-3" aria-label="Select Day">
                <option disabled selected value className='d-none'></option>
                <option value="Weekend">Weekend</option>
                <option value="Saturday">Saturday</option>
                <option value="Sunday">Sunday</option>
              </select>
            </div>
            <div className="col-8">
              <p className='w-100 text-start mb-1'>Task</p>
              <input type="text mb-3" className="form-control" />
            </div>
          </fieldset>
        </div>
        <div className="col-lg-5 col-12">
          <fieldset className='row mx-lg-1 mb-3 p-2 border border-1 rounded'>
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
              {/* <input type="text" readOnly className="form-control mb-3 bg-success bg-opacity-10" /> */}
            </div>
          </fieldset>

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
            <div className="col-2 mb-5 ps-2 pe-0">
              <p className='w-100 text-start mb-1'>O/N</p>
              <input type="number" className="form-control mb-3" />
            </div>
            
            <div className="col-2 mb-5 ps-2 pe-0">
              <p className='w-100 text-start mb-1'>Hours</p>
              <input type="text" className="form-control mb-3 bg-warning bg-opacity-10" />
            </div>
            <div className="col-2 mb-5 ps-2 pe-0">
              <p className='w-100 text-start mb-1'>Cost</p>
              <input type="text" className="form-control mb-3 bg-success bg-opacity-10" />
            </div>
            <div className="col-4 px-0"></div>
            <div className="col-2 ps-2 pe-0">
              <input type="text" readOnly className="form-control mb-3" />
            </div>
            <div className="col-2 ps-2 pe-0"></div>
            <div className="col-2 ps-2 pe-0"></div>
            <div className="col-2 ps-2 pe-0">
              <input type="text" readOnly className="form-control mb-3 bg-success bg-opacity-10" />
            </div>
          </fieldset>

          <fieldset className='row mx-lg-1 mb-3 p-2 border border-1 rounded'>
            <div className="col-4 mb-5 px-0">
              <p className='w-100 text-start mb-1'>Materials</p>
              <select class="form-select mb-3" aria-label="Select Vehicle">
                <option disabled selected value className='d-none'></option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
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
          </fieldset>
        </div>
        <div className="col-lg-3 col-12">
          <fieldset className='row p-2 border border-1 rounded'>
            <div className="col-12">
              <div class="mb-3 row">
                <label for="Vehicle-Total-cost" class="col-3 col-form-label">Vehicle</label>
                <div class="col-9">
                  <input type="text" readonly id='Vehicle-Total-cost' class="form-control" value="" />
                </div>
              </div>
              <div class="mb-3 row">
                <label for="Fuel-Total-cost" class="col-3 col-form-label">Fuel</label>
                <div class="col-9">
                  <input type="text" readonly id='Fuel-Total-cost' class="form-control" value="" />
                </div>
              </div>
              <div class="mb-3 row">
                <label for="Human-Total-cost" class="col-3 col-form-label">Human</label>
                <div class="col-9">
                  <input type="text" readonly id='Human-Total-cost' class="form-control" value="" />
                </div>
              </div>
              <div class="mb-3 row">
                <label for="Material-Total-cost" class="col-3 col-form-label">Material</label>
                <div class="col-9">
                  <input type="text" readonly id='Material-Total-cost' class="form-control" value="" />
                </div>
              </div>
              <hr />
              <div class="mb-3 row">
                <label for="Fixed-Total-cost" class="col-3 col-form-label">Fixed</label>
                <div class="col-9">
                  <input type="text" readonly id='Fixed-Total-cost' class="form-control" value="" />
                </div>
              </div>
              <hr />
              <div class="mb-3 row">
                <label for="Cost-Total-cost" class="col-3 col-form-label">Cost</label>
                <div class="col-9">
                  <input type="text" readonly id='Cost-Total-cost' class="form-control" value="" />
                </div>
              </div>
              <div class="mb-3 row">
                <label for="Markup-Total-cost" class="col-3 col-form-label">Markup</label>
                <div class="col-9">
                  <input min={0} max={100} type="number" id='Markup-Total-cost' class="form-control" value="" />
                </div>
              </div>
              <div class="mb-3 row">
                <label for="Other-Total-cost" class="col-3 col-form-label">Other</label>
                <div class="col-9">
                  <input type="text" readonly id='Other-Total-cost' class="form-control" value="" />
                </div>
              </div>
              <hr />
              <div class="mb-3 row">
                <label for="Quote-Total-cost" class="col-3 col-form-label">Quote</label>
                <div class="col-9">
                  <input type="text" readonly id='Quote-Total-cost' class="form-control" value="" />
                </div>
              </div>
              <div className="actions my-4 d-flex justify-content-between">
                <button type="button" class="btn btn-primary fs-4 fw-bolder">Σ</button>
                <button type="button" class="btn btn-secondary px-5 fw-bold">Accept</button>
              </div>
              <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="show-resource-detail" />
                <label class="form-check-label" for="show-resource-detail">
                  Show Resource Details
                </label>
              </div>
              <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="show-material-cost" />
                <label class="form-check-label" for="show-material-cost">
                  Show Material Cost
                </label>
              </div>

            </div>
          </fieldset>
        </div>
        <div className="col-12">
        <fieldset className='row my-3 p-2 px-lg-3 border border-1 rounded'>
            <div className="col-2 mb-5 px-0">
              <p className='w-100 text-start mb-1'>Cost Type</p>
              <select class="form-select mb-3" aria-label="Select Vehicle">
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
          </fieldset>
        </div>
      </div>
    </div>
  )
}

export default App;
