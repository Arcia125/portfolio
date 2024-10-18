import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import classNames from 'classnames';

import Layout from '../components/layout';
import * as styles from './project.module.css';

export default ({ data, pageContext }) => {
  return (
    <Layout solidNav>
      <div className={styles.project}>
        <div>
          <h1>{pageContext && pageContext.name}</h1>
        </div>
        <div className={styles.topLinks}>
          <a
            href={pageContext.repo}
            className={classNames(styles.button, styles.github)}
          >
            VIEW ON GITHUB
            <Img
              className={styles.githubLogo}
              fixed={data.githubMarkWhite.childImageSharp.fixed}
            />
          </a>
        </div>
        <div className={styles.projectImage}>
          <Img fluid={data.projectImage.childImageSharp.fluid} />
        </div>
        {data && data.markdownRemark && (
          <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
        )}
      </div>
    </Layout>
  );
};

export const query = graphql`
  query($relativeImagePath: String!, $pagePath: String!) {
    projectImage: file(relativePath: { eq: $relativeImagePath }) {
      childImageSharp {
        fluid(maxWidth: 700) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    githubMarkWhite: file(relativePath: { eq: "github-mark-light-32px.png" }) {
      childImageSharp {
        fixed(width: 24, height: 24) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    markdownRemark(frontmatter: { path: { eq: $pagePath } }) {
      html
      frontmatter {
        name
        path
      }
    }
  }
`;
