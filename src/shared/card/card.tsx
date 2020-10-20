import React from 'react';
import { Button } from 'react-bootstrap';
import { Row, Col, Card } from 'react-bootstrap';
import { Product } from '../../models/product';
import ButtonComponent from '../button';
import './card.css';
import { Link } from 'react-router-dom';
import {addToCart} from '../../services/cartService'
interface IProps {
    items: any;
    dispatch:any
}

interface IState {
    product: Product
}
export default class CardComponent extends React.Component<IProps, IState>{
    constructor(props: any) {
        super(props);
        this.state = {
            product: new Product({})
        }
    }

    handleSubmit(product: any) {
        this.props.dispatch(addToCart(product))
    }
    render() {
        return (
            <Row>
                {this.props.items.map((product: any) => {
                    return <Col sm={3}>
                        <Card>
                            <button type="button" className="btn btn-primary" onClick={this.handleSubmit}></button>
                            <div className="item-image"> <Card.Img variant="top" src={product.src} style={{ width: '15rem' }} /></div>
                            <div className="hidebtn">
                                <Link to={`/productDetails/${product.id}`}>
                                    <ButtonComponent btnName="Quick Shop" btnSubmit={this.handleSubmit}></ButtonComponent>
                                </Link>
                            </div>
                        </Card>
                        <div>
                            {product.productName}
                            <p>{product.cost}</p>
                        </div>
                    </Col>
                })}
            </Row>
        )
    }
}