import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import '../../assets/styles/style.css'

function Header() {
    const location = useLocation()

    const isAdmin = location.pathname.startsWith("/admin/");



    return (
        <div className="container">
            <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                <a
                    href="/"
                    className="d-flex align-items-center mb-2 mb-lg-0 link-body-emphasis text-decoration-none"
                >
                    <h3 className=''>LOGO HERE</h3>
                </a>
                <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                    <li>

                        {isAdmin ? (
                            <NavLink to="/admin/" end className={({ isActive }) => isActive ? 'nav_active px-2' : 'nav_inactive px-2'}>
                                Dashboard
                            </NavLink>
                        ) : (
                            <NavLink to="/" end className={({ isActive }) => isActive ? 'nav_active px-2' : 'nav_inactive px-2'}>
                                Shop
                            </NavLink>
                        )}
                    </li>
                    <li>
                        {isAdmin ? (
                            <NavLink to="/admin/products" className={({ isActive }) => isActive ? 'nav_active px-2' : 'nav_inactive px-2'}>
                                Products
                            </NavLink>
                        ) : (
                            <NavLink to="/orders" className={({ isActive }) => isActive ? 'nav_active px-2' : 'nav_inactive px-2'}>
                                orders
                            </NavLink>
                        )}

                    </li>
                    <li>
                        {isAdmin ? (
                            <NavLink to="/admin/reports" className={({ isActive }) => isActive ? 'nav_active px-2' : 'nav_inactive px-2'}>
                                Reports
                            </NavLink>
                        ) : (
                            <NavLink to="/cart" className={({ isActive }) => isActive ? 'nav_active px-2' : 'nav_inactive px-2'}>
                                Cart
                            </NavLink>
                        )}

                    </li>
                    <li>
                        {isAdmin ? (
                            <NavLink to="/admin/users" className={({ isActive }) => isActive ? 'nav_active px-2' : 'nav_inactive px-2'}>
                                Users
                            </NavLink>
                        ) : (
                            <NavLink to="/profile" className={({ isActive }) => isActive ? 'nav_active px-2' : 'nav_inactive px-2'}>
                                Profile
                            </NavLink>
                        )}

                    </li>
                </ul>
                {/* <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search">
                    <input
                        type="search"
                        className="form-control"
                        placeholder="Search..."
                        aria-label="Search"
                    />
                </form> */}
                <div className="dropdown text-end">
                    <a
                        href="#"
                        className="d-block link-body-emphasis text-decoration-none dropdown-toggle"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                    >
                        <img
                            src="https://github.com/mdo.png"
                            alt="mdo"
                            width={32}
                            height={32}
                            className="rounded-circle"
                        />
                    </a>
                    <ul className="dropdown-menu text-small">
                        <li>
                            <a className="dropdown-item" href="#">
                                Settings
                            </a>
                        </li>
                        <li>
                            <a className="dropdown-item" href="#">
                                Profile
                            </a>
                        </li>
                        <li>
                            <hr className="dropdown-divider" />
                        </li>
                        <li>
                            <a className="dropdown-item" href="#">
                                Sign out
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Header
