import React from 'react';
import './top-navbar.css';
import Cart from '../../../components/cart';

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
        if(navItem=="Cart"){
            
        }
    }
    
    render() {
        return (
            <div className="navbar ">
                <a>{this.props.site}</a>
                <div className="topnav-right">
                {this.props.navList.map((navItem:any)=>{
                    return <a onClick={()=>this.routeToPage(navItem)}>{navItem}</a>
                })}
                </div>          
            </div>
        )
    }
}