import React from 'react'
import { ThemeProvider } from 'emotion-theming'
import preset from '@rebass/preset'

const theme = {
  ...preset,
  colors: {
    primary: '#F0682F',
    secondary: '#004EB1',
    white: '#FFFFFF',
    grey100: '#F8F9FA',
    grey200: '#F1F3F5',
    grey300: '#E9EDF1',
    grey400: '#CED4DA',
    grey500: '#ADB5BD',
    grey600: '#868E96',
    grey700: '#495057',
    grey800: '#343A40',
    grey900: '#181B1E',
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
  fontSizes: [16, 18, 22, 28, 32, 40],
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
  text: {
    body: {
      fontFamily: 'body',
      fontWeight: 'body',
      lineHeight: 'body',
    },
    heading: {
      fontFamily: 'heading',
      fontWeight: 'heading',
      lineHeight: 'heading',
    },
  },
  buttons: {
    primary: {
      color: 'white',
      bg: 'primary',
    },
    secondary: {
      color: 'primary',
      bg: 'white',
      borderColor: 'primary',
      borderWidth: 'button',
    },
    tertiary: {
      color: 'primary',
      bg: 'white',
    },
  },
}

export const StylesWrapper = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
)
