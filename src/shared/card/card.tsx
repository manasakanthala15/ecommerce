import React from 'react';
import { Row, Col, Card, Modal } from 'react-bootstrap';
import { Product } from '../../models/product';
import ButtonComponent from '../button';
import './card.css';
import { Link } from 'react-router-dom';
import { addToCart, removeFromCart } from '../../services/cartService'
import { connect } from 'react-redux';
import '../../index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import ProductDetails from '../../shared/productDetails';
import InfiniteScrollComponent from '../infiniteScroll';
import Loader from 'react-loader-spinner'

interface IProps {
    items: any;
    isFavouriteNeeded: boolean
}

interface IState {
    product: Product,
    className: string,
    modal: boolean,
    scrollItems: any
    hasMoreScroll: boolean
    allProducts: any
    loading: boolean
}
class CardComponent extends React.Component<any, IState>{
    constructor(props: any) {
        super(props);
        this.state = {
            className: "hearticon colorwhite",
            modal: false,
            product: new Product({}),
            scrollItems: [],
            hasMoreScroll: false,
            allProducts: this.props.items,
            loading: false
        }
        this.modalPopup = this.modalPopup.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.fetchData = this.fetchData.bind(this);
        //this.handleItems = this.handleItems.bind(this);
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
        var items = this.props.items.slice(this.state.scrollItems.length, this.state.scrollItems.length + 10)
        if (items.length > 0) {
            this.setState({
                scrollItems: this.state.scrollItems.concat(...items),
                hasMoreScroll: true,
                loading: false
            })
        }
        else {
            this.setState({
                hasMoreScroll: false
            })
        }

    }
    // handleItems(itemCount: any) {
    //     this.props.scroll(itemCount)
    // }
    componentWillMount() {
        this.setState({
            loading: true
        })
        //this.fetchData();
    }
    render() {
        return (
            <div>
                <div className="row m-0">
                    {this.props.items.map((product: any) => {
                        return <Col sm={3}>
                            <Card>
                                <FontAwesomeIcon icon={faHeart} className={product.isAddedToCart ? "hearticon colorred" : "hearticon colorwhite"} onClick={() => this.addToCart(product)} />
                                <div className="item-image">
                                    <Link to={`/app/productDetails/${product.id}`}>
                                        <Card.Img variant="top" src={product.src} className="full-width" onClick={() => this.productDetails(product)} />
                                    </Link>
                                </div>
                                <div className="hidebtn full-width bg-white">
                                    <ButtonComponent btnName="Quick Shop" btnSubmit={() => this.modalPopup(product)} variant="default" className="full-width btn-style"></ButtonComponent>
                                </div>
                                {/* {this.props.quantityNeeded ?
                               <div>{product.quantity}</div> : null
                                } */}
                                {/* {this.props.removeFromCart ?
                               <ButtonComponent btnName="Remove From Cart" btnSubmit={() => this.removeFromCart(product)} variant="default" className="full-width btn-style"></ButtonComponent>
                                   :null
                                } */}
                            </Card>
                            <div>
                                {product.productName}
                                <p>{product.cost}</p>
                            </div>
                        </Col>
                    })}
                </div>                {this.props.items.length == 0 ?
                    <div>
                        <p>No Items to display </p>
                    </div> : null}
                {this.state.modal ?

                    <Modal.Dialog centered style={{ position: "absolute", maxWidth: "1000px" }}>
                        <Modal.Header>
                            <Modal.Title>Product Description</Modal.Title>
                        </Modal.Header>

                        <Modal.Body>
                            <ProductDetails product={this.state.product}></ProductDetails>
                            <Link to={`/app/productDetails/${this.state.product.id}`} className="view-all">Click to View all details
                            </Link>
                        </Modal.Body>
                        <Modal.Footer>
                            <ButtonComponent btnName="Close" btnSubmit={this.handleSubmit} variant="primary" className="btn-style"></ButtonComponent>
                        </Modal.Footer>
                    </Modal.Dialog>
                    // <Modal open={this.state.modal} hide={!this.state.modal} centered>
                    //     <Modal.Header closeButton>
                    //         <Modal.Title id="contained-modal-title-vcenter">
                    //             Modal heading
                    //     </Modal.Title>
                    //     </Modal.Header>
                    //     <Modal.Body>
                    //         <ProductDetails product={this.state.product}></ProductDetails>
                    //     </Modal.Body>
                    // </Modal>
                    : null
                }
            </div>
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