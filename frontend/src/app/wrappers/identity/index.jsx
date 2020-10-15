import axios from 'axios'
import React, { useCallback, useMemo, useState } from 'react'
import { node } from 'prop-types'
import { navigate } from '@reach/router'
import { API_URL } from '../../../domains/constants'
import {
  clearTokens,
  setTokens,
  getAccessToken,
  IdentityContext,
} from '../../../domains/identity'
import axiosInstance from '../../../domains/axios'

import { connect } from 'react-redux';
import { authUser } from '../../../actions';
import { store } from '../../../index';
export const IdentityWrapper = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(getAccessToken() !== undefined)
  console.log('here', getAccessToken())

  const logIn = useCallback(
    async (email, password, redirectUri = 'dashboard') => {
      try {
        const response = await axios.post(API_URL + 'login/', {
          email: email,
          password: password,
        })
        const data = response.data
        axiosInstance.defaults.headers['Authorization'] = 'Token ' + data.access
        setTokens(data)
        setIsLoggedIn(true)
        console.log('before redirect', getAccessToken())
        store.dispatch(authUser({
          type: 'LOGIN_SUCCESS',
          payload: getAccessToken()
        }));
        // this.props.authUser(getAccessToken());
        // localStorage.setItem("user", getAccessToken());
        // console.log("locals",localStorage.getItem('user'))
        navigate(redirectUri)
        console.log('after redirect', getAccessToken())
        return { data, isError: false }
      } catch (error) {
        console.log(error)
        return { response: error, isError: true }
      }
    },
    [],
  )

  const logOut = useCallback((redirectUri = 'home') => {
    navigate(redirectUri)
    setTimeout(() => {
      clearTokens()
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

const mapStateToProps = (state) =>{ 
  console.log(state);
  return { token: state.token}; 
}

export default connect(mapStateToProps, { 
  authUser: authUser})(IdentityWrapper); 