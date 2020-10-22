import React from 'react';
import CardComponent from '../shared/card/card';
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

    componentDidMount() {
        localStorage.getItem("Products")
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