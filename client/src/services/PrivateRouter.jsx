import React, { useState } from 'react'
import { Navigate } from 'react-router-dom'

function PrivateRouter({children}) {
    const [isAuthenticated, setIsAuthenticated] = useState(true)

  return (
    <div>
      {isAuthenticated ? children : <Navigate to='/admin/login' />}
    </div>
  )
}

export default PrivateRouter
