import React from 'react';
import { Product } from '../models/product';
import CardComponent from '../shared/card/card';
import { connect } from 'react-redux';
import { getCartItems } from '../services/cartService';


interface IProps {
    cartItems:any
}

interface IState{
}
class Cart extends React.Component<any, IState>{
    constructor(props: any) {
        super(props);
        this.state = {
            
        }
    }
    componentDidMount() {
        this.props.dispatch(getCartItems())
    }
    render() {
        return (
            <div className="m-4">
                <CardComponent items={this.props.cartItems} isFavouriteNeeded={true} isCart={true} removeFromCart={true}></CardComponent>
            </div>
        )
    }
}
const mapStateToProps = (state: any) => {
    console.log(state.cartReducer.cartItems)
    return {
        cartItems: state.cartReducer.cartItems
    }
}

export default connect(mapStateToProps)(Cart);