import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
import { HeaderIllustrations } from '../components/header-illustrations';
import { AboutMeSection } from '../components/about-me-section';
import { Header } from '../components/header';
import { PortfolioPreview } from '../components/portfolio-preview';
import { ContactForm } from '../components/contact-form';

// const traits = [
//   new Trait({
//     title: 'CLEAN CODE',
//     subtext: 'I prioritize maintainability and readability of project source code. This enables new developers to approach the codebase with ease.',
//     ImageComponent: CleanCodeIllustration
//   })
// ];

const IndexPage = ({ data }) => (
  <>
    <Layout>
      <SEO
        title="Home"
        keywords={[
          `gatsby`,
          `application`,
          `react`,
          `node`,
          `javascript`,
          `python`,
          `java`,
          `kevin`,
          `hallett`,
          `developer`,
          `webapp`,
        ]}
      />
      <Header
        emphasizedIntroText="Hello, "
        introText="my name is Kevin Hallett. I am a software engineer."
        subheading="I am passionate about building highly interactive web applications."
      />
      <HeaderIllustrations />
      <AboutMeSection />
      {/* <TraitSection traits={traits} /> */}
      <PortfolioPreview data={data} />
      <ContactForm method="post" name="contact" honeypot="bot-field" />
    </Layout>
  </>
);

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
    owStats: file(relativePath: { eq: "project-ow-stats.png" }) {
      ...projectImage
    }
    starcraft2Bot: file(relativePath: { eq: "project-starcraft2-bot.png" }) {
      ...projectImage
    }
    tempest: file(relativePath: { eq: "project-tempest.png" }) {
      ...projectImage
    }
    retroPaddleBall: file(
      relativePath: { eq: "project-retro-paddle-ball.png" }
    ) {
      ...projectImage
    }
    fireAnimation: file(relativePath: { eq: "project-fire-animation.png" }) {
      ...projectImage
    }
    roguelike: file(relativePath: { eq: "project-roguelike.png" }) {
      ...projectImage
    }
    kuesuto: file(relativePath: { eq: "project-kuesuto.png" }) {
      ...projectImage
    }
    projects: allFile(filter: { sourceInstanceName: { eq: "projects" } }) {
      edges {
        node {
          childProjectsJson {
            id
            type
            name
            imageName
            description
            solo
            pagePath
            homePage
            index
          }
        }
      }
    }
  }
`;

export default IndexPage;
