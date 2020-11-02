import React from 'react';
import './top-navbar.css';
import Cart from '../../../components/cart';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';

interface IProps {
    navList: Array<any>
    site:string
}

class TopNavBar extends React.Component<any, any>{
    constructor(props: any) {
        super(props);
        this.routeToPage=this.routeToPage.bind(this);
    }
    routeToPage(navItem:any){
        console.log("cart")
        if(navItem=="cart"){
            
        }
    }
    
    render() {
        return (
            <div className="navbar-fixed sticky-top bg-primary p-3">
                <a className="link-items">{this.props.site}</a>
                <div className="topnav-right">
                {this.props.navList.map((navItem:any)=>{
                    return <Link className="link-items" to={`/app/${navItem}`}>{navItem}{this.props.cartItems.length!=0?
                    <span className="cart-count">{this.props.cartItems.length}</span>:null}</Link>
                })}
                </div>          
            </div>
        )
    }
}
const mapStateToProps = (state: any) => {
    console.log(state.cartReducer.cartItems)
    return {
        cartItems: state.cartReducer.cartItems
    }
}

export default connect(mapStateToProps)(TopNavBar);