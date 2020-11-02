import React from 'react';
import TopNavBar from '../shared/navbars/fixed-top/top-navbar';
import SideNavBar from '../shared/navbars/Side-nav/side-navbar';
import { Route, BrowserRouter as Router, Redirect, Switch } from 'react-router-dom';
import Cart from './cart';
import Home from './home';
import { Product } from '../models/product'
import { Col, Row } from 'react-bootstrap';
import ProductDetails from '../shared/productDetails';
import { withRouter } from 'react-router-dom';

interface IProps {

}

interface IState {
    rightnavItems: Array<any>
    site: string
    //products: Array<Product>
    items: Array<any>
    filters: Array<any>
    showSideNav: boolean
}

export default class Dashboard extends React.Component<any, IState>{

    constructor(props: any) {
        super(props);
        this.state = {
            site: "Ecommerce",
            rightnavItems: ["Cart"],
            items: ["Electronics", "Men", "Women"],
            filters: ["500", "100", "1500", "2000"],
            showSideNav: false
        }
    }
    componentWillMount() {
        this.props.history.listen((location:any, action:any) => {
            console.log("on route change");
          });
      
        if (!this.props.match.url.includes("cart") || !this.props.match.url.includes("productDetails")) {
            this.setState({
                showSideNav: true
            })
        }
    }
    

    render() {
        return (
            <Router>
                <div>
                    <TopNavBar navList={this.state.rightnavItems} site={this.state.site}></TopNavBar>
                    <div className="row m-0">
                        {this.state.showSideNav ?
                            <Col sm={2}>
                                <SideNavBar navList={this.state.items} filters={this.state.filters} filterName="Above"></SideNavBar>
                            </Col> : null
                        }
                        <Col sm={10}>
                            <Switch>
                                <Route exact path='/app' component={Home} />
                                <Route exact path='/app/cart' component={Cart} />
                                <Route exact path='/app/productDetails/:id' component={ProductDetails} />
                            </Switch>
                            {/* <Home></Home> */}
                        </Col>
                    </div>
                </div>
            </Router>
        )
    }
}