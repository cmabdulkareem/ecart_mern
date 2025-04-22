import React from 'react';

function UserSignup() {
  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-md-6 col-lg-5">
          <div className="card shadow-sm">
            <div className="card-body p-4">
              <h2 className="card-title mb-4 text-center">Create Account</h2>
              <form>
                <div className="mb-3">
                  <label htmlFor="username" className="form-label">Username</label>
                  <input
                    type="text"
                    id="username"
                    className="form-control"
                    placeholder="Enter username"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input
                    type="email"
                    id="email"
                    className="form-control"
                    placeholder="Enter email"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">Password</label>
                  <input
                    type="password"
                    id="password"
                    className="form-control"
                    placeholder="Enter password"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="otp" className="form-label">OTP</label>
                  <div className="d-flex">
                    <input
                      type="text"
                      id="otp"
                      className="form-control me-2"
                      placeholder="Enter OTP"
                      style={{ flex: 1 }}
                    />
                    <button
                      type="button"
                      className="btn btn-outline-primary"
                      style={{ whiteSpace: 'nowrap' }}
                    >
                      Send OTP
                    </button>
                  </div>
                </div>
                <button type="submit" className="btn btn-primary w-100">
                  Sign Up
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserSignup;
