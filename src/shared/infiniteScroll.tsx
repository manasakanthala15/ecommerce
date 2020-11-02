import React from 'react';
import { Row, Col, Card, Modal } from 'react-bootstrap';
import './card/card.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import '../index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import InfiniteScroll from 'react-infinite-scroll-component';
import Loader from 'react-loader-spinner'
import ProductDetails from '../shared/productDetails';
import { addToCart, removeFromCart } from '../services/cartService'
import ButtonComponent from './button';
import {Product } from '../models/product';
import CardComponent from './card/card';

interface IProps {
    items: any;
    isFavouriteNeeded: boolean
    htmlContent:any
}

interface IState {
    scrollItems: any
    hasMoreScroll: boolean
    allProducts: any
    loading:boolean
    className:string;
    product:any
    modal:boolean
}
class InfiniteScrollComponent extends React.Component<any, IState>{
    constructor(props: any) {
        super(props);
        this.state = {
            scrollItems: [],
            hasMoreScroll: false  ,
            allProducts: this.props.items,
            loading:false,
            className: "hearticon colorwhite",
            modal: false,
            product: new Product({}),
        }
        this.fetchData = this.fetchData.bind(this)
    }
    addToCart(product: any) {
        this.setState({
            className: "hearticon colorred"
        })
        this.props.dispatch(addToCart(product))
    }
    removeFromCart(product: any) {
        this.props.dispatch(removeFromCart(product))
    }
    modalPopup(product: any) {
        this.setState({
            product: product,
            modal: true
        })
        localStorage.setItem("product", JSON.stringify(product))
    }
    handleSubmit() {
        this.setState({
            modal: false
        })
    }
    productDetails(product: any) {
        localStorage.setItem("product", JSON.stringify(product)) 
    }

    fetchData() {
        // var items = this.state.allProducts.slice(this.state.scrollItems.length, this.state.scrollItems.length + 10)
        
        // if (items.length > 0) {
        //     this.setState({
        //         scrollItems: this.state.scrollItems.concat(...items),
        //         hasMoreScroll: true,
        //         loading:false
        //     })
        // }
        // else {
        //     this.setState({
        //         hasMoreScroll: false
        //     })
        // }
        this.props.scroll(this.props.items?this.props.items.length:0)

    }
    
    render() {
        return (
            <div>
                <InfiniteScroll
                    dataLength={this.props.items?.length} //This is important field to render the next data
                    next={this.fetchData}
                    hasMore={true}
                    loader={this.state.loading?<Loader type="Circles"></Loader>:null}      
                >
                   {this.props.content=="card"?
                        <CardComponent items={this.props.products} methodname="getProducts" isFavouriteNeeded={true}></CardComponent>
                     :null}
                </InfiniteScroll>
            </div>
        )
    }
}
const mapStateToProps = (state: any) => {
    console.log(state.productReducer.products)
    return {
        products: state.productReducer.products
    }
}

export default connect(mapStateToProps)(InfiniteScrollComponent);