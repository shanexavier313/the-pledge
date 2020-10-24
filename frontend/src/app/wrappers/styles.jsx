import React from 'react'
import { MuiThemeProvider } from '@material-ui/core'
import { CssBaseline } from '@material-ui/core'
import { theme } from 'styles/theme'

export const StylesWrapper = ({ children }) => (
  <MuiThemeProvider theme={theme}>
    <CssBaseline />
    {children}
  </MuiThemeProvider>
)
