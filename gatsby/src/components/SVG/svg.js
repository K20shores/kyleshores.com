import React from "react";

import { StyledSVG } from "./svg.styled";

const SvgDisplay = ({ uri, width, height, alt }) => {
  return (
    <StyledSVG 
      src={uri}
      height={height}
      width={width}
      alt={alt || ""}
    />
  )
}

export default SvgDisplay;