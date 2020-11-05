import React from 'react';
import './top-navbar.css';
import Cart from '../../../components/cart';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import {LogOut} from '../../../actions/authActions'
interface IProps {
    navList: Array<any>
    site:string
}

class TopNavBar extends React.Component<any, any>{
    constructor(props: any) {
        super(props);
        this.handleSignout=this.handleSignout.bind(this);
    }
    
    handleSignout(){
        this.props.dispatch(LogOut());
        window.location.href="/";
    }
    render() {
        return (
            <div className="navbar-fixed sticky-top bg-primary p-3 m-0">
                <a className="link-items">{this.props.site}</a>
                <div className="topnav-right">
                {this.props.navList.map((navItem:any)=>{
                    return <Link className="link-items" to={`/app/${navItem}`}>{navItem}
                    <span className="badge badge-pill badge-light ml-1">{this.props.noOfCartItems}</span></Link>
                })}
                <span className="link-items" onClick={this.handleSignout}><span>Signout</span></span>

                </div>          
            </div>
        )
    }
}
const mapStateToProps = (state: any) => {
    return {
        auth:state.authReducer,
        noOfCartItems:state.cartReducer.cartItems.length
    }
}

export default connect(mapStateToProps)(TopNavBar);