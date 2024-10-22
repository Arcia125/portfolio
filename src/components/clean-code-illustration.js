import React from "react"
import { StaticQuery, graphql } from "gatsby"
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

const CleanCodeIllustration = ({ className }) => (
  <StaticQuery
    query={graphql`
      query {
        cleanCodeIllustration: file(relativePath: { eq: "clean-code-illustration.webp" }) {
          childImageSharp {
            gatsbyImageData(
              layout: FIXED
            )
          }
        }
      }
    `}
    render={data => <GatsbyImage className={className} image={getImage(data.cleanCodeIllustration)} />}
  />
)
export {
  CleanCodeIllustration
}
