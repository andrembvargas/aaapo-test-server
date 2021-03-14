import React from "react"
import { graphql } from "graphql"

const Team = ({ data }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1>{data.team.teamInfo.name}</h1>
      <p>{data.team.teamInfo.estado}</p>
      <div>
        {data.team.treinadores.map(treinador => (
          <p>{treinador}</p>
        ))}
      </div>
    </div>
  )
}

export default Team

export const pageQuery = graphql`
  query($slug: String!) {
    team: contentfulTeam(slug: { eq: $slug }) {
      slug
      futebol
      numberOfPlayers
      treinadores
      teamInfo {
        name
        estado
        liga
      }
    }
  }
`
