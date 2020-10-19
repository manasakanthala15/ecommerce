import React from 'react';
import './sub-topnav.css';
interface IProps {
    navList: Array<any>
    site:string
}

export default class TopNavBar extends React.Component<IProps, any>{
    constructor(props: any) {
        super(props);
    }
    
    render() {
        return (
            <div className="sub-navbar ">
                <div className="subtopnav-right">
                {this.props.navList.map((navItem:any)=>{
                    return <a>{navItem}</a>
                })}
                </div>          
            </div>
        )
    }
}