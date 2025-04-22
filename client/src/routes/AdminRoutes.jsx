// AdminRoutes.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AdminLayout from '../layouts/AdminLayout';
import Dashboard from '../pages/admin/Dashboard';
import Orders from '../pages/admin/Orders';
import Products from '../pages/admin/Products';
import Reports from '../pages/admin/Reports';
import Users from '../pages/admin/Users';
import AdminLogin from '../pages/auth/AdminLogin';
import Loader from '../components/common/Loader';
import ProtectedRoute from './ProtectedRoute';

function AdminRoutes() {
  return (
    <Routes>
      <Route path="/" element={<AdminLayout />}>
        <Route
          index
          element={
            <ProtectedRoute role="admin">
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="orders"
          element={
            <ProtectedRoute role="admin">
              <Orders />
            </ProtectedRoute>
          }
        />
        <Route
          path="products"
          element={
            <ProtectedRoute role="admin">
              <Products />
            </ProtectedRoute>
          }
        />
        <Route
          path="reports"
          element={
            <ProtectedRoute role="admin">
              <Reports />
            </ProtectedRoute>
          }
        />
        <Route
          path="users"
          element={
            <ProtectedRoute role="admin">
              <Users />
            </ProtectedRoute>
          }
        />
        <Route path="login" element={<AdminLogin />} />
        <Route path="loader" element={<Loader />} />
      </Route>
    </Routes>
  );
}

export default AdminRoutes;
