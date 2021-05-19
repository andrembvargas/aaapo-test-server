import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const Team = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulTeam {
        edges {
          node {
            slug
            teeball
            coed
            coaches
            numberOfPlayers
            teamInfo {
              name
              sport
              league
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
            <p>{node.teamInfo.sport}</p>
            <p>{node.coaches}</p>
          </div>
        )
      })}
    </div>
  )
}

/*
<div className="timecos">
  <ul className="times">
    {teams.map(({ node }) => {
      return (
        <li key={node.id} className="time">
          <h1>{node.slug}</h1>
          <p>{node.teamInfo.sport}</p>
        </li>
      )
    })}
  </ul>
</div>
*/

export default Team
