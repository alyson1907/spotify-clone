import React from 'react'
import ReactDOM from 'react-dom'
import Main from 'containers/Main'
import { BrowserRouter, Route } from 'react-router-dom'
import reportWebVitals from './reportWebVitals'
import './index.scss'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Route path='/' component={Main} />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
