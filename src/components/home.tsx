import React from 'react';
import CardComponent from '../shared/card/card';
import { Product } from '../models/product';
import { Row, Col } from 'react-bootstrap';
import { connect } from 'react-redux';
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
                <CardComponent items={this.props.products} isFavouriteNeeded={true}></CardComponent>
            </div>

        )
    }
}
const mapStateToProps = (state: any) => {
    return {
        products: state.productReducer.products
    }
}

export default connect(mapStateToProps)(Home);