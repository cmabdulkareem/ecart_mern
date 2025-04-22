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


function UserRoutes() {
  return (
    <div className="container">
      <div className="row">
        <Routes>
          <Route path='/' element={<UserLayout />} >
            <Route path='' element={<Home />} />
            <Route path='orders' element={<Orders />} />
            <Route path='profile' element={<Profile />} />
            <Route path='checkout' element={<Checkout />} />
            <Route path='productdetails' element={<ProductDetails />} />
            <Route path='cart' element={<Cart />} />
            <Route path='signup' element={<UserSignup />} />
            <Route path='signin' element={<UserLogin />} />
          </ Route>
        </Routes>
      </div>
    </div>

  )
}

export default UserRoutes
