import React, { useState } from 'react'
import { signUp } from './request'
import { Ui } from './ui'

export const SignUp = () => {
  const [wasInvalidInput, setWasInvalidInput] = useState(false)

  const onSubmit = async (data, e) => {
    try {
      const { response, isError } = await signUp(data)
      if (isError) {
        const data = response.response
        if (data.status === 400) {
          setWasInvalidInput(true)
        }
      }
      e.preventDefault()
    } catch (error) {
      console.error(error)
    }
  }

  return <Ui onSubmit={onSubmit} wasInvalidInput={wasInvalidInput} />
}
