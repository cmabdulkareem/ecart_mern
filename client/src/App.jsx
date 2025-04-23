import UserRoutes from './routes/UserRoutes'
import AdminRoutes from './routes/AdminRoutes'
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <div>
      <Routes>
        <Route path='/*' element={<UserRoutes />} />
        <Route path='/admin/*' element={<AdminRoutes />} />
      </Routes>
    </div>
  )
}

export default App
