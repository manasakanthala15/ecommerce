import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import ButtonComponent from '../shared/button';
import ProductDetails from '../components/productDetails';
import { Redirect, Link } from 'react-router-dom';

interface IProps {
    products: any
}

interface IState {
    products: Array<any>
}

export default class Home extends React.Component<IProps, IState>{
    constructor(props: any) {
        super(props);
        this.state = {
            products: this.props.products
        }
        this.handleDetails=this.handleDetails.bind(this);
    }

    handleDetails(product: any) {
        return <Redirect to={`/details/${product.id}`} />
    }
    handleSubmit(product: any) {

    }
    render() {
        return (
            <div className="m-4">
                <Row>
                    {this.state.products.map((product: any) => {
                        return <Col sm={3}>
                            <Card>
                                <Card.Img variant="top" src={product.src} style={{ width: '15rem' }} />
                                <Card.Body>
                                    <Card.Title>
                                        <Link to={`/details/${product.id}`}>{product.productName}</Link>
                                    </Card.Title>
                                    <Card.Text>
                                        {product.description}
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    })}
                </Row>
            </div>

        )
    }
}