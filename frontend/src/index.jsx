import axios from 'axios'
import React from 'react'
import ReactDOM from 'react-dom'
import { App } from './app'

axios.defaults.xsrfCookieName = 'csrftoken'
axios.defaults.xsrfHeaderName = 'X-CSRFToken'

ReactDOM.render(<App />, document.getElementById('root'))
