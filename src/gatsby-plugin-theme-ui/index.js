// Site-level theme-ui shadow: deep-merged over gatsby-theme-ui-preset by
// gatsby-plugin-theme-ui. Aligns the blog with the "twilight arcade" palette
// used on the marketing pages (see src/styles/global.css).

const void_ = `#171430`;
const voidDeep = `#100e22`;
const dusk = `#211d3d`;
const parchment = `#efeae0`;
const ember = `#ff8c42`;
const emberDeep = `#c25e17`;
const storm = `#7fa8ff`;
const mist = `#9a93b8`;

const paper = `#faf6ec`;
const ink = `#262239`;

export default {
  initialColorModeName: `dark`,
  fonts: {
    body: `'Atkinson Hyperlegible', 'Segoe UI', sans-serif`,
    heading: `'Bricolage Grotesque', 'Segoe UI', sans-serif`,
    monospace: `'IBM Plex Mono', Consolas, monospace`,
  },
  colors: {
    text: ink,
    background: paper,
    primary: emberDeep,
    secondary: ink,
    muted: `rgba(38, 34, 57, 0.2)`,
    highlight: `rgba(255, 140, 66, 0.15)`,
    heading: ink,
    prism: {
      background: voidDeep,
    },
    modes: {
      dark: {
        text: parchment,
        background: void_,
        primary: ember,
        secondary: mist,
        muted: `rgba(239, 234, 224, 0.15)`,
        highlight: dusk,
        heading: parchment,
      },
    },
  },
  styles: {
    a: {
      color: `primary`,
    },
    blockquote: {
      borderLeft: theme => `3px solid ${theme.colors.primary}`,
      paddingLeft: 3,
      marginLeft: 0,
    },
    // square corners to match the sprite-edged look of the rest of the site
    pre: {
      borderRadius: 0,
    },
    inlineCode: {
      borderRadius: 0,
    },
    table: {
      width: `100%`,
      borderCollapse: `collapse`,
      marginBottom: 3,
    },
    th: {
      fontFamily: `monospace`,
      fontSize: 0,
      letterSpacing: `0.12em`,
      textTransform: `uppercase`,
      textAlign: `left`,
      borderBottom: theme => `1px solid ${theme.colors.muted}`,
      padding: `0.6rem 1rem 0.6rem 0`,
    },
    td: {
      borderBottom: theme => `1px solid ${theme.colors.muted}`,
      padding: `0.6rem 1rem 0.6rem 0`,
      verticalAlign: `top`,
    },
  },
};
