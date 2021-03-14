/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require("path")
const slash = require("slash")

exports.createPage = ({ graphql, actions }) => {
  const { createPage } = actions

  return graphql(
    `
      {
        allContentfulTeam {
          edges {
            node {
              slug
            }
          }
        }
      }
    `
  )
    .then(result => {
      if (result.errors) {
        console.log("Error with contentful data", result.errors)
      }

      const teamTemplate = path.resolve("./src/templates/team.js")

      result.data.allContentfulTeam.edges.forEach(team => {
        createPage({
          path: `/teams/${team.node.slug}/`,
          component: slash(teamTemplate),
          context: {
            slug: team.node.slug,
          },
        })
      })
    })
    .catch(error => console.log("Error with contentful data", error))
}
