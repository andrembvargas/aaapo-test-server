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
        allContentfulAaapo {
          edges {
            node {
              slug
              }
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

      const aaapoTemplate = path.resolve("./src/templates/aaapoteste.js")

      result.data.allContentfulAaapo.edges.forEach(aaapoteste => {
        createPage({
          path: `/siteposts/${aaapoteste.node.slug}/`,
          component: slash(aaapoTemplate),
          context: {
            slug: aaapoteste.node.slug,
          },
        })
      })
    })
    .catch(error => console.log("Error with contentful data", error))
}
