import axios from 'axios'
import React from 'react'
import ReactDOM from 'react-dom'
import { App } from './app'

axios.defaults.xsrfCookieName = 'csrftoken'
axios.defaults.xsrfHeaderName = 'X-CSRFToken'
axios.defaults.headers.post['Content-Type'] = 'application/json'
axios.defaults.headers.common['Content-Type'] = 'application/json'

ReactDOM.render(<App />, document.getElementById('root'))
