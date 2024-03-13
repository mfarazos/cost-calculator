import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import {DayTaskInputFieldset, VehicleInputFieldset, HumanResourcesInputFieldset, MaterialsInputFieldset, CostCalculationFieldset, CostTypeInputFieldset} from "./components";

const App = () => {
  const [data, setData] = useState(
    {
    "_id":"5f62474711942389452e9098",
    "deal_id":1,
    "days":[
       {
          "date":"",
          "task":"",
          "totalVehicle": 0,
          "totalOtherCost": 0,
          "totalVehicleCost": 0,
          "totalResource": 0,
          "totalResourceCost": 0,
          "totalMaterialCost": 0,
          "drivers":[
             {
                "driver_name":"",
                "driver_value": "",
                "miles":0,
                "days":0,
                "fuelcost":0,
                "cost":0
             }
          ],
          "resources":[
             {
                "resource_name":"",
                "resource_Value": "",
                "days":0,
                "overnight": true,
                "hours":0,
                "cost":0
             }
          ],
          "material":[
             {
                "material":"",
                "materialValue": "",
                "hours":0,
                "cost":0
             }
          ],
          "others":[
            {
               "otherService":"",
               "otherserviceValue": "",
               "currency":"",
               "currencyNotes":"",
               "margin":"",
               "cost":0
            }
          ]
       }
    ],

    "costCalculation": {
      "VehicleTotalCost":0,
      "HumanTotalCost":0,
      "materialTotalCost":0,
      "TotalCost":0,
      "totalFualCost":0,
      "Fixed": 0,
      "markep":20,
      "other":0,
      "Quatation":0

    },
    "ZonePrice": {
      "selectedZone":"",
      "pricepercubicfeed":0,
      "numberofcubicfeed":0,
      "TotalCost":0,
    }

 });
 const [currentDataIndex, setCurrentDataIndex] = useState(0)

 useEffect(()=>{
   (async () => {
      try {
         const response = await axios.post('https://movinghomecompany.com/costingapp/GetFormData', { DealId: "345gfgt"});
         console.log(response.data.success);
         if(response.data.success){
            setData(response.data.data);
         }
      } catch (error) {
         console.log(error);
      }
      
    })();

   }, [])

 return (
    <div className="container my-4">
      <div className="row">
        <div className="col-lg-4 col-12">
          <DayTaskInputFieldset data={data} setData={setData} currentDataIndex={currentDataIndex} setCurrentDataIndex={setCurrentDataIndex} />
        </div>
        <div className="col-lg-5 col-12">
        <VehicleInputFieldset  data={data} currentDataIndex={currentDataIndex} setData={setData} />

        <HumanResourcesInputFieldset  data={data} currentDataIndex={currentDataIndex} setData={setData} />

        <MaterialsInputFieldset  data={data} currentDataIndex={currentDataIndex} setData={setData} />
        </div>
        <div className="col-lg-3 col-12">
        <CostCalculationFieldset data={data} />
        </div>
        <div className="col-12">
        <CostTypeInputFieldset  data={data} currentDataIndex={currentDataIndex} setData={setData} />
        </div>
      </div>
    </div>
  )
}

export default App;
