import axios from 'axios'
import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import { App } from './app'
import reducers from './reducers';

axios.defaults.xsrfCookieName = 'csrftoken'
axios.defaults.xsrfHeaderName = 'X-CSRFToken'
axios.defaults.headers.post['Content-Type'] = 'application/json'
axios.defaults.headers.common['Content-Type'] = 'application/json'

// ReactDOM.render(<App />, document.getElementById('root'))

ReactDOM.render(
   <Provider store={createStore(reducers)}>
     <App />
   </Provider>
   ,
   document.getElementById('root')
 );