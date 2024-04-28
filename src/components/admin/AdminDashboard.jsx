import React from 'react';
import { VehicleAdminFieldset, MaterialAdminFieldset, ResourceAdminFieldset, ZoneAdminFieldset ,OtherCostAdminFieldset, TasksAdminFieldset } from '../admin';
import axios from 'axios';
import Swal from "sweetalert2";

export default function AdminDashboard({ adminData, setAdminData }) {
 


  const handleSaveData = async () => {
    console.log("adminData", adminData)

    try {
       

        const response = await axios.post('https://apps.leadsmovinghomecompany.com/costingapp/insertAdminFormData', { settings: adminData });
        console.log(response.data.success);
        if(response.data.success){
            Swal.fire({
                title: 'success',
                text: "Sucessfuly Submit Your Data",
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

  return (
    <>
      <nav className="navbar sticky-top navbar-light bg-light">
        <div className="container">
          <h1 className="navbar-brand ms-2">Data Dashboard</h1>
          <div>
            <button className="btn btn-outline-custom px-4 me-2" onClick={handleSaveData} type="button">Save Data</button>
          </div>
        </div>
      </nav>

      <div className="container my-4">
        <div className="row">
          <div className="col-lg-4 col-12">
            <TasksAdminFieldset data={adminData?.taskData} setAdminData={setAdminData} />
            
          </div>
          <div className="col-lg-4 col-12">
            <VehicleAdminFieldset data={adminData?.vehicleData} setAdminData={setAdminData} />
            <ResourceAdminFieldset data={adminData?.resourceData} setAdminData={setAdminData} />
            <OtherCostAdminFieldset data={adminData?.otherCosts} setAdminData={setAdminData}  />
          </div>
          <div className="col-lg-4 col-12">
            <MaterialAdminFieldset data={adminData?.materialData} setAdminData={setAdminData} />
            <ZoneAdminFieldset data={adminData?.eurozoneData} setAdminData={setAdminData} />
          </div>
        </div>
      </div>
    </>
  )
}
