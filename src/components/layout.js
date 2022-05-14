import * as React from "react"
import * as styles from "./layout.module.scss"
import { Link, useStaticQuery, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import Social from "./social"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query LayoutQuery {
      site {
        siteMetadata {
          author {
            name
            summary
          }
        }
      }
    }
  `)

  const author = data.site.siteMetadata?.author

  const particlesInit = async (main) => {
    await loadFull(main);
  };

  const particlesLoaded = (container) => {
  };

  return (
    <div className={styles.layout}>
      <header className={styles.header}>
        <Particles
          className={styles.tsparticles}
          init={particlesInit}
          loaded={particlesLoaded}
          options={{
            fullScreen: false,
            background: {
              zorder: 0
            },
            fpsLimit: 120,
            interactivity: {
              events: {
                onClick: {
                  enable: true,
                  mode: "push",
                },
                onHover: {
                  enable: true,
                  mode: "grab",
                },
                resize: true,
              },
              modes: {
                push: {
                  particles_nb: 4,
                },
                repulse: {
                  distance: 200,
                  duration: 0.4,
                },
              },
            },
            particles: {
              color: {
                value: "#ffffff",
              },
              links: {
                color: "#ffffff",
                distance: 150,
                enable: true,
                opacity: 0.5,
                width: 1,
              },
              collisions: {
                enable: true,
              },
              move: {
                direction: "none",
                enable: true,
                outModes: {
                  default: "bounce",
                },
                random: false,
                speed: .1,
                straight: false,
              },
              number: {
                density: {
                  enable: true,
                  area: 800,
                },
                value: 200,
              },
              opacity: {
                value: 0.5,
              },
              shape: {
                type: "circle",
              },
              size: {
                value: { min: 1, max: 5 },
              },
            },
            detectRetina: true,
          }}
        />
        <div className={styles.headerContainer}>
          <StaticImage
            className={styles.bioAvatar}
            layout="fixed"
            formats={["auto", "webp", "avif"]}
            src="../images/profile-pic.png"
            width={150}
            height={150}
            quality={100}
            alt="Profile picture"
          />
          <hr/>
          <Link to="/">
            <h1>
              {author.name}
            </h1>
          </Link>
          <Social />
          <uL className={styles.nav}>
            <li>
              <Link to="/about">
                About
              </Link>
            </li>
            <li>
              <Link to="/thoughts">
                Thoughts
              </Link>
            </li>
            <li>
              <Link to="/research">
                Research
              </Link>
            </li>
          </uL>
        </div>
      </header>

      <div className={styles.content}>
        <main className={styles.main}>
          {children}
        </main>
        <footer className={styles.footer}>
          <hr/>
          <div classname={styles.copyright}>
            © {new Date().getFullYear()} {author?.name}, Built with&nbsp;<a href="https://www.gatsbyjs.com" target="_blank" rel="noreferrer">Gatsby</a>
          </div>
        </footer>
      </div>
    </div>
  )
}

export default Layout
