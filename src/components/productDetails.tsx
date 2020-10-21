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
}
export default class ProductDetails extends React.Component<IProps, IState>{
    constructor(props: any) {
        super(props);
        this.state={
            
            product:new Product({})
        }
    }
    componentWillMount(){
        console.log("")
        // const search = window.location.search;
        // const params = new URLSearchParams(search);
        const { params } = this.props.match;
        const routeId = params.id;
        // this.state.products.filter((item:any)=>{
        //     if(item.id==routeId){
        //         this.setState({
        //             product:item
        //         })
        //     }
        //     return item
        // })
    }
    handleSubmit(product: any) {

    }
    render() {
        return (
            <Row>
                <Col>
                <img src={this.state.product.src}></img></Col>
                <Col><div>
                    </div></Col>
                <ButtonComponent btnName="Add to Cart" btnSubmit={this.handleSubmit}></ButtonComponent>
            </Row>
        )
    }
}