import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

import { StyledSocialList, StyledSocialLi } from "./social.styled"

// https://stackoverflow.com/a/42296853/5217293
// the SVG is embedded because Safari refused to render the use element since it thought the data was from some other place
const Icon = ({ name, color, size }) => (
  <svg className={`icon icon-${name}`} fill={color} width={size} height={size}>
    <use xlinkHref={`#icon-${name}`} />
    <symbol id="icon-google-scholar" viewBox="0 0 512 512">
      <path d="m408 107l0-28 20-15-214 0-130 112 86 0c0 2 0 4 0 7 0 20 7 38 22 51 14 14 32 21 53 21 5 0 10 0 14-1-3 6-4 13-4 18 0 10 4 21 13 32-39 2-68 10-86 21-11 6-19 15-25 24-7 10-10 21-10 32 0 10 2 19 6 26 4 8 10 15 17 19 6 5 14 10 23 13 9 3 17 6 26 7 8 1 17 2 26 2 13 0 27-2 40-5 14-4 26-9 38-16 12-6 22-16 29-27 8-12 11-25 11-40 0-11-2-21-6-30-5-9-10-16-17-22-6-6-13-11-19-16-7-5-12-10-17-15-4-5-7-10-7-15 0-5 2-10 6-14 3-5 7-9 12-14 5-4 10-9 15-14 5-5 9-12 13-20 3-8 5-17 5-27 0-14-3-25-8-34 0-1-1-2-2-3l57-46 0 17c-7 1-6 5-6 10l0 129c0 6 5 11 10 11l4 0c6 0 11-5 11-11l0-129c0-5 1-9-6-10z m-108 222c2 1 4 3 8 6 4 3 7 6 8 8 2 1 4 4 7 7 3 4 4 6 5 9 1 2 2 5 4 9 1 3 1 7 1 10 0 17-7 30-20 38-13 8-28 13-47 13-9 0-18-2-27-4-8-2-17-5-25-9-8-5-15-10-20-18-4-8-7-16-7-26 0-11 3-20 8-27 6-8 13-14 23-18 9-3 18-6 27-8 9-2 19-3 29-3 4 0 7 1 10 1 0 0 3 2 8 6 4 3 7 5 8 6z m-3-100c-7 8-18 13-31 13-12 0-22-5-31-14-9-10-16-21-20-33-3-12-5-24-5-36 0-13 3-25 10-35 8-9 18-14 31-14 12 0 23 5 32 15 9 10 15 22 19 34 4 13 6 25 6 36 0 14-4 25-11 34z"/>
    </symbol>
  
    <symbol id="icon-orcid" viewBox="0 0 512 512">
      <path d="m337 195c-8-4-14-6-21-7-6-1-16-2-30-2l-37 0 0 153 38 0c14 0 26-1 34-3 8-2 15-4 20-8 6-3 11-6 15-11 15-15 22-33 22-56 0-22-8-40-22-54-6-5-12-9-19-12z m-81-187c-137 0-248 111-248 248 0 137 111 248 248 248 137 0 248-111 248-248 0-137-111-248-248-248z m-82 358l-30 0 0-206 30 0z m-15-227c-11 0-20-9-20-21 0-11 9-20 20-20 11 0 20 9 20 20 0 12-9 21-20 21z m241 163c-5 13-12 24-22 33-10 10-22 18-35 23-8 3-15 5-21 6-7 1-19 1-38 1l-64 0 0-205 69 0c28 0 50 4 66 13 16 8 29 20 39 37 9 16 14 34 14 53 0 14-2 27-8 39z"/>
    </symbol>
  
    <symbol id="icon-linkedin-square" viewBox="0 0 512 512">
      <path d="m104 404l66 0 0-198-66 0z m71-259c-1-10-4-19-11-25-6-6-15-10-26-10-11 0-20 4-27 10-7 6-11 15-11 25 0 9 4 17 10 24 7 7 16 10 27 10l0 0c11 0 20-3 27-10 7-7 11-15 11-24z m167 259l66 0 0-114c0-29-7-51-21-66-14-15-32-23-55-23-26 0-46 11-60 34l1 0 0-29-66 0c0 12 0 78 0 198l66 0 0-111c0-7 0-12 2-16 2-7 7-12 12-17 6-5 13-7 22-7 22 0 33 15 33 45z m133-285l0 274c0 23-8 42-24 58-16 16-35 24-58 24l-274 0c-23 0-42-8-58-24-16-16-24-35-24-58l0-274c0-23 8-42 24-58 16-16 35-24 58-24l274 0c23 0 42 8 58 24 16 16 24 35 24 58z"/>
    </symbol>
  
    <symbol id="icon-github" viewBox="0 0 512 512">
      <path d="m475 256c0 48-14 91-41 129-28 38-64 65-109 79-5 1-8 1-11-2-2-2-3-5-3-8l0-61c0-18-5-32-15-40 11-1 20-3 29-5 9-3 18-6 27-11 9-6 17-12 23-19 6-8 11-18 15-30 4-13 6-27 6-43 0-23-8-43-23-59 7-18 7-37-2-59-5-1-13 0-23 4-10 3-19 8-26 12l-11 7c-18-5-36-7-55-7-19 0-37 2-55 7-3-2-7-5-12-8-5-3-13-6-24-11-11-4-19-5-24-4-9 22-9 41-2 59-15 16-23 36-23 59 0 16 2 30 6 42 4 13 9 23 15 30 6 8 14 14 23 20 9 5 18 8 27 11 8 2 18 4 29 5-8 7-12 17-14 29-4 2-8 4-13 5-4 1-10 1-16 1-6 0-13-2-19-6-6-4-11-10-16-18-3-6-8-11-14-15-5-4-10-6-14-7l-5-1c-4 0-7 1-9 2-1 1-2 2-1 3 0 1 1 3 2 4 2 1 3 2 4 3l2 2c4 2 8 5 13 11 4 5 7 10 9 14l2 7c3 7 7 13 13 17 6 5 12 8 19 9 7 1 14 2 20 2 6 0 12 0 16-1l6-1c0 7 0 16 1 25 0 10 0 15 0 16 0 3-2 6-4 8-2 3-6 3-11 2-45-14-81-41-109-79-27-38-41-81-41-129 0-40 9-77 29-110 20-34 46-60 80-80 33-20 70-29 110-29 40 0 77 9 110 29 34 20 60 46 80 80 20 33 29 70 29 110z"/>
    </symbol>
  </svg>
)

const Icons = (props) => {
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
      src: <Icon name="linkedin-square" {...props} />,
      link: `https://www.linkedin.com/in/${social?.linkedin}`,
      alt: "Click to read my Linkedin profile",
    },
    {
      src: <Icon name="github" {...props} />,
      link: `https://www.github.com/${social?.github}`,
      alt: "Click to see my Github",
    },
    {
      src: <Icon name="google-scholar" {...props} />,
      link: `https://scholar.google.com/citations?user=${social?.googlescholar}`,
      alt: "Click to see my citations on Google Scholar",
    },
    {
      src: <Icon name="orcid" {...props} />,
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

const Social = ({ size = 30, color="black" }) => {
  return (
    <StyledSocialList>
      <Icons size={size} color={color}/>
    </StyledSocialList>
  )
}

export default Social