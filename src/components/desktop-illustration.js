import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';


const DesktopIllustration = ({ className }) => (
  <StaticQuery
    query={graphql`
      query {
        desktopIllustration: file(
          relativePath: { eq: "web-illustration-dark-gradient.webp" }
        ) {
          childImageSharp {
            gatsbyImageData(
              layout: CONSTRAINED
              quality: 100
            )
          }
        }
      }
    `}
    render={data => (
      <GatsbyImage className={className} image={getImage(data.desktopIllustration)} />
    )}
  />
);
export { DesktopIllustration };
