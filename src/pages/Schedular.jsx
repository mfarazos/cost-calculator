import React, { useEffect, useState } from 'react';
import { AiOutlineClose } from "react-icons/ai";
import axios from 'axios';
import Swal from "sweetalert2";


export default function Schedular({ adminData }) {
    const [scheduleData, setScheduleData] = useState([]);
    const [newField, setNewField] = useState({})

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

    useEffect(()=> {
        setNewField({ ...scheduleData[0], date: "", task: "", vehicle: "", crew: "", foreman: ""});
    }, [scheduleData])

    const handleRemoveField = (indexToRemove) => {
        setScheduleData((prevData) => {
            return prevData.filter((item, index) => index !== indexToRemove)
        })
    }
    const handleAddField = () => {
        setScheduleData((prevData) => {
            return [...prevData, newField]
        })
    }

    const handleschedule = async () => {
        console.log("adminData", scheduleData)

    try {


      const response = await axios.post('https://apps.leadsmovinghomecompany.com/costingapp/addDate', { scheduleData: scheduleData });
      //console.log(response.data.success);
      if (response) {
        Swal.fire({
          title: 'success',
          text: "Sucessfuly Schedule Your Data",
          icon: "success",
        });

      }


    } catch (error) {
      console.log(error);
      Swal.fire({
        title: 'error',
        text: error,
        icon: "error",
      });
    }
    }
    // const handleDate = (index, newDate) => {
    //     setScheduleData(prevData => {
    //         const updatedSchedule = [...prevData];
    //         updatedSchedule[index] = { ...updatedSchedule[index], date: newDate };
    //         return updatedSchedule;
    //     });
    // };

    const handleFieldChange = (index, fieldName, newValue) => {
        setScheduleData(prevData => {
            const updatedSchedule = [...prevData];
            updatedSchedule[index] = { ...updatedSchedule[index], [fieldName]: newValue };
            return updatedSchedule;
        });
    };
    return (
        <>        <div className="container my-4">
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
                                                <input type="datetime-local" className="form-control mb-3" value={item?.date} onChange={(e) => handleFieldChange(index, 'date', e.target.value)} />
                                            </div>
                                            <div className="col-2 pe-0">
                                                <input type="text" className="form-control mb-3" value={item?.clientName} readOnly />
                                            </div>
                                            <div className="col-2 pe-0">
                                                <select className='form-select mb-3' aria-label='Select Task' value={item?.task} onChange={(e) => handleFieldChange(index, 'task', e.target.value)}>
                                                    <option disabled="" value="0" className="d-none"></option>
                                                    {(!adminData?.taskData?.taskDataOptions.find((taskItem) => taskItem.name === item.task) && item.task !== "" )&& (
                                                        <option value={item.task}>{item.task}</option>
                                                    )}
                                                    {adminData?.taskData?.taskDataOptions.map((item, innerIndex)=>(
                                                        <option style={{whiteSpace: "initial"}} value={item?.name} index={innerIndex}>{item?.name}</option>
                                                    ))}
                                                </select>
                                            </div>
                                            <div className="col-2 pe-0">
                                                <input type="text" className="form-control mb-3" value={item?.volume} readOnly />
                                            </div>
                                            <div className="col-2 pe-0">
                                                <select className='form-select mb-3' aria-label='Select Vehicle' value={item?.vehicle} onChange={(e) => handleFieldChange(index, 'vehicle', e.target.value)}>
                                                    <option disabled="" value="" className="d-none"></option>
                                                    {(!adminData?.scheduleVehicleData?.scheduleVehicleDataOptions.find((Item) => Item.name === item.vehicle) && item.vehicle !=="" ) && (
                                                        <option value={item.vehicle}>{item.vehicle}</option>
                                                    )}
                                                    {adminData?.scheduleVehicleData?.scheduleVehicleDataOptions.map((item, innerIndex)=>(
                                                        <option style={{whiteSpace: "initial"}} value={item?.name} index={innerIndex}>{item?.name}</option>
                                                    ))}
                                                </select>
                                            </div>
                                            <div className="col-2 pe-0">
                                                <select className='form-select mb-3' aria-label='Select Crew' value={item?.crew} onChange={(e) => handleFieldChange(index, 'crew', e.target.value)}>
                                                    <option disabled="" value="0" className="d-none"></option>
                                                    {(!adminData?.scheduleCrewData?.scheduleCrewDataOptions.find((Item) => Item.name === item.crew) && item.crew !=="" ) && (
                                                        <option value={item.crew}>{item.crew}</option>
                                                    )}
                                                    {adminData?.scheduleCrewData?.scheduleCrewDataOptions.map((item, innerIndex)=>(
                                                        <option style={{whiteSpace: "initial"}} value={item?.name} index={innerIndex}>{item?.name}</option>
                                                    ))}
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
                                                <select className='form-select mb-3' aria-label='Select Forman' value={item?.foreman} onChange={(e) => handleFieldChange(index, 'foreman', e.target.value)}>
                                                    <option disabled="" value="" className="d-none"></option>
                                                    {(!adminData?.scheduleFormanData?.scheduleFormanDataOptions.find((Item) => Item.name === item.foreman) && item.foreman !=="" ) && (
                                                        <option value={item.foreman}>{item.foreman}</option>
                                                    )}
                                                    {adminData?.scheduleFormanData?.scheduleFormanDataOptions.map((item, innerIndex)=>(
                                                        <option style={{whiteSpace: "initial"}} value={item?.name} index={innerIndex}>{item?.name}</option>
                                                    ))}
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
                    <button className='btn btn-outline-custom px-4 py-1' onClick={handleAddField}><span className='px-2'>Add Day</span></button>
                    <button className='btn btn-primary bg-custom-color px-4 py-1' onClick={handleschedule}><span className=' px-2'>Schedule</span></button>
                </div>
            </div>
        </div>
        </>
    )
}
