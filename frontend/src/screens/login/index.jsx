import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { loginAction } from 'redux/actions/authActions'
import { Ui } from './ui'

export const Login = () => {
  const [wereCredentialsDenied, setWereCredentialsDenied] = useState(false)
  const dispatch = useDispatch()

  const onSubmit = async (data, e) => {
    try {
      await loginAction(dispatch, data)
      e.preventDefault()
    } catch (error) {
      console.error(error)
    }
  }

  return <Ui onSubmit={onSubmit} />
}
