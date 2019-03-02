import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import classNames from 'classnames';

import './nav.css';
import { layout } from "../constants/layout";

const NavLink = ({ className, children, ...restProps }) => (
  <Link
    className={classNames('main-site-navigation-link', className)}
    {...restProps}>
    {children}
  </Link>
);

const Nav = ({ siteTitle, solid }) => (
  <nav
    className={classNames({ "main-site-navigation": true, solid })}
    style={{
      marginBottom: `1.45rem`
    }}
  >
    <div
      className="main-site-navigation-links"
      style={{
        maxWidth: layout.maxWidth,
        padding: layout.padding
      }}
    >
        <NavLink
          className="site-title"
          to="/"
        >
          {siteTitle}
        </NavLink>
        {/* <div className="nav-right-section">
          <NavLink className="portfolio-link" to="/portfolio">
            PORTFOLIO
          </NavLink>
        </div> */}
    </div>
  </nav>
)

Nav.propTypes = {
  siteTitle: PropTypes.string,
}

Nav.defaultProps = {
  siteTitle: ``,
}

export default Nav
