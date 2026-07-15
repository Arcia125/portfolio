import React from 'react';
import { graphql, Link } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

import Layout from '../components/layout';
import SEO from '../components/seo';
import LayoutContainer from '../components/layout-container';
import * as styles from './project.module.css';

export default ({ data, pageContext }) => {
  return (
    <Layout>
      <SEO
        title={pageContext.name}
        description={pageContext.description}
        pathname={`/${pageContext.pagePath}/`}
      />
      <LayoutContainer>
        <article className={styles.project}>
          <Link to="/#projects" className={styles.backLink}>
            &larr; All projects
          </Link>
          <header className={styles.header}>
            {pageContext.type && (
              <span className={styles.typeChip}>{pageContext.type}</span>
            )}
            <h1 className={styles.title}>{pageContext.name}</h1>
            <a
              href={pageContext.repo}
              className={styles.repoLink}
              rel="noopener noreferrer"
            >
              View source on GitHub
            </a>
          </header>
          <div className={styles.projectImage}>
            <GatsbyImage
              image={getImage(data.projectImage)}
              alt={`${pageContext.name} screenshot`}
            />
          </div>
          {data && data.markdownRemark && (
            <div
              className={styles.body}
              dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}
            />
          )}
        </article>
      </LayoutContainer>
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
    markdownRemark(frontmatter: { path: { eq: $pagePath } }) {
      html
      frontmatter {
        name
        path
      }
    }
  }
`;
