import React, { useState } from 'react';
import { AiOutlineClose } from "react-icons/ai";

export default function MaterialAdminFieldset({ data = [], setAdminData }) {
    const [newField, setNewField] = useState({ name: "", value: "" })

    const handleAddField = () => {
        setAdminData((prevData) => {
            return { ...prevData, materialData: { ...prevData?.materialData, materialOptions: [...prevData?.materialData?.materialOptions, newField] } }
        })
        setNewField({ name: "", value: "" });
    }
    const handleRemoveField = (indexToRemove) => {
        setAdminData((prevData) => {
            return { ...prevData, materialData: { ...prevData?.materialData, materialOptions: [...prevData?.materialData?.materialOptions.filter((item, index) => index !== indexToRemove)] } }
        })
    }
    const handleUpdateField = (index, fieldName, updatedValue) => {
        setAdminData((prevData) => {
            const updatedmaterialOptions = [...prevData.materialData.materialOptions];
            updatedmaterialOptions[index] = { ...updatedmaterialOptions[index], [fieldName]: updatedValue };
            return { ...prevData, materialData: { ...prevData.materialData, materialOptions: updatedmaterialOptions } };
        });
    }
    return (
        <fieldset className='card mb-3'>
            <h5 className="card-header">
                Material Data
            </h5>
            <div className='card-body'>
                <div className="row">
                <div className="col-6 pe-0">
                <p className='w-100 text-start mb-1'>Material Name</p>
                </div>
                <div className="col-5 pe-0">
                        <p className='w-100 text-start mb-1'>Material Cost</p></div>
                </div>
                {data?.materialOptions.map((item, index) =>
                <div className="row" key={index}>
                    <div className="col-6 pe-0">
                            <input type="text" className="form-control mb-3" value={item?.name} onChange={(e) => handleUpdateField(index, 'name', e.target.value)} />
                    </div>

                    <div className="col-5 pe-0">
                            <input type="number" min={0} className="form-control mb-3" value={item?.value} onChange={(e) => handleUpdateField(index, 'value', e.target.value)} />
                    </div>
                    <div className="col-1 p-0">
                            <button className="border-0 bg-transparent mb-3 form-control px-0" onClick={()=>{handleRemoveField(index)}} key={index} title='Remove This Field'><AiOutlineClose /></button>
                    </div>
                </div>
                        )}
            </div>
            <button className="btn btn-primary bg-custom-color border-0" onClick={handleAddField}>Add Material</button>
        </fieldset>
    )
}
