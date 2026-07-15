import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
import { AboutMeSection } from '../components/about-me-section';
import { Header } from '../components/header';
import { PortfolioPreview } from '../components/portfolio-preview';
import { RecentPosts } from '../components/recent-posts';
import { ContactForm } from '../components/contact-form';

const IndexPage = ({ data }) => (
  <Layout>
    <SEO
      title="Kevin Hallett — Software Engineer"
      standaloneTitle
      pathname="/"
      keywords={[
        `kevin hallett`,
        `software engineer`,
        `frontend`,
        `react`,
        `typescript`,
        `graphql`,
        `webgl`,
        `game development`,
        `portfolio`,
      ]}
      schema={{
        '@context': `https://schema.org`,
        '@graph': [
          {
            '@type': `Person`,
            name: `Kevin Hallett`,
            url: `https://kevinmhallett.com/`,
            jobTitle: `Software Engineer`,
            email: `contact@kevinmhallett.com`,
            sameAs: [`https://github.com/Arcia125`],
            knowsAbout: [
              `React`,
              `TypeScript`,
              `GraphQL`,
              `Node.js`,
              `WebGL`,
              `game development`,
            ],
          },
          {
            '@type': `WebSite`,
            name: `Kevin Hallett`,
            url: `https://kevinmhallett.com/`,
          },
        ],
      }}
    />
    <Header
      eyebrow="Kevin Hallett / Software Engineer"
      headline="I build interfaces you can "
      headlinePlay="play with."
      subheading="Frontend-focused engineer working in React, TypeScript, and GraphQL — from pixel-art game worlds and WebGL storms to production business tools."
    />
    <AboutMeSection />
    <PortfolioPreview data={data} />
    <RecentPosts />
    <ContactForm method="post" name="contact" honeypot="bot-field" />
  </Layout>
);

export const projectImageFragment = graphql`
  fragment projectImage on File {
    childImageSharp {
      gatsbyImageData(
        layout: CONSTRAINED
      )
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
    invester: file(relativePath: { eq: "project-invester.png" }) {
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
