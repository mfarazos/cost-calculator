import React from 'react';
import { VehicleAdminFieldset, MaterialAdminFieldset, ResourceAdminFieldset, ZoneAdminFieldset, OtherCostAdminFieldset, TasksAdminFieldset, ScheduleVehicleFieldset, ScheduleCrewFieldset, ScheduleFormanFieldset } from '../admin';
import axios from 'axios';
import Swal from "sweetalert2";

export default function AdminDashboard({ adminData, setAdminData }) {



  const handleSaveData = async () => {
    console.log("adminData", adminData)

    try {


      const response = await axios.post('https://apps.leadsmovinghomecompany.com/costingapp/insertAdminFormData', { settings: adminData });
      console.log(response.data.success);
      if (response.data.success) {
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
          <h1 className="navbar-brand ms-2 mb-0 p-0">Data Dashboard</h1>
          <nav>
            <div class="nav nav-pills" id="nav-tab" role="tablist">
              <button class="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">Costing Data</button>
              <button class="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">Schedular Data</button>
            </div>
          </nav>
          <div>
            <button className="btn btn-outline-custom px-4 me-2" onClick={handleSaveData} type="button">Save Data</button>
          </div>
        </div>
      </nav>

      <div className="container tab-content my-4" id="nav-tabContent">
        <div className="row tab-pane fade active show" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
          <div className="col-lg-4 col-12">
            <TasksAdminFieldset data={adminData?.taskData} setAdminData={setAdminData} />

          </div>
          <div className="col-lg-4 col-12">
            <VehicleAdminFieldset data={adminData?.vehicleData} setAdminData={setAdminData} />
            <ResourceAdminFieldset data={adminData?.resourceData} setAdminData={setAdminData} />
            <OtherCostAdminFieldset data={adminData?.otherCosts} setAdminData={setAdminData} />
          </div>
          <div className="col-lg-4 col-12">
            <MaterialAdminFieldset data={adminData?.materialData} setAdminData={setAdminData} />
            <ZoneAdminFieldset data={adminData?.eurozoneData} setAdminData={setAdminData} />
          </div>
        </div>
        <div className="row tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
          <div className="col-lg-4 col-12"><ScheduleVehicleFieldset data={adminData?.scheduleVehicleData} setAdminData={setAdminData} /></div>
          <div className="col-lg-4 col-12"><ScheduleCrewFieldset data={adminData?.scheduleCrewData} setAdminData={setAdminData} /></div>
          <div className="col-lg-4 col-12"><ScheduleFormanFieldset data={adminData?.scheduleFormanData} setAdminData={setAdminData} /></div>
        </div>
      </div>
    </>
  )
}
