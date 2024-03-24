import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import {DayTaskInputFieldset, VehicleInputFieldset, HumanResourcesInputFieldset, MaterialsInputFieldset, CostCalculationFieldset, CostTypeInputFieldset, TimeZoneFieldset} from "./components";

const App = () => {
  const [data, setData] = useState(
    {
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
                "driver_value": "0",
                "miles":0,
                "days":0,
                "fuelcost":0,
                "cost":0
             }
          ],
          "resources":[
             {
                "resource_name":"",
                "resource_Value": "0",
                "days":0,
                "overnight": false,
                "hours":8,
                "cost":0
             }
          ],
          "material":[
             {
                "material":"",
                "materialValue": "0",
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
               "margin":0,
               "cost":0,
               "withmarginCost": 0
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
      "pricepercubicfeed":"",
      "numberofcubicfeed":0,
      "TotalCost":0,
    }

 });

 const [adminData, setAdminData] = useState(
   {
      vehicleData: {
          vehicleOptions: [
              {
                  name: "HGV",
                  value: "200"
              },
              {
                  name: "7.5 TON",
                  value: "150"
              },
              {
                  name: "3.5 TON",
                  value: "100"
              }
  
          ],
          fuelAmount : 0.8
      },
  
      resourceData: {
          resourceOptions: [
              {
                  name: "HGV DRIVER",
                  value: "20"
              },
              {
                  name: "7.5 TON DRIVER",
                  value: "20.1"
              },
              {
                  name: "3.5 TON DRIVER",
                  value: "17"
              },
              {
                  name: "PORTER",
                  value: "15"
              }
          ],
          OverNightAmount : 45
      },
  
      materialData: {
          materialOptions: [
              {
                  name: "Pk 1 Carton",
                  value: "1.5"
              },
              {
                  name: "Pk 2 Carton",
                  value: "1.8"
              },
              {
                  name: "Wardrobe Carton",
                  value: "7"
              },
              {
                  name: "Ream of Paper",
                  value: "12"
              },
              {
                  name: "Bubble Blanket Roll",
                  value: "80"
              },
              {
                  name: "TV wrap",
                  value: "7.5"
              },
              {
                  name: "Picture wrap",
                  value: "4"
              },
              {
                  name: "Tape",
                  value: "0.7"
              },
              {
                  name: "Double Mattress Cover",
                  value: "3.5"
              },
              {
                  name: "Single Mattress Cover",
                  value: "2.5"
              }
  
          ]
      },
  
      eurozoneData: {
          eurozoneOptions: [
              {
                  name: "Zone 1 France: Tours, Orleans, Auxeres, Dijon",
                  value: "5"
              },
              {
                  name: "Zone 2 France: Lyon, Limoges, Clermont-Ferrand, Montpelier, Marseille",
                  value: "7"
              },
              {
                  name: "Zone 3 France Rennes, Nantes, Bordeaux, Toulouse, Perpignan",
                  value: "7.5"
              },
              {
                  name: "Zone 1 Germany:  Stuttgart, Frankfurt, Bonn, Dusseldorf, Koln, Dortmund",
                  value: "6.5"
              },
              {
                  name: "Zone 2 Germany:  Hamburg, Hannover, Bremen, Nurnberg, Munich",
                  value: "7.1"
              },
              {
                  name: "Zone 3 Germany:   Berlin, Dresden, Gera, Leipzig",
                  value: "7.6"
              },
              {
                  name: "Zone 1 Spain: Barcelona, Zaragoza, Bilbao",
                  value: "7.2"
              },
              {
                  name: "Zone 2 Spain: Madrid,Alicante, Al Maria, Malaga, Saville",
                  value: "8"
              },
              {
                  name: "Zone 3 Spain: ACaruna, Vigo, Gijon, Salamanca",
                  value: "9.5"
              },
              {
                  name: "Belgium",
                  value: "4"
              },
              {
                  name: "Austria",
                  value: "8.5"
              },
              {
                  name: "Luxembourg",
                  value: "7.3"
              },
              {
                  name: "Switzerland",
                  value: "9"
              },
              {
                  name: "Netherlands",
                  value: "6.6"
              },
          ]
      },
  
      markup: 20
  }
 );
 const [currentDataIndex, setCurrentDataIndex] = useState(0)

 useEffect(()=>{
   const params = new URLSearchParams(window.location.search);
    const dealId = params.get('DealId');
    if(!dealId){
      return;
    }
   (async () => {
      try {
         console.log("params", dealId);
         const response = await axios.post('https://leads.movinghomecompany.com/costingapp/GetFormData', { DealId: dealId});
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
          <TimeZoneFieldset  eurozoneData={adminData?.eurozoneData} data={data} currentDataIndex={currentDataIndex} setData={setData} />
        </div>
        <div className="col-lg-5 col-12">
        <VehicleInputFieldset vehicleData={adminData?.vehicleData}  data={data} currentDataIndex={currentDataIndex} setData={setData} />

        <HumanResourcesInputFieldset resourceData={adminData?.resourceData}  data={data} currentDataIndex={currentDataIndex} setData={setData} />

        <MaterialsInputFieldset materialData={adminData?.materialData} data={data} currentDataIndex={currentDataIndex} setData={setData} />
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
