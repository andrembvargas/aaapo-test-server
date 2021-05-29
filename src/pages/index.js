import * as React from "react"
import { graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="Home" />
      <div className="timecos">
        <div className="time">
          <p>
            O time é o {data.contentfulTeam.teste}, seu técnico é o{" "}
            {data.contentfulTeam.coaches}, com{" "}
            {data.contentfulTeam.numberOfPlayers} jogadores. Joga na{" "}
            {data.contentfulTeam.teamInfo.league}.
          </p>
          <GatsbyImage
            alt="imagem"
            image={data.contentfulTeam.soccer.gatsbyImageData}
          />
        </div>
      </div>
    </Layout>
  )
}

export const data = graphql`
  query MyQuery {
    contentfulTeam {
      teste
      numberOfPlayers
      teamInfo {
        sport
        league
      }
      coaches
      soccer {
        gatsbyImageData(placeholder: TRACED_SVG)
      }
    }
  }
`

export default IndexPage
