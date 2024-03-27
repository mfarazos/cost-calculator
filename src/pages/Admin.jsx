import React, { useState } from 'react';
import { Login, AdminDashboard } from '../components/admin';

export default function Admin({adminData, setAdminData}) {
    const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);

    return (
        <>
            {isUserLoggedIn ? (
                <AdminDashboard adminData={adminData} setAdminData={setAdminData} />
            ) : (
                <Login setIsUserLoggedIn={setIsUserLoggedIn} />
            )}
        </>
    );
}
