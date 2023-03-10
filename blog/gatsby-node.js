/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/
 */

/**
 * @type {import('gatsby').GatsbyNode['createPages']}
 */
const { resolve } = require('path');
const path = require(`path`);
const { resourceLimits } = require('worker_threads');


exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  return new Promise((resolve, reject) =>{
    graphql(`
    {
      allContentfulBlogPost {
        edges {
          node {
            slug
          }
        }
      }
    }
    `).then(result => {
      if (result.errors){
        reject(result.errors)
      }
      result.data.allContentfulBlogPost.edges.array.forEach((edge) => {
        createPage({
          path: edge.node.slug,
          component: require.resolve("./src/templates/blog-post.js"),
          context: {
            slug: edge.node.slug
          },
          defer: true,
        })
      })
      resolve()
    })
  })
}
