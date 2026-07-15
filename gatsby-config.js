module.exports = {
  siteMetadata: {
    title: `Kevin Hallett`,
    description: `Kevin Hallett — frontend-focused software engineer building interactive, real-time web applications with React, TypeScript, and GraphQL.`,
    author: `Kevin Hallett`,
    siteUrl: `https://kevinmhallett.com`,
  },
  plugins: [
    // `gatsby-plugin-react-helmet`,
    // `gatsby-plugin-mdx`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-transformer-sharp`,
      options: {
        checkSupportedExtensions: true,
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `projects`,
        path: `${__dirname}/src/projects`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Kevin Hallett - Software Engineer - Personal Portfolio`,
        short_name: `Kevin Hallett - Software Engineer`,
        start_url: `/`,
        background_color: `#171430`,
        theme_color: `#171430`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/project-pages`,
        name: 'markdown-pages',
      },
    },
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-theme-blog`,
      options: {
        basePath: `/blog`,
      },
    },
    `gatsby-plugin-sitemap`,
    {
      // gatsby-plugin-google-analytics only speaks the retired Universal
      // Analytics API; a G- measurement ID requires gtag.js
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: ['G-LB5HKHF5V7'],
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
};
