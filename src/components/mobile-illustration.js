import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

const GET_IMAGE = graphql`
  query {
    mobileIllustration: file(
      relativePath: { eq: "mobile-illustration-dark-gradient.webp" }
    ) {
      childImageSharp {
        gatsbyImageData(
          layout: CONSTRAINED
          quality: 100
        )
      }
    }
  }
`;

const MobileIllustration = ({ className }) => (
  <StaticQuery
    query={GET_IMAGE}
    render={data => (
      <GatsbyImage className={className} image={getImage(data.mobileIllustration)} />
    )}
  />
);
export { MobileIllustration };
