import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';

import Nav from './nav';
import './layout.css';
import Header from '../gatsby-theme-blog/components/header';

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
    render={data => {
  const siteTitle = data.site.siteMetadata.title;

      return (
      <div className="site-container">
        {solidNav ? <Header title={siteTitle} location={window.location}></Header> : <Nav siteTitle={siteTitle} />}
        <div>
          <main>{children}</main>
          <footer>
            © {new Date().getFullYear()}, Built with
            {` `}
            <a href="https://www.gatsbyjs.org">Gatsby</a>
          </footer>
        </div>
      </div>
    )}}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
