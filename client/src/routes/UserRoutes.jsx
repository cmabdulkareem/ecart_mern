import React from 'react'
import { Routes, Route } from 'react-router-dom'
import UserLayout from '../layouts/UserLayout'
import Home from '../pages/user/Home'
import Orders from '../pages/user/Orders'
import Profile from '../pages/user/Profile'
import Checkout from '../pages/user/Checkout'
import ProductDetails from '../pages/user/ProductDetails'
import Cart from '../pages/user/Cart'
import UserLogin from '../pages/auth/UserLogin'
import UserSignup from '../pages/auth/UserSignup'
import ProtectedRoute from './ProtectedRoute'


function UserRoutes() {
  return (
        <Routes>
          <Route path='/' element={<UserLayout />} >
            <Route path='' element={<ProtectedRoute><Home/></ProtectedRoute>} />
            <Route path='orders' element={<ProtectedRoute><Orders /></ProtectedRoute>} />
            <Route path='profile' element={<ProtectedRoute><Profile /></ProtectedRoute>} />
            <Route path='checkout' element={<ProtectedRoute><Checkout /></ProtectedRoute>} />
            <Route path='productdetails' element={<ProtectedRoute><ProductDetails /></ProtectedRoute>} />
            <Route path='cart' element={<ProtectedRoute><Cart /></ProtectedRoute>} />
            <Route path='signup' element={<UserSignup />} />
            <Route path='signin' element={<UserLogin />} />
          </ Route>
        </Routes>
  )
}

export default UserRoutes
