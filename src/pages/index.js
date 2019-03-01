import React from "react"
import { graphql } from "gatsby";


import Layout from "../components/layout"
import SEO from "../components/seo"
import { HeaderIllustrations } from "../components/header-illustrations";
import { AboutMeSection } from "../components/about-me-section";
import { Header } from "../components/header";
import { TraitSection } from "../components/trait-section";
import { CleanCodeIllustration } from "../components/clean-code-illustration";
import { Trait } from "../models/trait";
import { PortfolioPreview } from "../components/portfolio-preview";

const traits = [
  new Trait({
    title: 'CLEAN CODE',
    subtext: 'I prioritize maintainability and readability of project source code. This enables new developers to approach the codebase with ease.',
    ImageComponent: CleanCodeIllustration
  })
];


const IndexPage = ({ data }) => (
  <>
    <HeaderIllustrations />
    <Layout>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`, `kevin`, `hallett`, `developer`, `webapp`]} />
        <Header emphasizedIntroText="Hello, " introText="my name is Kevin Hallett. I am a web developer." subheading="I build web apps alongside amazing people. Contact me now to hire me for your next project." />
        <AboutMeSection />
        <TraitSection traits={traits} />
        <PortfolioPreview data={data} />
    </Layout>
  </>
)

export const projectImageFragment = graphql`
  fragment projectImage on File {
    childImageSharp {
      fluid(maxWidth: 320) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`;

export const query = graphql`
  query {
    project0: file(relativePath: { eq: "project-ow-stats.png" }) {
      ...projectImage
    },
    project1: file(relativePath: { eq: "project-starcraft2-bot.png" }) {
      ...projectImage
    },
    project2: file(relativePath: { eq: "project-automouse.png" }) {
      ...projectImage
    },
    project3: file(relativePath: { eq: "project-retro-paddle-ball.png" }) {
      ...projectImage
    },
    project4: file(relativePath: { eq: "project-fire-animation.png" }) {
      ...projectImage
    },
    project5: file(relativePath: { eq: "project-roguelike.png" }) {
      ...projectImage
    }
  }
`

export default IndexPage
