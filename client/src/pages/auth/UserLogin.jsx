import React, { useState } from 'react'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

function UserLogin() {
  const navigate = useNavigate()
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  function handleUserSignIn(e) {
    e.preventDefault()

    axios.post('http://localhost:3000/login', {username, password }, { withCredentials: true })
      .then((data) => {
        console.log(data);
        navigate('/')
      })
      .catch((err) => {
        console.error(err);
      })
  }

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card p-4 shadow-lg" style={{ width: '100%', maxWidth: '450px' }}>
        <h3 className="text-center mb-4">Sign In</h3>
        <form onSubmit={handleUserSignIn}>
          <div className="mb-3">
            <label htmlFor="username" className="form-label">Username</label>
            <input type="text" className="form-control" onChange={(e) => setUsername(e.target.value)} value={username} id="username" placeholder="Enter username" required />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input type="password" className="form-control" onChange={(e) => setPassword(e.target.value)} value={password} id="password" placeholder="Enter password" required />
          </div>
          <button type="submit" className="btn btn-success w-100" >Sign In</button>
        </form>
        <ToastContainer />
      </div>
    </div>
  )
}

export default UserLogin
