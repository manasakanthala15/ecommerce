import * as React from 'react';
import { User } from '../models/user';
import { connect } from 'react-redux';
import { registerUser } from '../services/authService';


interface IState {
    user: User
}

class Login extends React.Component<any, IState>{
    constructor(props: any) {
        super(props);
        this.state = {
            user: new User({})
        }
        this.handleChange=this.handleChange.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
    }

    handleChange(event: any) {
        this.setState({
            user: {
                ...this.state.user, [event.target.name]: event.target.value
            }
        });
    }

    handleSubmit(event: any) {
        event.preventDefault();
        this.props.dispatch(registerUser(this.state.user));
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>First Name</label>
                    <input value={this.state.user.firstName} onChange={this.handleChange} name="firstName" className="mb-3 col-12" />
                    <label>Last Name</label>
                    <input value={this.state.user.lastName} onChange={this.handleChange} name="lastName" className="mb-3 col-12" />
                    <label>Email</label>
                    <input value={this.state.user.email} onChange={this.handleChange} name="email" className="mb-3 col-12" />
                    <label>Password</label>
                    <input value={this.state.user.password} onChange={this.handleChange} name="password" className="mb-3 col-12" />
                    <button className="mb-3" type="submit">
                        Submit
                    </button>
                    <div>
                        <a href="/login" >
                            {"Signin"}
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