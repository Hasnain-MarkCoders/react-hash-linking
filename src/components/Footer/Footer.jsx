import React from 'react'
import { Link } from 'react-router-dom'
import ROUTES_NAME, { CONTENT_PAGE_IDS, HOME_PAGE_IDS, PRICING_PAGE_IDS } from '../../../routesNames'
import { NavHashLink } from 'react-router-hash-link'
import { scrollWidthOffset } from '../../../helper'

const Footer = () => {
  return (
<div className="container">
  <footer className="row row-cols-1 row-cols-sm-2 row-cols-md-5 py-5 my-5 border-top">
    <div className="col mb-3 fs-4">
      <a
        href="/"
        className="d-flex align-items-center mb-3 link-body-emphasis text-decoration-none"
      >
        <i className="bi bi-bootstrap me-2 ">
        </i>
      </a>
      <p className="text-body-secondary fs-6" >© 2024</p>
    </div>
    <div className="col mb-3"></div>
    <div className="col mb-3">
      <h5 className='text-black text-decoration-none'>Home</h5>
      <ul className="nav flex-column">
        <li className="nav-item mb-2">
          <NavHashLink to={`${ROUTES_NAME.HOME}#${HOME_PAGE_IDS.CENTERED_HERO}`} className="nav-link p-0 text-body-secondary">
          Centered hero
          </NavHashLink>
        </li>
        <li className="nav-item mb-2">
          <NavHashLink to={`${ROUTES_NAME.HOME}#${HOME_PAGE_IDS.RESPONSIVE_IMAGE}`} className="nav-link p-0 text-body-secondary">
          Responsive image
          </NavHashLink>
        </li>
        <li className="nav-item mb-2">
          <NavHashLink to={`${ROUTES_NAME.HOME}#${HOME_PAGE_IDS.SIGN_UP_FORM}`} className="nav-link p-0 text-body-secondary">
          Sign-up form
          </NavHashLink>
        </li>
        <li className="nav-item mb-2">
          <NavHashLink to={`${ROUTES_NAME.HOME}#${HOME_PAGE_IDS.HERO_WITH_CROPPED_IMAGE}`} className="nav-link p-0 text-body-secondary">
          Hero with cropped image
          </NavHashLink>
        </li>
        <li className="nav-item mb-2">
          <NavHashLink to={`${ROUTES_NAME.HOME}#${HOME_PAGE_IDS.COLORS}`} className="nav-link p-0 text-body-secondary">
            Colors
          </NavHashLink>
        </li>
      </ul>
    </div>
    <div className="col mb-3">
      <h5>Pricing</h5>
      <ul className="nav flex-column">
        <li className="nav-item mb-2">
          <NavHashLink
          scroll={e=>scrollWidthOffset(e, -120)}
          to={`${ROUTES_NAME.PRICING }#${PRICING_PAGE_IDS.PRICING_CARDS}`} className="nav-link p-0 text-body-secondary">
            Pricing
          </NavHashLink>
        </li>
        <li className="nav-item mb-2">
          <a href="#" className="nav-link p-0 text-body-secondary">
            
          </a>
        </li>
        <li className="nav-item mb-2">
          <NavHashLink to={`${ROUTES_NAME.PRICING}#${PRICING_PAGE_IDS.PRICING_PLANS}`} className="nav-link p-0 text-body-secondary">
            Pricing Plan
          </NavHashLink>
        </li>
      </ul>
    </div>
    <div className="col mb-3">
      <h5>Content</h5>
      <ul className="nav flex-column">
        <li className="nav-item mb-2">
          <NavHashLink
          scroll={e=>scrollWidthOffset(e)}
          
          to={`${ROUTES_NAME.CONTENT}#${CONTENT_PAGE_IDS.COLUMNS_WITH_ICONS}`} href="#" className="nav-link p-0 text-body-secondary">
          Columns with icons
          </NavHashLink>
        </li>
        <li className="nav-item mb-2">
          <NavHashLink to={`${ROUTES_NAME.CONTENT}#${CONTENT_PAGE_IDS.HANGING_ICONS}`} className="nav-link p-0 text-body-secondary">
          Hanging icons
          </NavHashLink>
        </li>
        <li className="nav-item mb-2">
          <NavHashLink to={`${ROUTES_NAME.CONTENT}#${CONTENT_PAGE_IDS.CUSTOM_CARDS}`} className="nav-link p-0 text-body-secondary">
          Custom cards
          </NavHashLink>
        </li>
        <li className="nav-item mb-2">
          <NavHashLink to={`${ROUTES_NAME.CONTENT}#${CONTENT_PAGE_IDS.ICON_GRID}`} className="nav-link p-0 text-body-secondary">
          Icon grid
          </NavHashLink>
        </li>
        <li className="nav-item mb-2">
          <NavHashLink to={`${ROUTES_NAME.CONTENT}#${CONTENT_PAGE_IDS.FEATURES_WITH_TITLE}`} className="nav-link p-0 text-body-secondary">
          Features with title
          </NavHashLink>
        </li>
      </ul>
    </div>
  </footer>
</div>

  )
}

export default Footer