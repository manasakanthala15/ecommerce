import React from 'react';
import { connect } from 'react-redux';
import CardComponent from '../shared/card/card';
import { getAllCollections } from '../services/collectionService';

interface IProps {

}

interface IState {
    rightnavItems: Array<any>
    site: string
    isDashboard: boolean
}

class LandingPage extends React.Component<any, IState>{

    constructor(props: any) {
        super(props);
        this.state = {
            site: "Ecommerce",
            rightnavItems: ["Cart"],
            isDashboard: true
        }
    }

    componentWillMount() {
        // if (!this.props.auth?.loginSuccess) {
        //     return window.location.href = "/login";
        // }
        // else {
        // }
        this.props.dispatch(getAllCollections())

    }

    render() {
        return (
            <div>
                <div className="row m-0">
                    <CardComponent items={this.props.collection} isDashboard={true} isCart={true}></CardComponent>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state: any) => {
    return {
        auth: state.authReducer,
        collection: state.collectionReducer.collectionnames
    }
}
export default connect(mapStateToProps)(LandingPage); 