import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './containers/Home/index';
import Signin from './containers/Signin/index';
import Signup from './containers/Signup/index';

import './App.css';

function App() {
  return (
    <div className="App">
     <Router>
       <Switch>
         <Route path="/" exact component={Home} />
         <Route path="/signin" component={Signin} />
         <Route path="/signup" component={Signup} />
       </Switch>
     </Router>
    </div>
  );
}

export default App;
