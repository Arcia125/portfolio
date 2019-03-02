const path = require("path");
/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  return new Promise((resolve, reject) => {
    const projectTemplate = path.resolve(`src/templates/project.js`);
    graphql(
      `
        {
          projects: allFile(filter: { sourceInstanceName: { eq: "projects" } }) {
            edges {
              node {
                childProjectsJson {
                  id
                  type
                  name
                  imageName
                  pagePath
                  description
                  solo
                  relativeImagePath
                  repo
                }
              }
            }
          }
        }
      `
    ).then(result => {
      if (result.errors) {
        reject(result.errors);
      }

      result.data.projects.edges.map(edge => {
        const { node } = edge;
        createPage({
          path: node.childProjectsJson.pagePath,
          component: projectTemplate,
          context: {
              ...node.childProjectsJson
          }
        })
      })
      resolve();
    })
  })
}
