const { createFilePath } = require("gatsby-source-filesystem")
const path = require("path")

const projects = require('./src/data/projects.json')

/**
 * https://freddydumont.com/blog/how-to-source-images-and-data-from-json-files-in-gatsby
 * 
 * Create custom Project nodes.
 *
 * We need to 'trick' the sharp transformer to process the image file
 * by building a node with the structure of a File.
 * @see https://stackoverflow.com/a/56012718
 */
exports.sourceNodes = ({ actions, createNodeId, createContentDigest }) => {
  projects.forEach((card) => {
    const {
      title,
      description,
      link,
      image,
      alt,
    } = card;

    // name, extension and absolute path are required to build a File node
    const { name, ext } = path.parse(image);
    const absolutePath = path.resolve(__dirname, "./", image);

    // this data corresponds to a File node that Sharp can process
    const data = {
      name,
      ext,
      absolutePath, // <-- required
      extension: ext.substring(1), // <-- required, remove the dot in `ext`
    };

    // build and create the image node
    const imageNode = {
      ...data,
      id: createNodeId(`card-image-${name}`),
      internal: {
        type: 'ProjectCardImage',
        contentDigest: createContentDigest(data),
      },
    };
    console.log(imageNode)

    actions.createNode(imageNode);

    const node = {
      title,
      description,
      link,
      // when imageNode is created, the sharp plugin adds childImageSharp to the node
      // so it will be available under the `image` field.
      image: imageNode,
      alt,
      id: createNodeId(`card-${title}`),
      internal: {
        type: 'ProjectCard',
        contentDigest: createContentDigest(card),
      },
    };

    actions.createNode(node);
  });
};

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions
  if (node.internal.type === "Mdx") {
    const value = `thoughts${createFilePath({
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
      component: path.resolve(`./src/templates/thought-page-layout.js`),
      context: { id: node.id },
    })
  })
}
