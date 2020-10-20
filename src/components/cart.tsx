import React from 'react';
import { Product } from '../models/product';
import CardComponent from '../shared/card/card';

interface IProps {
    cartItems:any
}

interface IState{
}
export default class Cart extends React.Component<IProps, IState>{
    constructor(props: any) {
        super(props);
        this.state = {
            
        }
    }
    
    render() {
        return (
            <div className="m-4">
                <CardComponent items={this.props.cartItems} dispatch=""></CardComponent>
            </div>
        )
    }
}