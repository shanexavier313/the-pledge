import React from 'react'
import { ThemeProvider } from 'emotion-theming'
import { theme } from '../../styles/theme'

export const StylesWrapper = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
)
