import React, { useState } from 'react';

export default function MaterialsInputFieldset(props) {
  const [newField, setNewField] = useState({ material: "", hours: "", cost: "" });
  const MaterialData = props.data && Array.isArray(props?.data.days[props.currentDataIndex].material) ? props?.data.days[props.currentDataIndex].material : [];

  const handleAddField = () => {
    props.setData((prevData) => {
      const updatedDays = prevData.days.map((day, index) => {
        if (index === props.currentDataIndex) {
          return { ...day, material: [...day.material, newField] };
        }
        return day;
      });
  
      return { ...prevData, days: updatedDays };
    });
  
    setNewField({ material: "", hours: "", cost: "" });
  };

  const handleMaterialChange = (e, index) => {
    const newData = [...props.data.days];
    newData[props.currentDataIndex].material[index].material = e.target.value;
    props.setData({ ...props.data, days: newData });
  };

  const handleHoursChange = (e, index) => {
    const newData = [...props.data.days];
    newData[props.currentDataIndex].material[index].hours = e.target.valueAsNumber;
    props.setData({ ...props.data, days: newData });
  };

  return (
    <>
      <fieldset className='row mx-lg-1 mb-3 p-2 border border-1 rounded'>
        <div className="col-4 mb-5 px-0">
          <p className='w-100 text-start mb-1'>Materials</p>
          {MaterialData.map((item, index) => (
          <select className="form-select mb-3" key={index} value={item?.material} onChange={(e) => {handleMaterialChange(e, index)}} aria-label="Select Material">
            <option disabled value="" className='d-none'></option>
            <option value="Pk1_Carton">Pk 1 Carton </option>
            <option value="PK2_Carton">PK 2 Carton</option>
            <option value="Wardrobe_Carton">Wardrobe Carton</option>
            <option value="Ream_of_Paper">Ream of Paper</option>
            <option value="Bubble_Blanket_Roll">Bubble Blanket Roll</option>
            <option value="TV_Wrap">TV Wrap</option>
            <option value="Picture_Wrap">Picture Wrap</option>
            <option value="Tape">Tape</option>
            <option value="Single_Mattress_Cover">Single Mattress Cover</option>
            <option value="Double_Mattress_Cover">Double Mattress Cover</option>
          </select>
          ))}
        </div>
        <div className="col-2 mb-5 ps-2 pe-0">
        </div>

        <div className="col-3 mb-5 ps-2 pe-0">
          <p className='w-100 text-start mb-1'>Hours</p>
          {MaterialData.map((item, index) => (
            <input type="number" className="form-control mb-3 bg-warning bg-opacity-10" value={item?.hours} onChange={(e) => {handleHoursChange(e, index)}} key={index} />
          ))}
        </div>
        <div className="col-3 mb-5 ps-2 pe-0">
          <p className='w-100 text-start mb-1'>Cost</p>
          {MaterialData.map((item, index) => (
          <input type="text" key={index} value={item?.cost} className="form-control mb-3 bg-success bg-opacity-10" />
          ))}
        </div>
        <div className="col-4 px-0"></div>
        <div className="col-2 ps-2 pe-0">
        </div>
        <div className="col-3 ps-2 pe-0"></div>
        <div className="col-3 ps-2 pe-0">
          <input type="text" readOnly className="form-control mb-3 bg-success bg-opacity-10" />
        </div>
        <div className="col-12 p-0">
          <button className="btn btn-primary" onClick={handleAddField}>Add Material</button>
        </div>
      </fieldset>
    </>
  )
}
