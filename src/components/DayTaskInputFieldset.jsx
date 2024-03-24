import React, { useState } from 'react';
import { AiOutlineClose } from "react-icons/ai";


export default function DayTaskInputFieldset(props) {
const [newField, setNewField] = useState({
  date:"",
  task:"",
  totalVehicle: 0,
  totalOtherCost: 0,
  totalVehicleCost: 0,
  totalResource: 0,
  totalResourceCost: 0,
  totalMaterialCost: 0,
  drivers:[
     {
        driver_name:"3.5T",
        driver_value: "100",
        miles:0,
        days:0,
        fuelcost:0,
        cost:0
     }
  ],
  resources:[
     {
        resource_name:"3.5T Driver",
        resource_Value: "120",
        days:0,
        overnight: false,
        hours:0,
        cost:0
     }
  ],
  material:[
     {
        material:"Pk 1 Carton",
        materialValue: "1.5",
        hours:0,
        cost:0
     }
  ],
  others:[
    {
       otherService:"",
       otherserviceValue: "",
       currency:"",
       currencyNotes:"",
       margin:0,
       cost:0,
       withmarginCost: 0
    }
  ]
});

  const daysData = props?.data && Array.isArray(props?.data?.days) ? props?.data?.days : [];


  const handleAddField = () => {
    props.setData((prevData) => {
        return { ...prevData, days: [...prevData.days, newField] };
      });    setNewField({
        date:"",
        task:"",
        totalVehicle: 0,
        totalOtherCost: 0,
        totalVehicleCost: 0,
        totalResource: 0,
        totalResourceCost: 0,
        totalMaterialCost: 0,
        drivers:[
           {
              driver_name:"3.5T",
              driver_value: "100",
              miles:0,
              days:0,
              fuelcost:0,
              cost:0
           }
        ],
        resources:[
           {
              resource_name:"3.5T Driver",
              resource_Value: "120",
              days:0,
              overnight: false,
              hours:0,
              cost:0
           }
        ],
        material:[
           {
              material:"Pk 1 Carton",
              materialValue: "1.5",
              hours:0,
              cost:0
           }
        ],
        others:[
          {
             otherService:"",
             otherserviceValue: "",
             currency:"",
             currencyNotes:"",
             margin:0,
             cost:0,
             withmarginCost: 0
          }
        ]
     });
  };

  const handleDateChange = (e, index) => {
    const newData = [...daysData];
    newData[index].date = e.target.value;
    props.setData({ ...props.data, days: newData });
  };

  const handleTaskChange = (e, index) => {
    const newData = [...daysData];
    newData[index].task = e.target.value;
    props.setData({ ...props.data, days: newData });
  };

  const handleRemoveField = (e, indexToRemove) => {
    e.stopPropagation(); // Prevent event propagation

    if (daysData.length <= 1) {
      return; // Prevent removing the last field
    }
    props.setCurrentDataIndex(indexToRemove - 1)
    props.setData((prevData) => {
      const updatedDays = prevData.days.filter((day, index) => index !== indexToRemove);
      return { ...prevData, days: updatedDays };
    });
  };

  return (
    <>
      {daysData.map((item, index) => (
        <fieldset key={index} className={`row position-relative cursor-pointer p-2 mb-3 border border-1 rounded ${props.currentDataIndex === index ? "border-primary" : ""}`} onClick={() =>{
          props.setCurrentDataIndex(index)
          }}>
          <div className="col-4 pe-0">
            <p className='w-100 text-start mb-1'>Day</p>
            <select className="form-select mb-3" aria-label="Select Day" value={item.date} onChange={(e) => handleDateChange(e, index)}>
              <option disabled value="" className='d-none'></option>
              <option value="Monday">Monday</option>
              <option value="Tuesday">Tuesday</option>
              <option value="Wednesday">Wednesday</option>
              <option value="Thursday">Thursday</option>
              <option value="Friday">Friday</option>
              <option value="Weekend">Weekend</option>
            </select>
          </div>
          <div className="col-7 pe-0">
            <p className='w-100 text-start mb-1'>Task</p>
            <input type="text" className="form-control mb-3" value={item.task} onChange={(e) => handleTaskChange(e, index)} />
          </div>
          <div className="col-1 p-0">
          <p className='w-100 text-start mb-1 invisible'>Remove</p>
          {(daysData.length > 1) && (
              <button className="border-0 bg-transparent form-control px-0" title='Remove This Field' onClick={(e) => handleRemoveField(e, index)}><AiOutlineClose /></button>
            )}
          </div>
        </fieldset>
      ))}
      <div className="row">
        <button className="btn btn-primary" onClick={handleAddField}>Add Day</button>
      </div>
    </>
  );
}
