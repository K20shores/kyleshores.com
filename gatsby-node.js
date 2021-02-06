const { createFilePath } = require("gatsby-source-filesystem")
const path = require("path")

exports.onCreateNode = async ({ node, actions, getNode }) => {
  const { createNodeField } = actions
  if (node.internal.type === "Mdx") {
    const value = `blog${createFilePath({
      node,
      getNode,
      trailingSlash: false,
    })}`
    createNodeField({
      node,
      name: "slug",
      value: value,
    })
  }
}

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions
  const result = await graphql(`
    query {
      allMdx {
        edges {
          node {
            id
            fields {
              slug
            }
          }
        }
      }
    }
  `)
  if (result.errors) {
    reporter.panicOnBuild('RROR: Loading "createPages" query')
  }
  const posts = result.data.allMdx.edges
  posts.forEach(({ node }, index) => {
    createPage({
      path: node.fields.slug,
      component: path.resolve(`./src/templates/blog-page-layout.js`),
      context: { id: node.id },
    })
  })
}
