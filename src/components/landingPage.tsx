import React from 'react';
import TopNavBar from '../shared/navbars/fixed-top/top-navbar';
import { Route, BrowserRouter as Router, Redirect, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import CardComponent from '../shared/card/card';
import { getAllCollections } from '../services/collectionService';
import { Col, Row } from 'react-bootstrap';
import Home from './home';
import Cart from './cart';
import ProductDetails from '../shared/productDetails';
import Dashboard from './dashboard';

interface IProps {

}

interface IState {
    rightnavItems: Array<any>
    site: string
    isDashboard: boolean
}

class LandingPage extends React.Component<any, IState>{

    constructor(props: any) {
        super(props);
        this.state = {
            site: "Ecommerce",
            rightnavItems: ["Cart"],
            isDashboard: true
        }
    }

    componentWillMount() {
        // if (!this.props.auth?.loginSuccess) {
        //     return window.location.href = "/login";
        // }
        // else {
        // }
        this.props.dispatch(getAllCollections())

    }

    render() {
        return (
            <Router>
                <div>
                    <TopNavBar navList={this.state.rightnavItems} site={this.state.site}></TopNavBar>
                    {/* {this.state.isDashboard ?
                        <div className="row m-0">
                            <CardComponent items={this.props.collection} isDashboard={true} isCart={true}></CardComponent>
                        </div> : null
                    } */}

                    <Col sm={12}>
                        <Switch>
                            <Route exact path='/app/cart' component={Cart} />
                            <Route exact path='/app/products/:name' component={Home} />
                            <Route exact path='/app/productDetails/:id' component={ProductDetails} />
                            <Route exact path="/app" component={Dashboard}>
                            </Route>
                        </Switch>
                    </Col>
                </div>
            </Router>
        )
    }
}
const mapStateToProps = (state: any) => {
    return {
        auth: state.authReducer,
        collection: state.collectionReducer.collectionnames
    }
}
export default connect(mapStateToProps)(LandingPage); 