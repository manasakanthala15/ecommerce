import React from 'react';
import { LoginRequest } from '../models/user';
import { connect } from 'react-redux';
import { Link ,Redirect} from "react-router-dom";
import ButtonComponent from '../shared/button';
import { loginUser } from '../services/authService';

interface IState {
    loginRequest: LoginRequest
    errors: any,
    submitted:boolean
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
            },
            submitted:false
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
                    value.length < 1
                        ? 'Password must be required!'
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
        this.setState({
            submitted:true
        })
        if(countErrors(this.state.errors)==0){
        event.preventDefault();
        this.props.dispatch(loginUser(this.state.loginRequest));
        }
    }
    render() {
        return (
            <div className="container">
                <form className="col-6 m-auto">
                    <h3 className="text-center">Sign In</h3>
                    <div className="form-group">
                        <label>User name</label>
                        <input type="text" className="form-control" name="userName" placeholder="First name" value={this.state.loginRequest.userName} onChange={this.handleChange}/>
                        <span className='error'>{this.state.errors.userName}</span>
                    </div>

                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" className="form-control" name="password" placeholder="Enter password" value={this.state.loginRequest.password} onChange={this.handleChange} />
                        <span className='error'>{this.state.errors.password}</span>

                    </div>

                    <ButtonComponent btnName="Sign In" btnSubmit={this.handleSubmit} variant="primary" className="col-12"></ButtonComponent>
                    <p className="forgot-password text-right">
                        Don't have an account <Link to="/signup">Sign Up?</Link>
                    </p>
                    {
                        this.props.auth?.loginSuccess == true ?
                            <Redirect to="/app" /> :
                            null
                    }
                    {this.state.submitted &&this.props.auth?.loginSuccess == false?
                    <div><span className="error">Please Provide valid Credentials</span></div>:null}
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