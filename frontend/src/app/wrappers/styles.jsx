import React from 'react'
import { ThemeProvider } from 'emotion-theming'
import { MuiThemeProvider } from '@material-ui/core'
import { CssBaseline } from '@material-ui/core'
import { muiTheme, theme } from 'styles/theme'

export const StylesWrapper = ({ children }) => (
  <ThemeProvider theme={theme}>
    <MuiThemeProvider theme={muiTheme}>
      <CssBaseline />
      {children}
    </MuiThemeProvider>
  </ThemeProvider>
)
