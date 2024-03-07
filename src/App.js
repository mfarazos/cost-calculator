import React, { useState, useEffect } from 'react';
import './App.css';
import {DayTaskInputFieldset, VehicleInputFieldset, HumanResourcesInputFieldset, MaterialsInputFieldset, CostCalculationFieldset, CostTypeInputFieldset} from "./components";

const App = () => {
  const [data, setData] = useState({
    "_id":"5f62474711942389452e9098",
    "deal_id":1,
    "days":[
       {
          "date":"Monday",
          "task":"any thing",
          "drivers":[
             {
                "driver_name":"7.5ton",
                "miles":5,
                "no-Of-days":2,
                "fuelcost":78,
                "cost":55
             },
             {
                "driver_name":"3.5ton",
                "miles":"",
                "no-Of-days":2,
                "fuelcost":78,
                "cost":55
             }
          ],
          "resources":[
             {
                "resource_name":"faraz",
                "no-Of-days":2,
                "no-Of-hours":8,
                "cost":55
             },
             {
                "resource_name":"hgv",
                "no-Of-days":2,
                "no-Of-hours":8,
                "cost":55
             }
          ],
          "material":[
             {
                "material":"hgv",
                "hours":8,
                "cost":55
             },
             {
                "material":"hgv",
                "hours":8,
                "cost":55
             }
          ]
       },
       {
          "date":"Tuesday",
          "task":"any thing",
          "drivers":[
             {
                "driver_name":"7.5ton",
                "miles":"",
                "no-Of-days":2,
                "fuelcost":78,
                "cost":55
             },
             {
                "driver_name":"3.5ton",
                "miles":"",
                "no-Of-days":2,
                "fuelcost":78,
                "cost":55
             }
          ],
          "resources":[
             {
                "resource_name":"faraz",
                "no-Of-days":2,
                "no-Of-hours":8,
                "cost":55
             },
             {
                "resource_name":"hgv",
                "no-Of-days":2,
                "no-Of-hours":8,
                "cost":55
             }
          ],
          "material":[
             {
                "material":"hgv",
                "hours":8,
                "cost":55
             },
             {
                "material":"hgv",
                "hours":8,
                "cost":55
             }
          ]
       },
       {
          "date":"Wednesday",
          "task":"any thing",
          "drivers":[
             {
                "driver_name":"7.5ton",
                "miles":"",
                "no-Of-days":2,
                "fuelcost":78,
                "cost":55
             },
             {
                "driver_name":"3.5ton",
                "miles":"",
                "no-Of-days":2,
                "fuelcost":78,
                "cost":55
             }
          ],
          "resources":[
             {
                "resource_name":"faraz",
                "no-Of-days":2,
                "no-Of-hours":8,
                "cost":55
             },
             {
                "resource_name":"hgv",
                "no-Of-days":2,
                "no-Of-hours":8,
                "cost":55
             }
          ],
          "material":[
             {
                "material":"hgv",
                "hours":8,
                "cost":55
             },
             {
                "material":"hgv",
                "hours":8,
                "cost":55
             }
          ]
       }
    ]
 });

 useEffect(()=>{
console.log("data", data)
 }, [data])
  return (
    <div className="container my-4">
      <div className="row">
        <div className="col-lg-4 col-12">
          <DayTaskInputFieldset data={data} setData={setData} />
        </div>
        <div className="col-lg-5 col-12">
        <VehicleInputFieldset />

        <HumanResourcesInputFieldset />

        <MaterialsInputFieldset />
        </div>
        <div className="col-lg-3 col-12">
        <CostCalculationFieldset />
        </div>
        <div className="col-12">
        <CostTypeInputFieldset />
        </div>
      </div>
    </div>
  )
}

export default App;
