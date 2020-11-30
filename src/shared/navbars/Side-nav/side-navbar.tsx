import React from 'react';
import './side-navbar.css';
import Cart from '../../../components/cart';
import { getpricefilteredItems } from '../../../services/collectionService';
import { connect } from 'react-redux';
import InputRange from 'react-input-range';
import 'react-input-range/lib/css/index.css';

interface IProps {
    navList: Array<any>
    filters: Array<any>
    filterName: string
}
interface IState {
    value: any;
}

class TopNavBar extends React.Component<any, IState>{
    constructor(props: any) {
        super(props);
        this.routeToPage = this.routeToPage.bind(this);
        this.state = {
            value:  { min: 0, max: 2000 } ,
        }
        this.handleChange = this.handleChange.bind(this);
    }
    routeToPage(navItem: any) {
        console.log("cart") 
        if (navItem == "Cart") {

        }
    }



    handleChange(event: any) { 
        this.setState({ value: event });
        this.props.dispatch(getpricefilteredItems(event))

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
                <div className="mb-4">{this.props.filterName}</div>
                <InputRange
                    maxValue={2000}
                    minValue={0}
                    value={this.state.value}
                    onChange={this.handleChange}
                    step={100} />
            </div>
        )
    }
}
const mapStateToProps = (state: any) => {

}

export default connect(mapStateToProps)(TopNavBar);