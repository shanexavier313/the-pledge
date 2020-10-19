import preset from '@rebass/preset'
import { createMuiTheme } from '@material-ui/core/styles'
import * as colors from './colors'

export const muiTheme = createMuiTheme({
  palette: {
    primary: {
      main: colors.orangeMain,
      light: colors.orangeLight,
      dark: colors.orangeDark,
      contrastText: colors.white,
    },
    secondary: {
      main: colors.blueMain,
      light: colors.blueLight,
      dark: colors.blueDark,
      contrastText: colors.white,
    },
    error: {
      main: colors.redMain,
      light: colors.redLight,
      dark: colors.redDark,
      contrastText: colors.white,
    },
    warning: {
      main: colors.yellowMain,
      light: colors.yellowLight,
      dark: colors.yellowDark,
      contrastText: colors.grey900,
    },
    success: {
      main: colors.greenMain,
      light: colors.greenLight,
      dark: colors.greenDark,
      contrastText: colors.grey900,
    },
    base: {
      100: colors.grey100,
      200: colors.grey200,
      300: colors.grey300,
      400: colors.grey400,
      500: colors.grey500,
      600: colors.grey600,
      700: colors.grey700,
      800: colors.grey800,
      900: colors.grey900,
    },
    background: {
      default: colors.white,
      layout: colors.grey300,
    },
    text: {
      disabled: colors.grey300,
      hint: colors.grey400,
      primary: colors.grey800,
      secondary: colors.grey600,
    },
  },
  spacing: 16,
  typography: {},
})

export const theme = {
  ...preset,
  colors: {
    primary: '#F0682F',
    secondary: '#004EB1',
    white: '#FFFFFF',
    base100: '#F8F9FA',
    base200: '#F1F3F5',
    base300: '#E9EDF1',
    base400: '#CED4DA',
    base500: '#ADB5BD',
    base600: '#868E96',
    base700: '#495057',
    base800: '#343A40',
    base900: '#181B1E',
  },
  fonts: {
    body: 'Inter, system-ui, sans-serif',
    heading: 'Mulish, system-ui, sans-serif',
    button: 'Inter, system-ui, sans-serif',
    link: 'Inter, system-ui, sans-serif',
  },
  fontWeights: {
    body: 400,
    heading: 800,
    button: 600,
    link: 600,
  },
  fontSizes: [14, 16, 18, 22, 28, 32, 40],
  lineHeights: {
    body: 1.5,
    heading: 1.25,
  },
  borderWidths: {
    button: '1px',
  },
  shadows: {
    small: '0 4px 8px rgba(0, 0, 0, 0.08)',
  },
  // Text variants
  text: {
    body: {
      small: {
        color: 'base800',
        fontFamily: 'body',
        lineHeight: 'body',
        fontWeight: 'body',
        fontSize: 0,
      },
      large: {
        color: 'base800',
        fontFamily: 'body',
        lineHeight: 'body',
        fontWeight: 'body',
        fontSize: 1,
      },
    },
    h1: {
      color: 'base800',
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
      fontSize: 6,
    },
    h2: {
      color: 'base800',
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
      fontSize: 5,
    },
    h3: {
      color: 'base800',
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
      fontSize: 4,
    },
    h4: {
      color: 'base800',
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
      fontSize: 3,
    },
    h5: {
      color: 'base800',
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
      fontSize: 2,
    },
    h6: {
      color: 'base800',
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
      fontSize: 1,
    },
  },
  // Link variants
  links: {
    nav: {
      px: 2,
      color: 'base600',
      fontFamily: 'body',
      lineHeight: 'body',
      fontWeight: 'link',
      fontSize: 1,
      textDecoration: 'none',
      '&:hover': {
        color: 'primary',
        textDecoration: 'underline',
      },
    },
    footer: {
      color: 'base800',
      fontFamily: 'body',
      lineHeight: 'body',
      fontWeight: 'link',
      fontSize: 0,
      textDecoration: 'none',
      '&:hover': {
        color: 'primary',
      },
    },
    ctaLink: {
      color: 'secondary',
      fontFamily: 'body',
      lineHeight: 'body',
      fontWeight: 'link',
      fontSize: 1,
      textDecoration: 'none',
      '&:hover': {
        color: 'base600',
      },
    },
  },
  // Button variants
  buttons: {
    primary: {
      color: 'white',
      fontFamily: 'body',
      fontWeight: 'button',
      bg: 'primary',
      '&:focus': {
        bg: 'white',
        color: 'primary',
      },
    },
    secondary: {
      color: 'primary',
      fontWeight: 'button',
      fontFamily: 'body',
      bg: 'white',
      borderStyle: 'solid',
      borderColor: 'primary',
      borderWidth: 'button',
      '&:focus': {
        bg: 'primary',
        color: 'white',
      },
    },
    tertiary: {
      color: 'primary',
      fontFamily: 'body',
      fontWeight: 'button',
      bg: 'white',
    },
  },
  // Alert variants
  alerts: {
    status: {
      color: 'white',
      bg: 'primary',
    },
    error: {
      color: 'white',
      bg: 'secondary',
    },
  },
  content: {
    normal: {
      px: '10vh',
    },
  },
}
