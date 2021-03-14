import React from "react"
import { graphql } from "graphql"

const Aaapoteste = ({ data }) => {
  return (
    <div>
      <h1>{data.teste.titulo}</h1>
      <p>{data.teste.descricao.descricao}</p>
    </div>
  )
}

export default Aaapoteste

export const pageQuery = graphql`
  query($slug: String!) {
    teste: contentfulAaapo(slug: { eq: $slug }) {
      slug
      titulo
      descricao {
        descricao
      }
      images {
        file {
          url
        }
      }
    }
  }
`
