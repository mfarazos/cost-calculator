import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import {HomePage, Admin} from '../pages';

export default function AppRouter() { 
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

          otherCosts: {
            otherCostsOptions: [
                {name: "EuroTunnel"},
                {name: "Toll"},
                {name: "Manpower"},
                {name: "Seafreight"},
                {name: "Destination Rate"},
                {name: "Sub Contract"},
                {name: "Customs Clearance"},
            ]
          },
      
          markup: 20
      }
     );
  return (
    <Router>
        <Routes>
            <Route path='/costing_app/' exact element={<HomePage adminData={adminData}/>}  />
            <Route path='/costing_app/admin_1ethsq' exact element={<Admin adminData={adminData} setAdminData={setAdminData}/>}  />
        </Routes>
    </Router>
  ) 
}
