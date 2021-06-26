import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import App from '../App';
import Home from './home/home';

const Root = () => {
  return (
    <Router>
      <Switch>
        <Route path="*/registrar" component={Home} /> 
        <Route path="/" component={App} />
      </Switch>
    </Router>
  );
};

export default Root;

