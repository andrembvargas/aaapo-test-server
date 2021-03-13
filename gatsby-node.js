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
              titulo
              descricao {
                descricao
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

      const aaapoTemplate = path.resolve("./src/pages/siteposts.js")

      result.data.allContentfulAaapo.edges.forEach(edge => {
        createPage({
          path: `/siteposts/${edge.node.slug}/`,
          component: slash(aaapoTemplate),
          context: {
            slug: edge.node.slug,
            id: edge.node.id,
          },
        })
      })
    })
    .catch(error => console.log("Error with contentful data", error))
}
