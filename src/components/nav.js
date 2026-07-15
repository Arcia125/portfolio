import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

import './nav.css';
import { layout } from '../constants/layout';
import { ThemeToggle } from './theme-toggle';

const Nav = ({ siteTitle }) => (
  <nav className="main-site-navigation">
    <div
      className="main-site-navigation-links"
      style={{ maxWidth: layout.maxWidth }}
    >
      <Link className="site-title" to="/">
        {siteTitle}
      </Link>
      <div className="nav-right-section">
        <Link
          className="main-site-navigation-link"
          to="/#projects"
        >
          Projects
        </Link>
        <Link
          className="main-site-navigation-link"
          activeClassName="active"
          partiallyActive
          to="/blog"
        >
          Blog
        </Link>
        <a
          className="main-site-navigation-link"
          href="https://github.com/Arcia125"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
        <ThemeToggle />
      </div>
    </div>
  </nav>
);

Nav.propTypes = {
  siteTitle: PropTypes.string,
};

Nav.defaultProps = {
  siteTitle: ``,
};

export default Nav;
