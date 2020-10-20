import React from 'react';
import { LoginRequest } from '../models/user';
import { connect } from 'react-redux';

interface IState {
    loginRequest: LoginRequest
}

class Login extends React.Component<any, IState>{
    constructor(props: any) {
        super(props);
        this.state = {
            loginRequest: new LoginRequest({})
        }
        this.handleChange=this.handleChange.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
    }

    handleChange(event: any) {
        this.setState({
            loginRequest: {
                ...this.state.loginRequest, [event.target.name]: event.target.value
            }
        });
    }

    handleSubmit(event: any) {
        event.preventDefault();
        //this.props.dispatch(loginUser(this.state.loginRequest));
        console.log(this.props);
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>User Name</label>
                    <input value={this.state.loginRequest.userName} onChange={this.handleChange} name="userName" className="mb-3 col-12" />
                    <label>Password</label>
                    <input value={this.state.loginRequest.password} onChange={this.handleChange} name="password" className="mb-3 col-12" />
                    <button className="mb-3" type="submit">
                        Submit
                </button>

                    <div>
                        <a href="/signup" >
                            {"Don't have an account? Sign Up"}
                        </a>
                    </div>
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