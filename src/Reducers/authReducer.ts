import { User } from "../models/user";
import { REGISTRATION_SUCCESS, REGISTRATION_FAILED, LOGIN_SUCCESS, 
    LOGIN_FAILED, LOGOUT } from "../actions/authactions";

const initialState = {
    user: {},
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
            }
        case LOGIN_SUCCESS:
            return {
                ...state,
                loginSuccess: true,
                user:action.payload,
            }
        case LOGIN_FAILED:
            return {
                ...state,
                loginFailed: true,
            }
        default:
            return state
    }
}