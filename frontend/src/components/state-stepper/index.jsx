import React, { useState } from 'react'
import styled from 'styled-components'
import { Box, Step, Stepper, StepButton } from '@material-ui/core'

function getStates() {
  return [
    'Alabama',
    'Arizona',
    'Colorado',
    'Florida',
    'Georgia',
    'Iowa',
    'Kansas',
    'Maine',
    'Michigan',
    'Minnesota',
    'Montana',
    'North Carolina',
    'New Hampshire',
    'Nevada',
    'Ohio',
    'Pennsylvania',
    'Texas',
    'Wisconsin',
  ]
}

const StateStepperComp = styled(Stepper)`
  && {
    flex-wrap: wrap;
    & > div {
      margin-bottom: 1rem;
    }
  }
`
// function getStateContent(step, states) {
//   switch (step) {
//     case 0:
//       return states[0]
//     case 1:
//       return states[1]
//     case 2:
//       return states[2]
//     case 3:
//       return states[3]
//     case 4:
//       return states[4]
//     case 5:
//       return states[5]
//     case 6:
//       return states[6]
//     case 7:
//       return states[7]
//     case 8:
//       return states[8]
//     case 9:
//       return states[9]
//     case 10:
//       return states[10]
//     case 11:
//       return states[11]
//     case 12:
//       return states[12]
//     case 13:
//       return states[13]
//     case 14:
//       return states[14]
//     case 15:
//       return states[15]
//     case 16:
//       return states[16]
//   }
// }

export const StateStepper = ({ slides }) => {
  const [activeState, setActiveState] = useState(0)
  const states = getStates()

  const handleState = (state) => () => {
    setActiveState(state)
  }

  return (
    <>
      <Box>
        <img src={slides[activeState]} alt={states[activeState]} width="100%" />
      </Box>
      <StateStepperComp
        alternativeLabel
        nonLinear
        activeStep={activeState}
        connector={false}>
        {states.map((label, index) => {
          return (
            <Step key={label}>
              <StepButton onClick={handleState(index)}>{label}</StepButton>
            </Step>
          )
        })}
      </StateStepperComp>
    </>
  )
}
