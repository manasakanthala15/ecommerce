import React from 'react';
import { Row, Col, Card, Modal } from 'react-bootstrap';
import { Product } from '../../models/product';
import ButtonComponent from '../button';
import './card.css';
import { Link } from 'react-router-dom';
import { addOrRemoveFromCart, removeFromCart } from '../../services/cartService'
import { connect } from 'react-redux';
import '../../index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'

interface IProps {
    items: any;
    isDashboard: boolean
}

interface IState {
    product: Product,
    className: string,
    modal: boolean,
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
            hasMoreScroll: false,
            allProducts: this.props.items,
            loading: false
        }
        this.modalPopup = this.modalPopup.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    addToCart(product: any) {
        this.setState({
            className: "hearticon colorred"
        })
        this.props.dispatch(addOrRemoveFromCart(product))
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

    componentWillMount() {
        this.setState({
            loading: true
        })
    }
    filterProductsList(collection: any) {

    }
    render() {
        return (
            <div>
                <div className="row m-0">
                    <Col sm={12 }>
                    {this.props.isDashboard ?
                        <div className="row">
                            {this.props.items.map((collection: any) => {
                                return <Col sm={4}>
                                    <Card>
                                        <div>
                                        <Link to={`/app/products/${collection.name}`}>{collection.name}</Link>
                                        <Link to={`/app/products/${collection.name}`}>
                                            <Card.Img variant="top" src={collection.src}/>
                                        </Link>
                                        </div>
                                        
                                    </Card>
                                </Col>
                               
                            })}
                        </div>
                        :
                        <div className="row">
                            {this.props.items.map((item: any) => {
                                return <Col sm={3}>
                                    <Card>
                                        <div>
                                            <FontAwesomeIcon icon={faHeart} className={item.isAddedToCart ? "hearticon colorred" : "hearticon colorwhite"} onClick={() => this.addToCart(item)} />
                                            <div className="item-image">
                                                <Link to={`/app/productDetails/${item.id}`}>
                                                    <Card.Img variant="top" src={item.src} className="full-width" onClick={() => this.productDetails(item)} />
                                                </Link>
                                            </div>
                                            <div className="hidebtn full-width bg-white">
                                                <ButtonComponent btnName="Quick Shop" btnSubmit={() => this.modalPopup(item)} variant="default" className="full-width btn-style"></ButtonComponent>
                                            </div>
                                        </div>
                                    </Card>
                                    <div>
                                        {item.productName}
                                        <p>{item.cost}</p>
                                    </div>
                                </Col>
                            })}
                        </div>
                    }
                    </Col>
                    
                </div>
                {this.props.items.length == 0 ?
                    <div>
                        <p>No Items to display </p>
                    </div> : null}

                {/* {this.state.modal ?

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
                } */}
            </div>
        )
    }
}
const mapStateToProps = (state: any) => {
    console.log(state.cartReducer.products)
    return {
        //products: state.cartReducer.products
    }
}

export default connect(mapStateToProps)(CardComponent);