import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'
import Home from './Home/Home'
import PhotoListContainer from './Photos/PhotoListContainer'
 import QoutesListContainer from './Qoutes/QoutesListContainer'
import './App.css';

class App extends Component {
  constructor() {
    super()
    }
    
  
  render() {
    return (
      <div className="App">
        <Switch>
            <Route exact path='/' component={Home} />
            <Route  path="/photos" component={PhotoListContainer} />
            <Route  path="/quotes" component={QoutesListContainer} />
          </Switch>
      </div>
    );
  }
}

export default App;
