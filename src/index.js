import React from 'react'
import ReactDOM from 'react-dom'
import { GlobalStyles } from "./global-styles"
import {BrowserRouter as Router} from "react-router-dom"

import {ContextProvider} from "./Context"
import App from './App';

ReactDOM.render(
    <ContextProvider>
      <GlobalStyles />
      <Router>
        <App />
      </Router>
    </ContextProvider>,
  document.getElementById('root')
);