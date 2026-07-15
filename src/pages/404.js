import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
import LayoutContainer from '../components/layout-container';

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <LayoutContainer>
      <div style={{ padding: `10rem 0 4rem`, maxWidth: `40rem` }}>
        <p className="eyebrow">Game over</p>
        <h1>404 — this route doesn't exist.</h1>
        <p style={{ color: `var(--mist)` }}>
          Whatever you were looking for isn't here.{' '}
          <Link to="/">Respawn at the homepage</Link> or head to the{' '}
          <Link to="/blog">blog</Link>.
        </p>
      </div>
    </LayoutContainer>
  </Layout>
);

export default NotFoundPage;
