import * as React from 'react';
import { Route, BrowserRouter as Router, Redirect } from 'react-router-dom';
import Dashboard from './components/dashboard';
import SignUp from './components/signup';
import Login from './components/login';

export default () => (
    <Router>
        <Route exact path='/signup' component={SignUp} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/app' component={Dashboard} />
    </Router>
);
