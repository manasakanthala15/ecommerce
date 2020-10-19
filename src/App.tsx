import * as React from 'react';
import { Route, BrowserRouter as Router, Redirect } from 'react-router-dom';
import Dashboard from './components/dashboard';
import Home from './components/home';
import Cart from './components/home';
import ProductDetails from './components/productDetails';


export default () => (
    <Router>
        <Route exact path='/app' component={Dashboard} />
        <Route exact path='/details/:id' component={ProductDetails} />

    </Router>
);
