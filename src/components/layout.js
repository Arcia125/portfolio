import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';

import Nav from './nav';
import './layout.css';

const GET_META_TITLE = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;

const Layout = ({ children }) => (
  <StaticQuery
    query={GET_META_TITLE}
    render={data => {
      const siteTitle = data.site.siteMetadata.title;

      return (
        <div className="site-container">
          <Nav siteTitle={siteTitle} />
          <main>{children}</main>
          <footer className="site-footer">
            <span>© {new Date().getFullYear()} Kevin Hallett</span>
            <span>
              <a href="https://github.com/Arcia125" rel="noopener noreferrer">
                GitHub
              </a>
              {' · '}
              <a href="mailto:contact@kevinmhallett.com">
                contact@kevinmhallett.com
              </a>
            </span>
          </footer>
        </div>
      );
    }}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
