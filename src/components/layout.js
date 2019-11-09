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

const Layout = ({ children, solidNav }) => (
  <StaticQuery
    query={GET_META_TITLE}
    render={data => (
      <div className="site-container">
        <Nav solid={solidNav} siteTitle={data.site.siteMetadata.title} />
        <div>
          <main>{children}</main>
          <footer>
            © {new Date().getFullYear()}, Built with
            {` `}
            <a href="https://www.gatsbyjs.org">Gatsby</a>
          </footer>
        </div>
      </div>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
