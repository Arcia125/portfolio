import React from 'react';
import Img from 'gatsby-image';

import { Styled, css } from 'theme-ui';
import styles from './portfolio-preview.module.css';
import { HomepagePreviewSingle } from './homepage-preview-single';
import LayoutContainer from './layout-container';

const orderBy = (arr, fn) => [...arr].sort(fn);

const isOnHomePage = edge => edge.node.childProjectsJson.homePage;

const compareIndices = (a, b) => a.node.childProjectsJson.index - b.node.childProjectsJson.index

const getProjectList = data => {

  return orderBy(
    data.projects.edges.filter(isOnHomePage),
    compareIndices
  );
};

const PortfolioPreview = ({ data, title }) => {

  return (
    <Styled.div
      css={css({
        paddingTop: '175px',
        '::before': {
          backgroundColor: 'backgroundAccent',
        },
      })}
      className={styles.portfolioPreview}
    >
      <LayoutContainer>
        {title && <h2 className={styles.portfolioPreviewHeader}>{title}</h2>}
        <div className={styles.portfolioPreviewProjects}>
          {data &&
            getProjectList(data).map(edge => {
              const project = edge.node.childProjectsJson;
              const imageName = project.imageName;
              return (
                <HomepagePreviewSingle
                  key={project.name}
                  name={project.name}
                  description={project.description}
                  image={<Img fluid={data[imageName].childImageSharp.fluid} />}
                  link={`/${project.pagePath}`}
                />
              );
            })}
        </div>
      </LayoutContainer>
    </Styled.div>
  );
};
PortfolioPreview.defaultProps = {
  title: 'PORTFOLIO',
};

export { PortfolioPreview };
