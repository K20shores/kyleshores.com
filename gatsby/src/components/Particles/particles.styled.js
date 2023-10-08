import styled from 'styled-components';
import { Particles } from "react-tsparticles";

const StyledParticles = styled(Particles)`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: auto;

  @media (prefers-reduced-motion: reduce) {
    display: none;
  }
`

export {
  StyledParticles
}