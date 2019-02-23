import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import './nav.css';
import { layout } from "../constants/layout";

const Nav = ({ siteTitle }) => (
  <nav
    className="main-site-navigation"
    style={{
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: layout.maxWidth,
        padding: layout.padding,
      }}
    >
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
            fontWeight: 600,
            fontSize: '1.618rem'
          }}
        >
          {siteTitle}
        </Link>
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
