import React from 'react'
import { useNavigate } from 'react-router-dom'


function AdminLogin() {
    const navigate = useNavigate()

    function handleSignIn(e){
        e.preventDefault()
        navigate('/admin')
    }

    return (
        <div className="container">
            <div className="row justify-content-center align-items-center" style={{height: "100vh"}}>
                <div className="col-4">
                    <form onSubmit={handleSignIn}>
                        <h1 className="display-3">Sign In</h1>
                        <div className="mb-3">
                            <label htmlFor="emailInput" className="form-label">
                                Email address
                            </label>
                            <input
                                type="email"
                                className="form-control"
                                id="emailInput"
                                aria-describedby="emailHelp"
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="passwordInput" className="form-label">
                                Password
                            </label>
                            <input
                                type="password"
                                className="form-control"
                                id="passwordInput"
                            />
                        </div>
                        <button type="submit" className="btn btn-primary">
                            Sign In
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default AdminLogin
