import React from 'react';
import SideNavBar from '../shared/navbars/Side-nav/side-navbar';
import { Route, BrowserRouter as Router, Redirect, Switch } from 'react-router-dom';
import { Col, Row } from 'react-bootstrap';
import CardComponent from '../shared/card/card';
import { getFilteredCollections } from '../services/collectionService';
import { connect } from 'react-redux';

interface IProps {

}

interface IState {
    rightnavItems: Array<any>
    site: string
    //products: Array<Product>
    items: Array<any>
    filters: Array<any>
    showSideNav: boolean
}

class Home extends React.Component<any, IState>{

    constructor(props: any) {
        super(props);
        this.state = {
            site: "Ecommerce",
            rightnavItems: ["Cart"],
            items: ["Electronics", "Men", "Women"],
            filters: ["500", "100", "1500", "2000"],
            showSideNav: true
        }
        this.routeChange = this.routeChange.bind(this);
    }
   
    routeChange(isTrue: boolean) {
        if (isTrue) {
            this.setState({
                showSideNav: true
            })
        }
        else {
            this.setState({
                showSideNav: false
            })
        }
    }

    componentWillMount() {
        const { params } = this.props.match;
        const name = params.name;
        this.props.dispatch(getFilteredCollections(name))
    }

    render() {
        return (
            <Router>
                <div>
                    <div className="row m-0">
                        <Col sm={2}>
                            <SideNavBar navList={this.state.items} filters={this.state.filters} filterName="Price Range"></SideNavBar>
                        </Col>
                        <Col sm={10}>
                            <CardComponent items={this.props.collection} isDashboard={false}></CardComponent>
                        </Col>
                    </div>
                </div>
            </Router>
        )
    }
}
const mapStateToProps = (state: any) => {
    return {
        collection:state.collectionReducer.filteredCollection
    }
}
export default connect(mapStateToProps)(Home); 