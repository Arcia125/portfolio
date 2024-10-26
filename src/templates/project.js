import React from 'react';
import { graphql } from 'gatsby';
import classNames from 'classnames';

import Layout from '../components/layout';
import * as styles from './project.module.css';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

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
            <GatsbyImage
              className={styles.githubLogo}
              image={getImage(data.githubMarkWhite)}
            />
          </a>
        </div>
        <div className={styles.projectImage}>
          <GatsbyImage image={getImage(data.projectImage)}/>
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
        gatsbyImageData(layout: CONSTRAINED)
      }
    }
    githubMarkWhite: file(relativePath: { eq: "github-mark-light-32px.png" }) {
      childImageSharp {
        gatsbyImageData(
          layout: FIXED
          height: 24
          width: 24
        )
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
