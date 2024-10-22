import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `StaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.app/gatsby-image
 * - `StaticQuery`: https://gatsby.app/staticquery
 */

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
