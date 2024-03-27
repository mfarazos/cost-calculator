import React, { useState } from 'react';
import { AiOutlineClose } from "react-icons/ai";

export default function VehicleAdminFieldset({ data = [], setAdminData }) {
    const [newField, setNewField] = useState({ name: "", value: "" })

    const handleAddField = () => {
        setAdminData((prevData) => {
            return { ...prevData, vehicleData: { ...prevData?.vehicleData, vehicleOptions: [...prevData?.vehicleData?.vehicleOptions, newField] } }
        })
        setNewField({ name: "", value: "" });
    }
    const handleRemoveField = (indexToRemove) => {
        setAdminData((prevData) => {
            return { ...prevData, vehicleData: { ...prevData?.vehicleData, vehicleOptions: [...prevData?.vehicleData?.vehicleOptions.filter((item, index) => index !== indexToRemove)] } }
        })
    }

    const handleUpdateField = (index, fieldName, updatedValue) => {
        setAdminData((prevData) => {
            const updatedVehicleOptions = [...prevData.vehicleData.vehicleOptions];
            updatedVehicleOptions[index] = { ...updatedVehicleOptions[index], [fieldName]: updatedValue };
            return { ...prevData, vehicleData: { ...prevData.vehicleData, vehicleOptions: updatedVehicleOptions } };
        });
    }

    const handleUpdateFuelAmount = (updatedValue) => {
        setAdminData((prevData) => {
            return { ...prevData, vehicleData: { ...prevData?.vehicleData, fuelAmount: updatedValue }};
        });
    }

    return (
        <fieldset className='card mb-3'>
            <h5 className="card-header">
                Vehicle Data
            </h5>
            <div className='card-body'>
                <div className="row">
                    <div className="col-6 pe-0">
                        <p className='w-100 text-start mb-1'>Vehicle Name</p>
                    </div>
                    <div className="col-5 pe-0">
                        <p className='w-100 text-start mb-1'>Vehicle Cost</p></div>
                </div>
                {data?.vehicleOptions.map((item, index) =>
                    <div className="row" key={index}>
                        <div className="col-6 pe-0">
                            <input type="text" className="form-control mb-3" value={item?.name} onChange={(e) => handleUpdateField(index, 'name', e.target.value)} />

                        </div>

                        <div className="col-5 pe-0">
                            <input type="number" min={0} className="form-control mb-3" value={item?.value} onChange={(e) => handleUpdateField(index, 'value', e.target.value)} />

                        </div>
                        <div className="col-1 p-0">
                            <button className="border-0 bg-transparent mb-3 form-control px-0" onClick={() => { handleRemoveField(index) }} title='Remove This Field'><AiOutlineClose /></button>
                        </div>
                    </div>
                )}
                <div className="row mt-5">
                    <div className="col-6 pe-0">
                        <label className='col-form-label'>Fuel Cost</label>
                    </div>
                    <div className="col-5 pe-0">
                        <input type="number" min={0} className="form-control" value={data?.fuelAmount} onChange={(e) => handleUpdateFuelAmount(e.target.value)} />
                    </div>
                </div>
            </div>
            <button className="btn btn-primary bg-custom-color border-0" onClick={handleAddField}>Add Vehicle</button>
        </fieldset>
    )
}
