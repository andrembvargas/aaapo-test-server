import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Team from "../components/team"
import Img from "gatsby-image"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <section className="container">
      <Team />
    </section>
    <section className="hero">
      <Img
        fluid={data.torcidaFlu.childImageSharp.fluid}
        className="hero-image"
      />
    </section>
    <p>
      <Link to="/page-2/">View page 2</Link> <br />
      <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
    </p>
  </Layout>
)

export const fluidImage = graphql`
  fragment fluidImage on File {
    childImageSharp {
      fluid(maxWidth: 1600) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`

export const pageQuery = graphql`
  query {
    torcidaFlu: file(relativePath: { eq: "torcidaflu.jpg" }) {
      ...fluidImage
    }
  }
`

export default IndexPage
