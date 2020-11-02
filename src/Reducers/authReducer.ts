import { User } from "../models/user";
import { REGISTRATION_SUCCESS, REGISTRATION_FAILED, LOGIN_SUCCESS, LOGIN_FAILED, LOGOUT } from "../actions/authActions";
import { userToken } from "../models/userToken";


const initialState = {
    user: {},
    userToken: new userToken({}),
    registrationErrorInfo: "",
    registrationSuccess: false,
    registrationError: false,
    loginSuccess: false,
    loginFailed: false,
    loginFailedError: "",
}

export function authReducer(state = initialState, action: any) {
    switch (action.type) {
        case REGISTRATION_SUCCESS:
            return {
                ...state,
                registrationSuccess: true
            }
        case REGISTRATION_FAILED:
            return {
                ...state,
                registrationError: true,
                registrationErrorInfo: action.payload.error
            }
        case LOGIN_SUCCESS:
            return {
                ...state,
                loginSuccess: true,
                user: action.payload,
                userToken: action.payload.userToken
            }
        case LOGIN_FAILED:
            return {
                ...state,
                loginFailed: true,
                loginFailedError: action.payload.error
            }
        case LOGOUT:
            return {
                ...state,
                user: new User({}),
                registrationErrorInfo: "",
                registrationSuccess: false,
                registrationError: false,
                loginSuccess: false,
                loginFailed: false,
                loginFailedError: "",
            }
        default:
            return state
    }
}