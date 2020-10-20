import React from 'react';
import './side-navbar.css';
import Cart from '../../../components/cart';

interface IProps {
    navList: Array<any>
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
            <div className="sidenav">
                <div>
                {this.props.navList.map((navItem:any)=>{
                    return <a onClick={()=>this.routeToPage(navItem)}>{navItem}</a>
                })}
                </div>          
            </div>
        )
    }
}