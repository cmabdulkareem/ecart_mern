import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AdminLayout from '../layouts/AdminLayout'
import Orders from '../pages/admin/Orders'
import Products from '../pages/admin/Products'
import Reports from '../pages/admin/Reports'
import Users from '../pages/admin/Users'
import Dashboard from '../pages/admin/Dashboard'
import AdminLogin from '../pages/auth/AdminLogin'
import Loader from '../components/common/Loader'

function AdminRoutes() {
  return (
            <Routes>
                <Route path='/' element={ <AdminLayout /> }>
                    <Route path='' element={ <Dashboard /> } />
                    <Route path='orders' element={ <Orders /> } />
                    <Route path='products' element={ <Products /> } />
                    <Route path='reports' element={ <Reports /> } />
                    <Route path='users' element={ <Users /> } />
                    <Route path='login' element={ <AdminLogin /> } />
                    <Route path='loader' element={ <Loader /> } />
                </Route>
            </Routes>
  )
}

export default AdminRoutes
