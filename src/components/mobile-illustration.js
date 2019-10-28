import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

const GET_IMAGE = graphql`
  query {
    placeholderImage: file(
      relativePath: { eq: "mobile-illustration-dark-gradient.webp" }
    ) {
      childImageSharp {
        fluid(maxWidth: 360) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

const MobileIllustration = ({ className }) => (
  <StaticQuery
    query={GET_IMAGE}
    render={data => (
      <Img
        critical
        fadeIn={false}
        className={className}
        fluid={data.placeholderImage.childImageSharp.fluid}
      />
    )}
  />
);
export { MobileIllustration };
