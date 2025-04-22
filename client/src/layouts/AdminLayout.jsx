import React from 'react'
import Header from '../components/common/Header'
import Footer from '../components/common/Footer'
import {Outlet} from 'react-router-dom'

function AdminLayout() {
  return (
    <div className="container">
      <div className="row">
      <Header />
            <Outlet />
        <Footer />
      </div>
    </div>
  )
}

export default AdminLayout
