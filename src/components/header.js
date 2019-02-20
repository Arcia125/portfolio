import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header
    style={{
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        top: '-30vh',
        height: '75vh',
        width: '100%',
        position: 'absolute',
        transform: 'skewY(-15deg)',
        overflow: 'hidden',
        zIndex: '-1'
      }}><div style={{
        // background: 'linear-gradient(to bottom, #170835 1%,#5014c9 25%,#45b6eb 100%)', // lighter, more saturated
        background: 'linear-gradient(rgb(23, 8, 53) 15%, rgb(99, 45, 208) 62%, rgb(69, 182, 235) 100%)', // darker
        height: '150%',
        transform: 'skewY(15deg)'
      }}/></div>
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `.5rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
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
      </h1>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
