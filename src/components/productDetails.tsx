import React from 'react';
import {Button} from 'react-bootstrap';
import { Row, Col } from 'react-bootstrap';
import { Product } from '../models/product';
import ButtonComponent from '../shared/button';
import { useParams } from "react-router-dom";

interface IProps {
    product:any;
    match: any;
}

interface IState{
    product:Product
    products:Array<Product>
}
export default class ProductDetails extends React.Component<IProps, any>{
    constructor(props: any) {
        super(props);
        this.state={
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
            ],
            product:Product
        }
    }
    componentWillMount(){
        console.log("")
        // const search = window.location.search;
        // const params = new URLSearchParams(search);
        const { params } = this.props.match;
        const routeId = params.id;
        this.state.products.filter((product:any)=>{
            return product.id==routeId
            
        })
    }
    handleSubmit(product: any) {

    }
    render() {
        return (
            <Row>
                <Col>{this.state.product.src}</Col>
                <Col>{this.state.product.specifications}</Col>
                <ButtonComponent btnName="Add to Cart" btnSubmit={this.handleSubmit}></ButtonComponent>
            </Row>
        )
    }
}