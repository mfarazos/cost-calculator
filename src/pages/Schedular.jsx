import React, { useEffect, useState } from 'react';
import { AiOutlineClose } from "react-icons/ai";
import axios from 'axios';


export default function Schedular() {
    const [scheduleData, setScheduleData] = useState([]);
    const [newField, setNewField] = useState({
        clientName: "",
        collectionAccess: "",
        collectionAddress: "",
        crew: "",
        date: "",
        day: "",
        deliveryAccess: "",
        deliveryAddress: "",
        foreman: "",
        task: "",
        vehicle: "",
        volume: ""
    })

    useEffect(() => {
        console.log("scheduleData", scheduleData);
    }, [scheduleData])

    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        const dealId = params.get('deal_id');
        if (!dealId) {
            return;
        }
        (async () => {
            try {
                console.log("params", dealId);
                const response = await axios.post('https://apps.leadsmovinghomecompany.com/costingapp/hubspotData', { DealId: dealId });
                console.log(response.data.success);
                if (response.data.success) {
                    setScheduleData(response.data.data);
                }
            } catch (error) {
                console.log(error);
            }

        })();

    }, [])

    const handleRemoveField = (indexToRemove) => {
        setScheduleData((prevData) => {
            return prevData.filter((item, index) => index !== indexToRemove)
        })
    }
    const handleAddField = () => {
        setScheduleData((prevData) => {
            return [...prevData, newField]
        })
        setNewField({
            clientName: "",
            collectionAccess: "",
            collectionAddress: "",
            crew: "",
            date: "",
            day: "",
            deliveryAccess: "",
            deliveryAddress: "",
            foreman: "",
            task: "",
            vehicle: "",
            volume: ""
        })
    }
    return (
        <div className="container my-4">
            <div className="row">
                <div className="col-12 mb-3">
                    <fieldset className='card'>
                        <div className="card-header d-flex justify-content-between align-items-center border-bottom-0">
                            <h5 className='mb-0'>Scheduling Days List</h5>
                        </div>
                    </fieldset>
                    {scheduleData?.map((item, index) => (
                        <fieldset className='card border-top-0' key={index}>
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-1 pe-0">
                                        <p className='w-100 text-start mb-1'></p>
                                    </div>
                                    <div className="col-10">
                                        <div className="row">
                                            <div className="col-2 px-0">
                                                <p className='w-100 text-start mb-1'>Date/Time</p>
                                            </div>
                                            <div className="col-2 pe-0">
                                                <p className='w-100 text-start mb-1'>Client Name</p>
                                            </div>
                                            <div className="col-2 pe-0">
                                                <p className='w-100 text-start mb-1'>Task</p>
                                            </div>
                                            <div className="col-2 pe-0">
                                                <p className='w-100 text-start mb-1'>Volume</p>
                                            </div>
                                            <div className="col-2 pe-0">
                                                <p className='w-100 text-start mb-1'>Vehicle</p>
                                            </div>
                                            <div className="col-2 pe-0">
                                                <p className='w-100 text-start mb-1'>Crew</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-1 pe-0">
                                        <p className='w-100 text-start mb-1'></p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-1 pe-0">
                                        <p className='w-100 text-start mb-1'>day {index + 1}</p>
                                    </div>
                                    <div className="col-10">
                                        <div className="row">
                                            <div className="col-2 px-0">
                                                <input type="datetime-local" className="form-control mb-3" value={item?.date} />
                                            </div>
                                            <div className="col-2 pe-0">
                                                <input type="text" className="form-control mb-3" value={item?.clientName} readOnly />
                                            </div>
                                            <div className="col-2 pe-0">
                                                <input type="text" className="form-control mb-3" value={item?.task} readOnly />
                                            </div>
                                            <div className="col-2 pe-0">
                                                <input type="text" className="form-control mb-3" value={item?.volume} readOnly />
                                            </div>
                                            <div className="col-2 pe-0">
                                                <select className='form-select mb-3' aria-label='Select Vehicle' value={item?.vehicle}>
                                                    <option disabled="" value="0" className="d-none"></option>
                                                    <option value="option1">option1</option>
                                                    <option value="option2">option2</option>
                                                    <option value="option3">option3</option>
                                                </select>
                                            </div>
                                            <div className="col-2 pe-0">
                                                <select className='form-select mb-3' aria-label='Select Crew' value={item?.crew}>
                                                    <option disabled="" value="0" className="d-none"></option>
                                                    <option value="option1">option1</option>
                                                    <option value="option2">option2</option>
                                                    <option value="option3">option3</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-1 pe-0">
                                        {scheduleData.length > 1 && (
                                            <button className="border-0 bg-transparent mb-3 form-control px-0" onClick={() => { handleRemoveField(index) }} title='Remove This Field'><AiOutlineClose /></button>
                                        )}
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-1 pe-0">
                                        <p className='w-100 text-start mb-1'></p>
                                    </div>
                                    <div className="col-10">
                                        <div className="row">

                                            <div className="col-2 px-0">
                                                <p className='w-100 text-start mb-1'>Forman</p>
                                            </div>

                                            <div className="col-2 pe-0">
                                                <p className='w-100 text-start mb-1'>Collection Address</p>
                                            </div>
                                            <div className="col-2 pe-0">
                                                <p className='w-100 text-start mb-1'>Collection Access</p>
                                            </div>
                                            <div className="col-2 pe-0">
                                                <p className='w-100 text-start mb-1'>Delivery Address</p>
                                            </div>
                                            <div className="col-2 pe-0">
                                                <p className='w-100 text-start mb-1'>Delivery Access</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-1 pe-0">
                                        <p className='w-100 text-start mb-1'></p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-1 pe-0">
                                    </div>
                                    <div className="col-10">
                                        <div className="row">
                                            <div className="col-2 px-0">
                                                <select className='form-select mb-3' aria-label='Select Forman' value={item?.foreman}>
                                                    <option disabled="" value="0" className="d-none"></option>
                                                    <option value="option1">option1</option>
                                                    <option value="option2">option2</option>
                                                    <option value="option3">option3</option>
                                                </select>
                                            </div>
                                            <div className="col-2 pe-0">
                                                <input type="text" className="form-control mb-3" value={item?.collectionAddress} readOnly />
                                            </div>
                                            <div className="col-2 pe-0">
                                                <input type="text" className="form-control mb-3" value={item?.collectionAccess} readOnly />
                                            </div>
                                            <div className="col-2 pe-0">
                                                <input type="text" className="form-control mb-3" value={item?.deliveryAddress} readOnly />
                                            </div>
                                            <div className="col-2 pe-0">
                                                <input type="text" className="form-control mb-3" value={item?.deliveryAccess} readOnly />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-1 pe-0">
                                    </div>
                                </div>
                            </div>
                        </fieldset>
                    ))}
                </div>
                <div className="col-12 d-flex align-items-center justify-content-center gap-2">
                    <button className='btn btn-secondary px-4 py-1' onClick={handleAddField}>Add Day</button>
                    <button className='btn btn-primary px-4 py-1'>Schedule</button>
                </div>
            </div>
        </div>
    )
}
