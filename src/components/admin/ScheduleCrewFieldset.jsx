    import React, { useState } from 'react';
    import { AiOutlineClose } from "react-icons/ai";

    export default function ScheduleCrewFieldset({ data = [], setAdminData }) {
        const [newField, setNewField] = useState({ name: "" })

        const handleAddField = () => {
            setAdminData((prevData) => {
                return {
                    ...prevData,
                    scheduleCrewData: {
                        ...prevData?.scheduleCrewData,
                        scheduleCrewDataOptions: [
                            ...(prevData?.scheduleCrewData?.scheduleCrewDataOptions || []),
                            newField
                        ]
                    }
                };
            });
            setNewField({ name: "" });
        };
        
        const handleRemoveField = (indexToRemove) => {
            setAdminData((prevData) => {
                return { ...prevData, scheduleCrewData: { ...prevData?.scheduleCrewData, scheduleCrewDataOptions: [...prevData?.scheduleCrewData?.scheduleCrewDataOptions.filter((item, index) => index !== indexToRemove)] } }
            })
        }
        const handleUpdateField = (index, fieldName, updatedValue) => {
            setAdminData((prevData) => {
                const updatedscheduleCrewDataOptions = [...prevData.scheduleCrewData.scheduleCrewDataOptions];
                updatedscheduleCrewDataOptions[index] = { ...updatedscheduleCrewDataOptions[index], [fieldName]: updatedValue };
                return { ...prevData, scheduleCrewData: { ...prevData.scheduleCrewData, scheduleCrewDataOptions: updatedscheduleCrewDataOptions } };
            });
        }
        return (
            <fieldset className='card mb-3'>
                <h5 className="card-header">
                    Schedule Crew Data
                </h5>
                <div className='card-body'>
                    <div className="row">
                        <div className="col-12 pe-0">
                            <p className='w-100 text-start mb-1'>Crew Name</p>
                        </div>
                    </div>
                    {data?.scheduleCrewDataOptions?.map((item, index) =>
                        <div className="row" key={index}>
                            <div className="col-11 pe-0">
                                <input type="text" className="form-control mb-3" value={item?.name} onChange={(e) => handleUpdateField(index, 'name', e.target.value)} />
                            </div>
                            <div className="col-1 p-0">
                                <button className="border-0 bg-transparent mb-3 form-control px-0" onClick={() => { handleRemoveField(index) }} title='Remove This Field'><AiOutlineClose /></button>
                            </div>
                        </div>
                    )}
                </div>
                <button className="btn btn-primary bg-custom-color border-0" onClick={handleAddField}>Add Crew</button>
            </fieldset>
        )
    }
