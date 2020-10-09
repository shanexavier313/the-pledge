import React from 'react'
import { ThemeProvider } from 'emotion-theming'
import preset from '@rebass/preset'

export const StylesWrapper = ({ children }) => (
  <ThemeProvider theme={preset}>{children}</ThemeProvider>
)
