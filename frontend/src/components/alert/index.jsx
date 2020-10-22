import React from 'react'
import MuiAlert from '@material-ui/lab/Alert';

export const Alert = ({ children, isError }) => (
  <MuiAlert severity={isError ? 'warning' : 'error'}>{children}</MuiAlert>
)
