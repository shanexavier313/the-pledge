import React from 'react'
import ReactDOM from 'react-dom'
import { App } from './app'

// remove service worker registration if present. Delete in production
try {
  navigator.serviceWorker.getRegistrations().then(registrations => {
    registrations.forEach(r => r.unregister())
  })
} catch (e) {
  // do nothing
}

ReactDOM.render(<App />, document.getElementById('root'))