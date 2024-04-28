import React from 'react';
import { AiOutlineClose } from "react-icons/ai";


export default function Schedular() {
    return (
        <div className="container my-4">
            <div className="row">
                <div className="col-12">
                    <fieldset className='card mb-3'>
                        <div class="card-header d-flex justify-content-between align-items-center">
                            <h5 className='mb-0'>Scheduling Days List</h5>
                            <button className='btn btn-primary'>Add Day</button>
                        </div>
                        <div className="card-body">
                            <div className="row">
                                <div className="col-1 pe-0">
                                    <p className='w-100 text-start mb-1'></p>
                                </div>
                                <div className="col-2 px-0">
                                    <p className='w-100 text-start mb-1'>Date/Time</p>
                                </div>
                                <div className="col-1 pe-0">
                                    <p className='w-100 text-start mb-1'>Clientname</p>
                                </div>
                                <div className="col-1 pe-0">
                                    <p className='w-100 text-start mb-1'>Vehicle</p>
                                </div>
                                <div className="col-1 pe-0">
                                    <p className='w-100 text-start mb-1'>Crew</p>
                                </div>
                                <div className="col-1 pe-0">
                                    <p className='w-100 text-start mb-1'>Forman</p>
                                </div>
                                <div className="col-1 pe-0">
                                    <p className='w-100 text-start mb-1'>Task</p>
                                </div>
                                <div className="col-1 pe-0">
                                    <p className='w-100 text-start mb-1'>Collection</p>
                                </div>
                                <div className="col-1 pe-0">
                                    <p className='w-100 text-start mb-1'>Delivery</p>
                                </div>
                                <div className="col-1 pe-0">
                                    <p className='w-100 text-start mb-1'>Volume</p>
                                </div>
                                <div className="col-1 pe-0">
                                    <p className='w-100 text-start mb-1'></p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-1 pe-0">
                                    <p className='w-100 text-start mb-1'>day 1</p>
                                </div>
                                <div className="col-2 px-0">
                                    <input type="datetime-local" class="form-control mb-3" />
                                </div>
                                <div className="col-1 pe-0">
                                    <input type="text" class="form-control mb-3" />
                                </div>
                                <div className="col-1 pe-0">
                                    <select className='form-select mb-3' aria-label='Select Vehicle'>
                                        <option disabled="" value="0" className="d-none"></option>
                                        <option value="option1">option1</option>
                                        <option value="option2">option2</option>
                                        <option value="option3">option3</option>
                                    </select>
                                </div>
                                <div className="col-1 pe-0">
                                    <select className='form-select mb-3' aria-label='Select Crew'>
                                        <option disabled="" value="0" className="d-none"></option>
                                        <option value="option1">option1</option>
                                        <option value="option2">option2</option>
                                        <option value="option3">option3</option>
                                    </select>
                                </div>
                                <div className="col-1 pe-0">
                                    <select className='form-select mb-3' aria-label='Select Forman'>
                                        <option disabled="" value="0" className="d-none"></option>
                                        <option value="option1">option1</option>
                                        <option value="option2">option2</option>
                                        <option value="option3">option3</option>
                                    </select>
                                </div>
                                <div className="col-1 pe-0">
                                <select className='form-select mb-3' aria-label='Select Task'>
                                        <option disabled="" value="0" className="d-none"></option>
                                        <option value="option1">option1</option>
                                        <option value="option2">option2</option>
                                        <option value="option3">option3</option>
                                    </select>                                </div>
                                <div className="col-1 pe-0">
                                    <input type="text" class="form-control mb-3" />
                                </div>
                                <div className="col-1 pe-0">
                                    <input type="text" class="form-control mb-3" />
                                </div>
                                <div className="col-1 pe-0">
                                    <input type="text" class="form-control mb-3" />
                                </div>
                                <div className="col-1 pe-0">
                                <button className="border-0 bg-transparent mb-3 form-control px-0" onClick={()=>{}} title='Remove This Field'><AiOutlineClose /></button>
                                </div>
                            </div>
                        </div>
                    </fieldset>
                </div>
                <div className="col-12">
                <button className='btn btn-primary w-25'>Schedule</button>
                </div>
            </div>
        </div>
    )
}
