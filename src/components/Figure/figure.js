import * as React from "react"

import { StyledFigure } from "./figure.styled"
import { Theme, themeData } from "../../theme";
import { getImage, GatsbyImage } from 'gatsby-plugin-image';

// this is a modified version of what's here: https://www.gatsbyjs.com/blog/mdx-embedded-gatsby-image/
// it's stupid and dumb that this is the only way I could figure this out
const Figure = ({which, caption, ...props}) => {
  const image = getImage(props.data.mdx.frontmatter.embeddedImages[which].childImageSharp.gatsbyImageData)
  return (
    <Theme>
      <StyledFigure>
        <GatsbyImage
          image={image}
          alt=""
          style={{
            borderRadius: "5%",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
          }}
        />
        <figcaption>{caption}</figcaption>
      </StyledFigure>
    </Theme>
  )
}

export default Figure;