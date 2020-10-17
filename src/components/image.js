import React from "react"
import Img from 'gatsby-image';
import { StaticQuery, graphql } from 'gatsby';

function renderImage(file, caption, style) {
    console.log(style)
    return (
        <div
            style={{
                ...style
            }}
        >
            <Img fluid={file.node.childImageSharp.fluid} />
            <span 
                dangerouslySetInnerHTML={{ __html: caption }} 
                style={{
                    display: `inline-block`,
                    textAlign: `center`,
                    color: `grey`,
                    fontSize: `80%`,
                }}>
                </span>
            <hr></hr>
        </div>
    )
  }

const Image = function(props) {
    return <StaticQuery
    query={graphql`
      query {
        images: allFile {
          edges {
            node {
              extension
              relativePath
              childImageSharp {
              fluid(maxWidth: 1000) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
    `}
    render={(data) => {
      const image = data.images.edges.find(
        image => image.node.relativePath === props.src
      )
      return(renderImage(image, props.caption, props.style))
    }}
  />
}

export default Image