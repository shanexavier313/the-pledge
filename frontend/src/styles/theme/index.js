import { createMuiTheme } from '@material-ui/core/styles'
import * as colors from './colors'

export const theme = createMuiTheme({
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
      white: colors.white,
      disabled: colors.grey300,
      hint: colors.grey400,
      primary: colors.grey800,
      secondary: colors.grey600,
    },
  },
  spacing: 16,
  typography: {},
})
