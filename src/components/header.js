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
        top: '-150px',
        height: '70vh',
        width: '100%',
        position: 'absolute',
        transform: 'skewY(-5deg)',
        overflow: 'hidden',
        zIndex: '-1'
      }}><div style={{
        background: 'linear-gradient(to bottom, #1d1035 0%,#6e3cca 25%,#46b6ea 100%)',
        height: '150%',
        transform: 'skewY(5deg)'
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
