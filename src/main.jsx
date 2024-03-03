import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
//import './index.css'
import { Provider } from 'react-redux'
import { litData2 } from './store/store.js'


ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={litData2}>
    <App />
  </Provider>,
)
