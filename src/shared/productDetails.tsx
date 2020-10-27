import React from 'react';
import { Modal, Row, Col } from 'react-bootstrap';
import { getproductById } from '../services/productService';
import { connect } from 'react-redux';
import ButtonComponent from './button';
import { addToCart } from '../services/cartService';
import { Product } from '../models/product';

interface IProps {
    cartItems: any,
    product:any
}

interface IState {
    product:Product
}
class Cart extends React.Component<any, IState>{
    constructor(props: any) {
        super(props);
        this.state = {
            product:new Product({})
        }
    }

    componentWillMount() {
        // if(this.props.match!=undefined){
        // const { params } = this.props.match;
        

        // const productId = params.id;
        //     this.props.dispatch(getproductById(productId));
        // }
        
            const product=JSON.parse(localStorage.getItem("product") || "{}");
            this.setState({
                product:product
            })
           // this.props.product=product;
        
    }
    handleSubmit(product:any){
        this.props.dispatch(addToCart(product))
    }
    render() {
        return (
            <Row className="m-4">
                <Col sm={4}>
                    <img src={this.state.product.src} style={{ width: "inherit" }}></img>
                </Col>
                <Col sm={8}>
                    <Row>
                        <Col sm={12}>
                            <div>
                                <p>{this.state.product.productName}</p>
                                <p>{this.state.product.description}</p>
                                <p>{this.state.product.cost}</p>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={12}>
                        <ButtonComponent btnName={(this.state.product.isAddedToCart?"Remove From Cart":"Add to Cart")} variant="primary" btnSubmit={() => this.handleSubmit(this.props.product)}></ButtonComponent>
                        </Col>
                    </Row>
                </Col>
            </Row>

        )
    }
}
const mapStateToProps = (state: any) => {
    return {
        product: state.productReducer.product,
        products: state.cartReducer.products
    }
}

export default connect(mapStateToProps)(Cart);