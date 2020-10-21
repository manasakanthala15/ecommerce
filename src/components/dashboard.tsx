import React from 'react';
import TopNavBar from '../shared/navbars/fixed-top/top-navbar';
import SideNavBar from '../shared/navbars/Side-nav/side-navbar';
import { Route, Switch } from 'react-router-dom';
import Cart from './cart';
import Home from './home';
import { Product } from '../models/product'
import { Col, Row } from 'react-bootstrap';

interface IProps {

}

interface IState {
    rightnavItems: Array<any>
    site: string
    //products: Array<Product>
    items: Array<any>
    filters:Array<any>
}
export default class Dashboard extends React.Component<IProps, IState>{
    constructor(props: any) {
        super(props);
        this.state = {
            site: "Ecommerce",
            rightnavItems: ["More", "Cart"],
            items: ["Electronics", "Men", "Women"],
            filters:["500","100","1500","2000"]
        }
    }

    render() {
        return (
            <div>
                <TopNavBar navList={this.state.rightnavItems} site={this.state.site}></TopNavBar>
                <Row>
                    <Col sm={2}>
                        <SideNavBar navList={this.state.items} filters={this.state.filters} filterName="Below"></SideNavBar>
                    </Col>
                    <Col sm={10}>
                        <Home></Home>
                    </Col>
                </Row>
            </div>
        )
    }
}