import React from 'react';
import TopNavBar from '../shared/navbars/fixed-top/top-navbar';
import SubTopNav from '../shared/navbars/sub-topnav/sub-topnav';
import { Route, Switch } from 'react-router-dom';
import Cart from './cart';
import Home from './home';
import {Product} from '../models/product'

interface IProps {

}

interface IState {
    rightnavItems: Array<any>
    site: string
    products: Array<Product>
    items:Array<any>
}
export default class Dashboard extends React.Component<IProps, IState>{
    constructor(props: any) {
        super(props);
        this.state = {
            site: "Ecommerce",
            rightnavItems: ["More", "Cart"],
            items: ["Electronics","Men","Women"],
            products:[
                {id:1,src:"https://assetscdn1.paytm.com/images/catalog/product/M/MO/MOBOPPO-A12-3-GFUTU629745E657DA2D/1591384302184_0..png",
                productName:"Oppo",description:"hello new ",cost:124500,addedToCart:false,addedToFavourites:false,
                specifications:{details:[{"Ram":"4GB"},{"Rom":"128GB"}]}},
                {id:2,src:"https://cdn.shopify.com/s/files/1/0078/0170/0399/products/Original-ASUS-adol-Laptop-13-3-inch-Windows-10-Home-Intel-Core-i3-8145U-Dual-Core_2265fc7c-dbc6-4ca5-9692-5b8f3f91b842_1200x1200.jpg?v=1575447476",
                productName:"Laptop-23",description:"hello new ",cost:124500,addedToCart:false,addedToFavourites:false,
                specifications:{details:[{"Ram":"4GB"},{"Rom":"1TB"}]}},
                {id:3,src:"https://images-na.ssl-images-amazon.com/images/I/71yXShgxvpL._SL1500_.jpg",
                productName:"Realme",description:"hello new ",cost:124500,addedToCart:false,addedToFavourites:false,
                specifications:{details:[{"Ram":"4GB"},{"Rom":"128GB"}]}},
            ]
        }
    }

    render() {
        return (
            <div>
                <TopNavBar navList={this.state.rightnavItems} site={this.state.site}></TopNavBar>
                <Home products={this.state.products}></Home>
                {/* <SubTopNav navList={this.state.items} site={this.state.site}></SubTopNav> */}
                <Switch>
                    <Route exact path='/app/home' component={Home} />
                    <Route exact path='/app/cart' component={Cart} />
                </Switch>
            </div>
        )
    }
}