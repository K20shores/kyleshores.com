import * as React from "react"

import { loadFull } from "tsparticles";
import { StyledParticles } from "./particles.styled"

const Particles = () => {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  const particlesLoaded = (container) => {
  };

  return (
    <StyledParticles
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
              enable: false,
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
            // https://www.schemecolor.com/lgbt-flag-colors.php
            value: [
              "#FF0018",
              "#FFA52C",
              "#FFFF41",
              "#008018",
              "#0000F9",
              "#86007D"
            ]
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
            speed: .11,
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
  )
}

export default Particles;