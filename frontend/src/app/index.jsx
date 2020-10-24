import React from 'react'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import configureStore from 'redux/store'
import { Router } from './router'
import { StylesWrapper } from './wrappers/styles'
import { SnackbarProvider } from 'notistack'

export const { store, persistor } = configureStore()

export const App = ({ children }) => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <SnackbarProvider maxSnack={3}>
        <StylesWrapper>
          <Router></Router>
        </StylesWrapper>
      </SnackbarProvider>
    </PersistGate>
  </Provider>
)
