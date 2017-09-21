import React from 'react'
import { HashRouter as Router } from 'react-router-dom'

import { Route, Switch } from 'react-router-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import App from './App'
import theme from '../config/theme'
const muiTheme = getMuiTheme(theme)

const Root = () => (
  <MuiThemeProvider muiTheme={muiTheme}>
    <Router>
      <Switch>
        <Route path="/" component= {App} />
      </Switch>
    </Router>
 </MuiThemeProvider>
)

export default Root