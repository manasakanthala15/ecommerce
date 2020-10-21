import React from 'react';
import './side-navbar.css';
import Cart from '../../../components/cart';
import { getfilteredItems } from '../../../services/productService';
import { connect } from 'react-redux';

interface IProps {
    navList: Array<any>
    filters: Array<any>
    filterName: string
}

class TopNavBar extends React.Component<any, any>{
    constructor(props: any) {
        super(props);
        this.routeToPage = this.routeToPage.bind(this);
    }
    routeToPage(navItem: any) {
        console.log("cart")
        if (navItem == "Cart") {

        }
    }

    handleChange(navItem: any, event: any) {
        event.target.checked ? this.props.dispatch(getfilteredItems(navItem)) : this.props.dispatch(getfilteredItems(""))
    }

    render() {
        return (
            <div className="sidenav">
                {/* <div>
                    {this.props.navList.map((navItem: any) => {
                        return <a onClick={() => this.routeToPage(navItem)}>{navItem}</a>
                    })}
                </div> */}
                {this.props.filters.length != 0 ?
                    <div>
                        <p>Filters</p>
                        <p>{this.props.filterName}</p>
                        {this.props.filters.map((navItem: any) => {
                            return <div>
                                <input type="checkbox" id="vehicle1" name="vehicle1" value={navItem} onChange={(event: any) => this.handleChange(navItem, event)} />
                                <label>{navItem}</label>
                            </div>

                        })}
                    </div>
                    : null
                }

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