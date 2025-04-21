import { Routes, Route } from "react-router-dom"
import Dashboard from "./pages/Dashboard"
import AdminLogin from "./pages/AdminLogin"
import PrivateRouter from "./services/PrivateRouter"


function App() {
  return (
    <div>
      <Routes>
        <Route path="/admin" element={<PrivateRouter> <Dashboard /> </PrivateRouter>} />
        <Route path="/admin/login" element={<AdminLogin />} />
      </Routes>
    </div>
  )
}

export default App
