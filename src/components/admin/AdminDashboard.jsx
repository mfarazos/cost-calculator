import React from 'react';
import { VehicleAdminFieldset, MaterialAdminFieldset, ResourceAdminFieldset, ZoneAdminFieldset ,OtherCostAdminFieldset } from '../admin';


export default function AdminDashboard({ adminData, setAdminData }) {
  console.log("adminData", adminData)
  return (
    <>
      <nav className="navbar sticky-top navbar-light bg-light">
        <div className="container">
          <h1 className="navbar-brand ms-2">Data Dashboard</h1>
          <div>
            <button className="btn btn-outline-custom px-4 me-2" type="button">Save Data</button>
          </div>
        </div>
      </nav>

      <div className="container my-4">
        <div className="row">
          <div className="col-lg-4 col-12">
            <VehicleAdminFieldset data={adminData?.vehicleData} setAdminData={setAdminData} />
            <ResourceAdminFieldset data={adminData?.resourceData} setAdminData={setAdminData} />
          </div>
          <div className="col-lg-4 col-12">
            <MaterialAdminFieldset data={adminData?.materialData} setAdminData={setAdminData} />
            <OtherCostAdminFieldset data={adminData?.otherCosts} setAdminData={setAdminData}  />
          </div>
          <div className="col-lg-4 col-12">
            <ZoneAdminFieldset data={adminData?.eurozoneData} setAdminData={setAdminData} />
          </div>
        </div>
      </div>
    </>
  )
}
