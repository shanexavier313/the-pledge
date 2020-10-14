import { createContext } from 'react'

export const IdentityContext = createContext({
  isLoggedIn: false,
  logIn: () => {},
  logOut: () => {},
  setUser: () => {},
  user: null,
})
