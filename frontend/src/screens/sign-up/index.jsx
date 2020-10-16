import React, { useState } from 'react'
import { signUp } from './request'
import { Ui } from './ui'

export const SignUp = () => {
  const [errorState, setErrorState] = useState({
    invalidInput: false,
    errors: {},
  })

  const onSubmit = async (data, e) => {
    try {
      const { response, isError } = await signUp(data)
      if (isError) {
        const responseData = response.response
        if (responseData.status === 400) {
          setErrorState({ invalidInput: true, errors: responseData.data })
        }
      }
      e.preventDefault()
    } catch (error) {
      console.error(error)
    }
  }

  return <Ui onSubmit={onSubmit} errorState={errorState} />
}
