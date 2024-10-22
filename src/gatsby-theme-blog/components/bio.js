/**
 * Bio component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
// import Image from 'gatsby-image';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { Themed, css, Flex } from 'theme-ui';
import BioContent from './bio-content';

const Bio = () => {
  const data = useStaticQuery(bioQuery);
  const {
    site: {
      siteMetadata: { author },
    },
    avatar,
  } = data;

  return (
    <Flex css={css({ mb: 4, alignItems: `center` })}>
      {avatar ? (
        <GatsbyImage
          image={getImage(avatar)}
          alt={author}
          css={css({
            mr: 2,
            mb: 0,
            width: 48,
            minWidth: 48,
            borderRadius: 99999,
          })}
        />
      ) : (
        <div
          css={css({
            mr: 2,
            mb: 0,
            width: 48,
            minWidth: 48,
            borderRadius: 99999,
          })}
          role="presentation"
        />
      )}
      <Themed.div>
        <BioContent />
      </Themed.div>
    </Flex>
  );
};

const bioQuery = graphql`
  query GetBio {
    site {
      siteMetadata {
        author
      }
    }
    avatar: file(absolutePath: { regex: "/avatar.(jpeg|jpg|gif|png)/" }) {
      childImageSharp {
        gatsbyImageData(
          layout: FIXED
          quality: 100
          transformOptions: { cropFocus: ENTROPY }
          height: 64
          width: 64
        )
      }
    }
  }
`;

export default Bio;
