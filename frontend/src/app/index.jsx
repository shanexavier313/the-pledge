import React from 'react'
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import configureStore from "redux/store";
import { Router } from './router'
import { LayoutWrapper } from './wrappers/layout'
import { StylesWrapper } from './wrappers/styles'

export const { store, persistor } = configureStore();

export const App = ({ children }) => (
	<Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
			<StylesWrapper>
			  <LayoutWrapper>
			    <Router></Router>
			  </LayoutWrapper>
			</StylesWrapper>
  	</PersistGate>
  </Provider>
)
