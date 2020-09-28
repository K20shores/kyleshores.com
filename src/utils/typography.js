import Typography from "typography"
import twinPeaksTheme from "typography-theme-twin-peaks"

const typography = new Typography(twinPeaksTheme)

// Export helper functions
export const { scale, rhythm, options } = typography
export default typography
