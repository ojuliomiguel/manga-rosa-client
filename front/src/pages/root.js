import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import App from '../App';
import ColaboradorForm from './form/form';

const Root = () => {
  return (
    <Router>
      <Switch>
        <Route path="*/registrar" component={ColaboradorForm} /> 
        <Route path="/" component={App} />
      </Switch>
    </Router>
  );
};

export default Root;

