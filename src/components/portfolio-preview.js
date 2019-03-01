import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';

import styles from  './portfolio-preview.module.css';
import { PortfolioPreviewSingle } from './portfolio-preview-single';


// export const query = graphql`
//   query {
//     project0: file(relativePath: { eq: "project-ow-stats.png" }) {
//       ...projectImage
//     },
//     project1: file(relativePath: { eq: "starcraft2-bot.png" }) {
//       ...projectImage
//     }
//   }
// `;

const projects = [
  {
    name: 'Overwatch Stats',
    description: 'Mobile app to search for and view overwatch player profiles built with React Native.',
    type: 'mobile',
    solo: true
  },
  {
    name: 'Python Starcraft2 AI',
    description: 'Rule based AI that plays starcraft 2 utilizing the offical Blizzard API.',
    type: 'ai/machine learning',
    solo: true
  },
  {
    name: 'Automouse',
    description: 'Node CLI for mouse and keyboard automation.',
    type: 'cli/tool',
    solo: true
  },
  {
    name: 'Retro Paddle Ball',
    description: 'Pong clone built with Godot.',
    type: 'game',
    solo: true
  },
  {
    name: 'Pixel Fire Animation',
    description: 'Fire animation made with Java.',
    type: 'animation',
    solo: true
  },
  {
    name: 'React Roguelike Game',
    description: 'A game with procedurally generated levels and a progression/loot system.',
    type: 'game',
    solo: true
  }
];

const PortfolioPreview = ({ data }) => (
  <section className={styles.portfolioPreview}>
    <h2 className={styles.portfolioPreviewHeader}>PORTFOLIO</h2>
    <div className={styles.portfolioPreviewProjects}>
    {projects && projects.map((project, projectIndex) => {
      console.log(data);
      return (
        <PortfolioPreviewSingle name={project.name} description={project.description} image={data && data['project' + projectIndex] && <Img fluid={data['project' + projectIndex].childImageSharp.fluid} />} />
      );
    })}</div>
  </section>
);

export { PortfolioPreview };
