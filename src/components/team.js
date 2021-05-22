import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const Team = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulTeam {
        edges {
          node {
            slug
            coaches
            numberOfPlayers
            teamInfo {
              name
              sport
              league
            }
            soccer {
              gatsbyImageData
            }
          }
        }
      }
    }
  `)
  const teams = data.allContentfulTeam.edges
  return (
    <div className="timecos">
      {teams.map(({ node }) => {
        return (
          <div key={node.id} className="time">
            <h1>{node.slug}</h1>
            <p>É um time de {node.teamInfo.sport}!</p>
            <p>Nosso técnico é o {node.coaches}.</p>
          </div>
        )
      })}
    </div>
  )
}

export default Team
