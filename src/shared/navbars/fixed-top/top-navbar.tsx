import React from 'react';
import './top-navbar.css';
import Cart from '../../../components/cart';
import { Link } from "react-router-dom";
interface IProps {
    navList: Array<any>
    site:string
}

export default class TopNavBar extends React.Component<IProps, any>{
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
                <a>{this.props.site}</a>
                <div className="topnav-right">
                {this.props.navList.map((navItem:any)=>{
                    return <Link to={`/app/${navItem}`}>{navItem}</Link>
                })}
                </div>          
            </div>
        )
    }
}