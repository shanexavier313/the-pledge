import axios from 'axios'
import React, { useCallback, useMemo, useState } from 'react'
import { node } from 'prop-types'
import { navigate } from '@reach/router'
import {
  clearToken,
  getToken,
  setToken,
  IdentityContext,
} from '../../../domains/identity'

export const IdentityWrapper = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(getToken() !== undefined)

  const logIn = useCallback(async (email, password, redirectUri = 'home') => {
    try {
      const response = await axios.post('localhost:8000/api/login', {
        email,
        password,
      })
      setToken(response.data)
      setIsLoggedIn(true)
      return { response, isError: false }
    } catch (error) {
      console.error(error)
      return { response: error, isError: true }
    }
  }, [])

  const logOut = useCallback((redirectUri = 'home') => {
    navigate(redirectUri)
    setTimeout(() => {
      clearToken()
      setIsLoggedIn(false)
    }, 1)
  }, [])

  const context = useMemo(
    () => ({
      isLoggedIn,
      logIn,
      logOut,
    }),
    [isLoggedIn, logIn, logOut],
  )

  return (
    <IdentityContext.Provider value={context}>
      {children}
    </IdentityContext.Provider>
  )
}

IdentityWrapper.propTypes = {
  children: node.isRequired,
}
