import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/app'
import { BrowserRouter as Router, Route } from 'react-router-dom'

window.React = React;

ReactDOM.render((
  <Router>
    <Route path='/' component={App} />
  </Router> 
), document.getElementById('react-app'))
