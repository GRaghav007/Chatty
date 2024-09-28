import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const ProtectRoute = ({children, user, redirect= "/login"}) => {
  if(!user) return <Navigate to={redirect} />

  // Outlet tag is used so that when the ProtectRoute component wraps more than one children then, it can be redirected to a certain children
  return children ? children : <Outlet/>
}

export default ProtectRoute


// The component XYZ will serve as children to ProtectRoute component
{/* <ProtectRoute>
    <XYZ/>
    </ProtectRoute> */}