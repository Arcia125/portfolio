import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const CleanCodeIllustration = ({ className }) => (
  <StaticQuery
    query={graphql`
      query {
        placeholderImage: file(relativePath: { eq: "clean-code-illustration.png" }) {
          childImageSharp {
            fluid(maxWidth: 300) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => <Img className={className} fluid={data.placeholderImage.childImageSharp.fluid} />}
  />
)
export {
  CleanCodeIllustration
}
