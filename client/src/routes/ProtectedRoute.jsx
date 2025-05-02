import React, {useState, useEffect} from 'react'
import { Navigate } from 'react-router-dom'
import axios from 'axios'

function ProtectedRoute({children}) {
    const [isAuthenticated, setIsAuthenticated] = useState(null)

    useEffect(() => {
        axios.get('http://localhost:3000/authCheck', {withCredentials: true})
          .then((res) => {
            setIsAuthenticated(res.data.authenticated)
          })
          .catch((err) => {
            console.error(err.response.data.error)
            setIsAuthenticated(false)
          })
      }, [])

  if(isAuthenticated == null){
    return "Loading..."
  }

  return isAuthenticated? children : <Navigate to="/signin" />
}

export default ProtectedRoute
