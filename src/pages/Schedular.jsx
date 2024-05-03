import React, { useEffect, useState } from 'react';
import { AiOutlineClose } from "react-icons/ai";
import axios from 'axios';
import Swal from "sweetalert2";
import { TextField, MenuItem, InputLabel, FormControl, Select, OutlinedInput } from '@mui/material';


export default function Schedular({ adminData }) {
    const [scheduleData, setScheduleData] = useState([]);
    const [newField, setNewField] = useState({})

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

    useEffect(() => {
        setNewField({ ...scheduleData[0], date: "", task: "", vehicle: "", crew: [], foreman: "" });
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
            const params = new URLSearchParams(window.location.search);
            const dealId = params.get('deal_id');
            if (!dealId) {
                return;
            }
            const response = await axios.post('https://apps.leadsmovinghomecompany.com/costingapp/addDate', { dealId: dealId, scheduleData: scheduleData });
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

    const handleFieldChange = (index, fieldName, newValue) => {
        setScheduleData(prevData => {
            const updatedSchedule = [...prevData];
            updatedSchedule[index] = { ...updatedSchedule[index], [fieldName]: newValue };
            return updatedSchedule;
        });
    };
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
                                <div className="row mb-2">
                                    <div className="col-1 pe-0">
                                        <p className='w-100 text-start mb-1'>day {index + 1}</p>
                                    </div>
                                    <div className="col-10">
                                        <div className="row">
                                            <div className="col-6 col-lg-2 px-0">
                                                <TextField type='datetime-local' InputLabelProps={{ shrink: true }} size="small" className='w-100' label="Date/Time" value={item?.date} onChange={(e) => handleFieldChange(index, 'date', e.target.value)} />
                                            </div>
                                            <div className="col-6 col-lg-2 pe-0">
                                                <TextField type='text' label="Client Name" InputLabelProps={{ shrink: true }} size="small" value={item?.clientName} readOnly />
                                            </div>
                                            <div className="col-6 col-lg-2 pe-0">
                                                <FormControl className='w-100' size="small">
                                                    <InputLabel id="label-vehicle" shrink={true}>Task</InputLabel>
                                                    <Select
                                                        labelId="simple-select-task-label"
                                                        id="simple-select-task"
                                                        value={item?.task}
                                                        onChange={(e) => handleFieldChange(index, 'task', e.target.value)}
                                                        input={<OutlinedInput label="Task" notched={true} />}>
                                                        {(!adminData?.taskData?.taskDataOptions.find((taskItem) => taskItem.name === item.task) && item.task !== "") && (
                                                            <MenuItem value={item.task}>{item.task}</MenuItem>
                                                        )}
                                                        {adminData?.taskData?.taskDataOptions.map((item, innerIndex) => (
                                                            <MenuItem value={item?.name} index={innerIndex}>{item?.name}</MenuItem>
                                                        ))}
                                                    </Select>
                                                </FormControl>
                                            </div>
                                            <div className="col-6 col-lg-2 pe-0">
                                                <TextField type='text' label="Volume" InputLabelProps={{ shrink: true }} size="small" value={item?.volume} readOnly />
                                            </div>
                                            <div className="col-6 col-lg-2 pe-0">
                                                <FormControl className='w-100' size="small">
                                                    <InputLabel id="label-vehicle" shrink={true}>Vehicle</InputLabel>
                                                    <Select
                                                        labelId="simple-select-vehicle-label"
                                                        id="simple-select-vehicle"
                                                        value={item?.vehicle}
                                                        onChange={(e) => handleFieldChange(index, 'vehicle', e.target.value)}
                                                        input={<OutlinedInput label="Vehicle" notched={true} />}
                                                    >
                                                        {(!adminData?.scheduleVehicleData?.scheduleVehicleDataOptions.find((Item) => Item.name === item.vehicle) && item.vehicle !== "") && (
                                                            <MenuItem value={item.vehicle}>{item.vehicle}</MenuItem>
                                                        )}
                                                        {adminData?.scheduleVehicleData?.scheduleVehicleDataOptions.map((item, innerIndex) => (
                                                            <MenuItem value={item?.name} index={innerIndex}>{item?.name}</MenuItem>
                                                        ))}
                                                    </Select>
                                                </FormControl>

                                            </div>
                                            <div className="col-6 col-lg-2 pe-0">
                                                <FormControl className='w-100' size="small">
                                                    <InputLabel id="label-crew" shrink={true}>Crew</InputLabel>

                                                    <Select
                                                        labelId="demo-multiple-name-label"
                                                        id="demo-multiple-name"
                                                        multiple
                                                        value={item?.crew}
                                                        onChange={(e) => handleFieldChange(index, 'crew', e.target.value)}
                                                        input={<OutlinedInput label="Crew" notched={true} />}
                                                    >
                                                        {adminData?.scheduleCrewData?.scheduleCrewDataOptions.map((item, innerIndex) => (
                                                            <MenuItem value={item?.name} index={innerIndex}>{item?.name}</MenuItem>
                                                        ))}
                                                    </Select>
                                                </FormControl>
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
                                    <div className="col-1 d-lg-block d-none pe-0">
                                    </div>
                                    <div className="col-10">
                                        <div className="row">
                                            <div className="col-6 col-lg-2 px-0">
                                                <FormControl className='w-100' size="small">
                                                    <InputLabel id="label-forman" shrink={true}>Forman</InputLabel>
                                                    <Select
                                                        labelId="simple-select-forman-label"
                                                        id="simple-select-forman"
                                                        value={item?.foreman}
                                                        onChange={(e) => handleFieldChange(index, 'foreman', e.target.value)}
                                                        input={<OutlinedInput label="Foreman" notched={true} />}
                                                    >
                                                        {(!adminData?.scheduleFormanData?.scheduleFormanDataOptions.find((Item) => Item.name === item.foreman) && item.foreman !== "") && (
                                                            <MenuItem value={item.foreman}>{item.foreman}</MenuItem>
                                                        )}
                                                        {adminData?.scheduleFormanData?.scheduleFormanDataOptions.map((item, innerIndex) => (
                                                            <MenuItem value={item?.name} index={innerIndex}>{item?.name}</MenuItem>
                                                        ))}
                                                    </Select>
                                                </FormControl>
                                            </div>
                                            <div className="col-6 col-lg-2 pe-0">
                                                <TextField type='text' label="Collection Address" InputLabelProps={{ shrink: true }} size="small" value={item?.collectionAddress} readOnly />
                                            </div>
                                            <div className="col-6 col-lg-2 pe-0">
                                                <TextField type='text' label="Collection Access" InputLabelProps={{ shrink: true }} size="small" value={item?.collectionAccess} readOnly />
                                            </div>
                                            <div className="col-6 col-lg-2 pe-0">
                                                <TextField type='text' label="Delivery Address" InputLabelProps={{ shrink: true }} size="small" value={item?.deliveryAddress} readOnly />
                                            </div>
                                            <div className="col-6 col-lg-2 pe-0">
                                                <TextField type='text' label="Delivery Access" InputLabelProps={{ shrink: true }} size="small" value={item?.deliveryAccess} readOnly />
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
    )
}
