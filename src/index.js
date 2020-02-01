/**********************************************************************************
 * WEB422 –Assignment 3*
 * I declare that this assignment is my ownwork in accordance with SenecaAcademic Policy.
 * No part of this assignment has been copied manually or electronically from any other source
 * (including web sites) or distributed to other students.*
 *
 * Name: Dmitriy Shin Student ID: 101 411 189 Date: February 2, 2020
 *
 *
 **********************************************************************************/

import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'

import App from './App'
import './index.css'
import * as serviceWorker from './serviceWorker'

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
)
serviceWorker.unregister()
