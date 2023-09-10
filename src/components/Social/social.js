import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import PropTypes from "prop-types"

import { StyledSocialList, StyledSocialLi } from "./social.styled"

import IconsFile from "../../../static/images/icons.svg"

// https://stackoverflow.com/a/42296853/5217293
const Icon = ({ name, color, size }) => (
  <svg className={`icon icon-${name}`} fill={color} width={size} height={size}>
    <use href={`${IconsFile}#icon-${name}`} xlinkHref={`${IconsFile}#icon-${name}`} />
  </svg>
)

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.string,
  size: PropTypes.number,
}

const Icons = ({ size }) => {
  const data = useStaticQuery(graphql`
    query SocialQuery {
      site {
        siteMetadata {
          social {
            linkedin
            orcid
            github
            googlescholar
          }
        }
      }
    }
  `)

  const social = data.site.siteMetadata?.social

  let icons = [
    {
      src: <Icon name="linkedin-square" color="#000" size={size} />,
      link: `https://www.linkedin.com/in/${social?.linkedin}`,
      alt: "Click to read my Linkedin profile",
    },
    {
      src: <Icon name="github" color="#000" size={size} />,
      link: `https://www.github.com/${social?.github}`,
      alt: "Click to see my Github",
    },
    {
      src: <Icon name="google-scholar" color="#000" size={size} />,
      link: `https://scholar.google.com/citations?user=${social?.googlescholar}`,
      alt: "Click to see my citations on Google Scholar",
    },
    {
      src: <Icon name="orcid" color="#000" size={size} />,
      link: `https://www.orcid.org/${social?.orcid}`,
      alt: "Click to see my researcher profile on Orcid",
    },
  ]

  return icons.map((icon, index) => (
    <StyledSocialLi key={index}>
      <a
        href={icon.link}
        target="_blank"
        rel="noreferrer"
        alt={icon.alt}
        aria-label={icon.alt}
      >
        {icon.src}
      </a>
    </StyledSocialLi>
  ))
}

const Social = ({ size = 30 }) => {
  return (
    <StyledSocialList>
      <Icons size={size}/>
    </StyledSocialList>
  )
}

export default Social
