import React from "react";
import { StaticQuery, graphql } from "gatsby"

/**
 * Shadow me to add your own bio content
 */

export default () => (
  <>
    <StaticQuery
      query={graphql`
      query AuthorName {
        site {
          siteMetadata {
            author
          }
        }
      }
    `}
      render={data => `Personal blog by ${data.site.siteMetadata.author}.`}
    />
  <br />
  </>
)
