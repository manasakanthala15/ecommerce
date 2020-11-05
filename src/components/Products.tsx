import React from 'react';
import CardComponent from '../shared/card/card';
import { connect } from 'react-redux';
import { getProducts } from '../services/productService';
import InfiniteScrollComponent from '../shared/infiniteScroll'
import Loader from 'react-loader-spinner'

interface IState {
    loading:boolean
}

class Products extends React.Component<any, IState>{
    constructor(props: any) {
        super(props);
        this.state = {
            loading:true
        }
        this.handleItems=this.handleItems.bind(this)
    }

    componentWillMount() {
        //var x=localStorage.getItem(JSON.parse('Products')) || '[]'    
        this.props.dispatch(getProducts(0))
        // if(x.length>0){
        //     this.setState({
        //         loading:false
        //     })
        // }
    }
    handleItems(itemCount:any){
        this.props.dispatch(getProducts(itemCount))
    }
    render() {
        return (
            <div className="m-4">
                <InfiniteScrollComponent content="card" items={this.props.products} scroll={this.handleItems}></InfiniteScrollComponent>
            </div>

        )
    }
}
const mapStateToProps = (state: any) => {
    return {
        products: state.productReducer.products
    }
}

export default connect(mapStateToProps)(Products);