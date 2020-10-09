import React from 'react'
import { Route } from 'react-router-dom'

export const App = () => {
  return <Route exact path="/" render={() => <h1>The Pledge</h1>} />
}
