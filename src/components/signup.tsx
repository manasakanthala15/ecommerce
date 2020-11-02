import * as React from 'react';
import { User } from '../models/user';
import { connect } from 'react-redux';
import { Row, Col } from 'react-bootstrap';
import { Link } from "react-router-dom";
import ButtonComponent from '../shared/button';
import { registerUser } from '../services/authService';


interface IState {
    user: User
    errors: any
}
const countErrors = (errors:any) => {
    let count = 0;
    Object.values(errors).forEach(
      (val:any) => val.length > 0 && (count = count+1)
    );
    return count;
  }
const validEmailRegex = RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);
class Login extends React.Component<any, IState>{
    constructor(props: any) {
        super(props);
        this.state = {
            user: new User({}),
            errors: {
                username: '',
                fullname: '',
                email: '',
                password: '',
            }
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event: any) {
        event.preventDefault();
        const { name, value } = event.target;
        let errors = this.state.errors;

        switch (name) {
            case 'fullname':
                errors.fullname =
                    value.length < 1
                        ? 'Full Name is required!'
                        : '';
                break;
            case 'username':
                errors.username =
                    value.length < 1
                        ? 'User Name is required!'
                        : '';
                break;
            case 'email':
                errors.email =
                value.length < 1 || !validEmailRegex.test(value)
                        ? 'Email is not valid!'
                        : '';
                break;
            case 'password':
                errors.password =
                    value.length < 8
                        ? 'Password must be 8 characters long!'
                        : '';
                break;
            default:
                break;
        }
        this.setState({
            user: {
                ...this.state.user, [event.target.name]: event.target.value
            },
            errors:this.state.errors
        });

    }

    handleSubmit(event:any) {
        event.preventDefault();
        this.props.dispatch(registerUser(this.state.user)); 
    }
    render() {
        return (
            <div className="container">
                <form className="col-8 m-auto">
                    <h3 className="text-center">Sign Up</h3>
                    <div className="form-group">
                        <label>User Name</label>
                        <input type="text" className="form-control" value={this.state.user.firstName} placeholder="User name" name="username" onChange={this.handleChange} />
                        <span className='error'>{this.state.errors.username}</span>

                    </div>

                    <div className="form-group">
                        <label>Full Name</label>
                        <input type="text" className="form-control" placeholder="Full name" value={this.state.user.lastName} name="fullname" onChange={this.handleChange}/>
                        <span className='error'>{this.state.errors.fullName}</span>

                    </div>

                    <div className="form-group">
                        <label>Email address</label>
                        <input type="email" className="form-control" placeholder="Enter email" value={this.state.user.email} name="email" onChange={this.handleChange}/>
                        <span className='error'>{this.state.errors.email}</span>
                    </div>

                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" className="form-control" placeholder="Enter password" value={this.state.user.password} name="password" onChange={this.handleChange}/>
                        <span className='error'>{this.state.errors.password}</span>
                    </div>

                    <ButtonComponent btnName="Sign Up" btnSubmit={this.handleSubmit} variant="primary" className="col-12"></ButtonComponent>
                    <p className="forgot-password text-right">
                        Already registered <Link to="/login">Sign in?</Link>
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