import React from 'react';
import { LoginRequest } from '../models/user';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import ButtonComponent from '../shared/button';
import { loginUser } from '../services/authService';

interface IState {
    loginRequest: LoginRequest
    errors: any
}

const countErrors = (errors: any) => {
    let count = 0;
    Object.values(errors).forEach(
        (val: any) => val.length > 0 && (count = count + 1)
    );
    return count;
}
class Login extends React.Component<any, IState>{
    constructor(props: any) {
        super(props);
        this.state = {
            loginRequest: new LoginRequest({}),
            errors: {
                userName: '',
                password: ''
            }
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event: any) {
        const { name, value } = event.target;
        let errors = this.state.errors;
        switch (name) {
            case 'password':
                errors.password =
                    value.length < 8
                        ? 'Password must be 8 characters long!'
                        : '';
                break;
            case 'userName':
                errors.userName =
                    value.length < 1
                        ? 'User Name is required!'
                        : '';
                break;
            default:
                break;
        }
        this.setState({
            loginRequest: {
                ...this.state.loginRequest, [event.target.name]: event.target.value
            },
            errors: this.state.errors
        });
    }

    handleSubmit(event: any) {
        event.preventDefault();
        this.props.dispatch(loginUser(this.state.loginRequest));
    }
    render() {
        return (
            <div className="container">
                <form className="col-8 m-auto">
                    <h3 className="text-center">Sign In</h3>
                    <div className="form-group">
                        <label>User name</label>
                        <input type="text" className="form-control" name="userName" placeholder="First name" value={this.state.loginRequest.userName} onChange={this.handleChange}/>
                    </div>

                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" className="form-control" name="password" placeholder="Enter password" value={this.state.loginRequest.password} onChange={this.handleChange} />
                    </div>

                    <ButtonComponent btnName="Sign In" btnSubmit={this.handleSubmit} variant="primary" className="col-12"></ButtonComponent>
                    <p className="forgot-password text-right">
                        Don't have an account <Link to="/signup">Sign Up?</Link>
                    </p>

                </form>
            </div>

        )
    }
}
const mapStateToProps = (state: any) => {
    return {
        auth: state.authReducer
    }
}
export default connect(mapStateToProps)(Login); 