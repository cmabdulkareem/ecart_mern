import React, { useState } from 'react';
import axios from 'axios'
import {ToastContainer, toast} from 'react-toastify'
import {useNavigate} from 'react-router-dom'



export default function UserSignup() {

  const navigate = useNavigate()
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [OTP, setOTP] = useState("")
  const [isOTPSent, setIsOTPSent] = useState(false)

  function handleSendOTP(){

    axios.post(`http://localhost:3000/sendOTP`, {email})
    .then((data)=>{
      toast.success(data.data.message);
      setIsOTPSent(true)
    })
    .catch((err)=>{
      toast.error(err.response.data.error);
    })
  }

  function handleUserSignup(e){
    e.preventDefault()
    axios.post(`http://localhost:3000/signup`, {username, email, password, OTP})
      .then((data)=>{
        toast.success(data.data.message);
        setTimeout(() => {
          navigate('/signin')
        }, 2000);
      })
      .catch((err)=>{
        toast.error(err.response.data.error);
      })
  }

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card p-4 shadow-lg" style={{ width: '100%', maxWidth: '450px' }}>
        <h3 className="text-center mb-4">Sign Up</h3>
        <form onSubmit={handleUserSignup}>
          <div className="mb-3">
            <label htmlFor="username" className="form-label">Username</label>
            <input type="text" className="form-control" onChange={(e)=>setUsername(e.target.value)} value={username}  id="username" placeholder="Enter username" required />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email</label>
            <input type="email" className="form-control" onChange={(e)=>setEmail(e.target.value)} value={email} id="email" placeholder="Enter email" required />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input type="password" className="form-control" onChange={(e)=>setPassword(e.target.value)} value={password} id="password" placeholder="Enter password" required />
          </div>
          <div className="mb-3">
            <label htmlFor="otp" className="form-label">OTP</label>
            <div className="input-group">
              <input type="text" className="form-control" id="otp" onChange={(e)=>setOTP(e.target.value)} value={OTP}  placeholder="Enter OTP" required disabled={!isOTPSent} />
              <input type="button" className="btn btn-outline-secondary" onClick={handleSendOTP} value="Send OTP" />
            </div>
          </div>
          <button type="submit" className="btn btn-success w-100" disabled={!isOTPSent}>Register</button>
        </form>
        <ToastContainer />
      </div>
    </div>
  );
}
