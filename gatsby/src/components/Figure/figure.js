import * as React from "react"

import { StyledFigure } from "./figure.styled"
import { Theme, themeData } from "../../theme";
import { getImage, GatsbyImage } from 'gatsby-plugin-image';

// this is a modified version of what's here: https://www.gatsbyjs.com/blog/mdx-embedded-gatsby-image/
// it's stupid and dumb that this is the only way I could figure this out
// also this: https://stackoverflow.com/questions/71944655/gatsby-how-to-pass-image-source-as-a-prop-in-mdx-component
const Figure = ({which, caption, ...props}) => {
  const image = getImage(props.data.mdx.frontmatter.embeddedImages[which].childImageSharp.gatsbyImageData)
  return (
    <Theme>
      <StyledFigure>
        <GatsbyImage
          image={image}
          alt=""
          width={100}
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