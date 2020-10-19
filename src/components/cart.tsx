import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

interface IProps {
    cartItems:any
}

export default class Cart extends React.Component<IProps, any>{
    constructor(props: any) {
        super(props);
    }
    
    render() {
        return (
            <div className="m-4">
                <Row>
                    {this.props.cartItems.map((product: any) => {
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