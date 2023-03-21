import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"

const IndexPage = ({ data }) => (
  <Layout>
    <Seo title="Home" />
    <ul className={styles.list}>
      {
        data.allContentfullBlogPost.edges.map(edge => (
          <li key={edge.node.id}>
            <Link to={edge.node.slug}>{edge.node.title}</Link>
            <div>
              <Gatsby Image
                image={edge.node.heroImage.gatsbyImageData}
              />
            </div>
            <div>
              {edge.node.body.childMarkdownRemark.excerpt}
            </div>
          </li>
        ))
      }
    </ul>
  </Layout>
)

export const query = graphl`
  {
    allContentfulBlogPost {
      edges {
        node {
          id
          title
          slug
          body {
            childMarkdownRequest {
              excerpt
            }
          }
          heroImage{
            gastbyImageData(
              layout: CONSTRAINED
              placeholder: BLURRED
              width: 300
            )
          }
        }
      }
    }
  }
`