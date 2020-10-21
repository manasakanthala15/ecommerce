import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import { Product } from '../../models/product';
import ButtonComponent from '../button';
import './card.css';
import { Link } from 'react-router-dom';
import { addToCart } from '../../services/cartService'
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface IProps {
    items: any;
    isFavouriteNeeded: boolean
}

interface IState {
    product: Product
}
class CardComponent extends React.Component<any, IState>{
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
                            {this.props.isFavouriteNeeded ?
                                <i className="fas fa-heart" onClick={() => this.handleSubmit(product)}></i> : null
                            }
                            <div className="item-image">
                                <Card.Img variant="top" src={product.src} style={{ width: '100%' }} />
                            </div>
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
                {this.props.items.length == 0 ?
                    <div>
                        <p>No Items to display </p>
                    </div> : null}
            </Row>
        )
    }
}
const mapStateToProps = (state: any) => {
    console.log(state.cartReducer.products)
    return {
        products: state.cartReducer.products
    }
}

export default connect(mapStateToProps)(CardComponent);