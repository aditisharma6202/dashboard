import React from 'react';
import { Outlet } from 'react-router-dom';
import { Navigate } from "react-router-dom";
function ProtectedRoute() {
    const token = localStorage.getItem("token");
    
    console.log(token);
    return ( 
       token?<Outlet/>:<Navigate to="/admin" replace={true} />
     );
}

export default ProtectedRoute;


