import * as React from 'react';
import { Route, BrowserRouter as Router, Redirect } from 'react-router-dom';
import LandingPage from './components/landingPage';
import SignUp from './components/signup';
import Login from './components/login';
import Dashboard from './components/dashboard';

export default () => (
    <Router>
        <Route exact path='/signup' component={SignUp} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/app' component={LandingPage} />
        <Route exact path='/' component={Login} />
        <Route exact path='/SignOut' component={Login} />
        <Route exact path='/dashboard' component={Dashboard} />

    </Router>
);
