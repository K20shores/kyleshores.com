import Typography from "typography"
import twinPeaksTheme from "typography-theme-twin-peaks"
import siteTheme from "../_theme.scss"

twinPeaksTheme.overrideThemeStyles = () => ({
  a: {
    color: siteTheme.tetrad1,
  },
})

const typography = new Typography(twinPeaksTheme)

// Export helper functions
export const { scale, rhythm, options } = typography
export default typography
