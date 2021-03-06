import React from 'react'
import styled from 'styled-components'
import { Button } from '@material-ui/core'
const TabBtn = styled(Button)`
  && {
    min-width: 150px;
    margin: 1rem;
  }
`
const TabButton = ({ label, onClick, active = false }) => {
  if (active) {
    return (
      <TabBtn variant="contained" color="primary" onClick={onClick}>
        {label}
      </TabBtn>
    )
  } else {
    return <TabBtn onClick={onClick}>{label}</TabBtn>
  }
}
export default TabButton
