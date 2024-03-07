import React from 'react'

export default function CostCalculationFieldset() {
  return (
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
  )
}
