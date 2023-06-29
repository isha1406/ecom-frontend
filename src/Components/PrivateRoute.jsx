import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { checkLogin, getUserRole } from './Auth'
function PrivateRoute() {
  
    if(checkLogin() && getUserRole()=="USER" )
    {   
        return <Outlet/>
    }

    else if(checkLogin() && getUserRole()=="ADMIN")
    {
        return<Navigate to="/admindash"/>
    }

    else{
        return<Navigate to="/login"/>
    }

}

export default PrivateRoute
