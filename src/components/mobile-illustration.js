import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const MobileIllustration = ({ className }) => (
  <StaticQuery
    query={graphql`
      query {
        placeholderImage: file(relativePath: { eq: "mobile-illustration-dark-gradient.webp" }) {
          childImageSharp {
            fluid(maxWidth: 360) {
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
  MobileIllustration
}
