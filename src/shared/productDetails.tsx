import React from 'react';
import { Modal, Row, Col } from 'react-bootstrap';
import { getproductById } from '../services/productService';
import { connect } from 'react-redux';
import ButtonComponent from './button';
import { addToCart } from '../services/cartService';

interface IProps {
    cartItems: any
}

interface IState {
}
class Cart extends React.Component<any, IState>{
    constructor(props: any) {
        super(props);
        this.state = {

        }
    }

    componentWillMount() {
        const { params } = this.props.match;
        const productId = params.id;
        this.props.dispatch(getproductById(productId));
    }
    handleSubmit(product:any){
        this.props.dispatch(addToCart(product))
    }
    render() {
        return (
            <Row className="m-4">
                <Col sm={4}>
                    <img src={this.props.product.src} style={{ width: "inherit" }}></img>
                </Col>
                <Col sm={8}>
                    <Row>
                        <Col sm={12}>
                            <div>
                                <p>{this.props.product.productName}</p>
                                <p>{this.props.product.description}</p>
                                <p>{this.props.product.cost}</p>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={12}>
                        <ButtonComponent btnName="Add to Cart" variant="primary" btnSubmit={() => this.handleSubmit(this.props.product)}></ButtonComponent>
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