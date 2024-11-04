import { act, useCallback, useState } from 'react'
import React from 'react'
import ROUTES_NAME from "./../../../routesNames"
import { Link } from 'react-router-dom'

const Header = () => {
    const [active, setActive] = React.useState(ROUTES_NAME.HOME)
    const handleActive =useCallback((e, route_name)=>{
        // e.preventDefault()
        setActive(route_name)
       

    },[])
  return (
    <header className="p-3 mb-3 border-bottom">
    <div className="container">
      <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
        <a
          href="/"
          className="d-flex align-items-center mb-2 mb-lg-0 link-body-emphasis text-decoration-none"
        >
          <svg
            className="bi me-2"
            width={40}
            height={32}
            role="img"
            aria-label="Bootstrap"
          >
            <use xlinkHref="#bootstrap" />
          </svg>
        </a>
        <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
          <li>
            <Link to={ROUTES_NAME.HOME} onClick={(e)=>{handleActive(e,ROUTES_NAME.HOME)}} className={`nav-link active px-2 ${active==ROUTES_NAME.HOME?"link-secondary":"link-body-emphasis"}`}>
              Home
            </Link>
          </li>
          <li>
            <Link to={ROUTES_NAME.PRICING}  onClick={(e)=>{handleActive(e,ROUTES_NAME.PRICING)}} className={`nav-link active px-2 ${active==ROUTES_NAME.PRICING?"link-secondary":"link-body-emphasis"}`}>
              Pricing
            </Link>
          </li>
          <li>
            <Link to={ROUTES_NAME.CUSTOMER}  onClick={(e)=>{handleActive(e,ROUTES_NAME.CUSTOMER)}} className={`nav-link active px-2 ${active==ROUTES_NAME.CUSTOMER?"link-secondary":"link-body-emphasis"}`}>
              Customers
            </Link>
          </li>
          <li>
            <Link to={ROUTES_NAME.CONTENT}  onClick={(e)=>{handleActive(e,ROUTES_NAME.CONTENT)}} className={`nav-link active px-2 ${active==ROUTES_NAME.CONTENT?"link-secondary":"link-body-emphasis"}`}>
              Content
            </Link>
          </li>
        </ul>
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
          <ul className="dropdown-menu text-small" style={{}}>
            <li>
              <a className="dropdown-item" href="#">
                New project...
              </a>
            </li>
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
  </header>
  
  )
}

export default Header