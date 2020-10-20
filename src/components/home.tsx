import React from 'react';
import CardComponent from '../shared/card/card';
import { Product } from '../models/product';
import { Row, Col } from 'react-bootstrap';
import { connect, useDispatch } from 'react-redux';
import { getProducts } from '../services/productService';


interface IState {
}

class Home extends React.Component<any, IState>{
    constructor(props: any) {
        super(props);
        this.state = {

        }
    }

    handleSubmit(product: any) {

    }
    componentDidMount() {
        this.props.dispatch(getProducts())
    }
    render() {
        return (
            <div className="m-4">
                <Row>
                    <Col>Sortby:<input type="text" /></Col>
                </Row>
                <CardComponent items={this.props.products} dispatch=""></CardComponent>
            </div>

        )
    }
}
const mapStateToProps = (state: any) => {
    console.log(state.authReducer.products)
    return {
        products: state.authReducer.products
    }
}

export default connect(mapStateToProps)(Home);