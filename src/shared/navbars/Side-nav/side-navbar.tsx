import React from 'react';
import './side-navbar.css';
import Cart from '../../../components/cart';
import { getfilteredItems } from '../../../services/productService';
import { connect } from 'react-redux';
import Slider from 'react-rangeslider'

interface IProps {
    navList: Array<any>
    filters: Array<any>
    filterName: string
}
interface IState {
    value: number;
}

class TopNavBar extends React.Component<any, IState>{
    constructor(props: any) {
        super(props);
        this.routeToPage = this.routeToPage.bind(this);
        this.state = {
            value: 0
        }
        this.handleChange = this.handleChange.bind(this);
    }
    routeToPage(navItem: any) {
        console.log("cart")
        if (navItem == "Cart") {

        }
    }



    handleChange(event: any) {
        this.setState({ value: event.target.value });
        const value=(event.target.value);
        this.props.dispatch(getfilteredItems(value))

    }
    render() {
        return (
            <div className="sidenav">
                {/* <div>
                    {this.props.navList.map((navItem: any) => {
                        return <a onClick={() => this.routeToPage(navItem)}>{navItem}</a>
                    })}
                </div> */}
                {/* {this.props.filters.length != 0 ?
                    <div>
                        <p>Filters</p>
                        <p>{this.props.filterName}</p>
                        {this.props.filters.map((navItem: any) => {
                            return <div>
                                <input type="checkbox" id="vehicle1" name="vehicle1" value={navItem} onChange={(event: any) => this.handleChange(navItem)} />
                                <label>{navItem}</label>
                            </div>

                        })}
                    </div>
                    : null
                } */}
                <div>{this.props.filterName}</div>
                <input
                    id="typeinp"
                    type="range"
                    min="100" max="5000"
                    value={this.state.value}
                    onChange={this.handleChange}
                    step="500"
                />
                <div>{this.state.value}</div>
            </div>
        )
    }
}
const mapStateToProps = (state: any) => {
    console.log(state.productReducer.products)
    return {
        cartItems: state.productReducer.products
    }
}

export default connect(mapStateToProps)(TopNavBar);