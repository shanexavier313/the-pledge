import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { getAccessToken } from 'domains/identity'
import { loginAction } from 'redux/actions/authActions'
import { Ui } from './ui'

export const Login = () => {
  const [wereCredentialsDenied, setWereCredentialsDenied] = useState(false)
  const dispatch = useDispatch()

  const onSubmit = async (data, e) => {
    try {
      const { response, isError } = await loginAction(dispatch, data)
      if (isError) {
        const data = response.response
        if (data.status === 401) {
          setWereCredentialsDenied(true)
        }
      }
      e.preventDefault()
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <Ui onSubmit={onSubmit} wereCredentialsDenied={wereCredentialsDenied} />
  )
}
