//import { userToken } from "../models/userToken";

export const REGISTRATION_BEGIN = "REGISTRATION_BEGIN";
export const REGISTRATION_SUCCESS = "REGISTRATION_SUCCESS";
export const REGISTRATION_FAILED = "REGISTRATION_FAILED";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILED = "LOGIN_FAILED";
export const LOGOUT = "LOGOUT"

export const LoginSuccess = (user:any) => ({
    type: LOGIN_SUCCESS,
    payload: { user }
})

export const LogOut = () => ({
    type: LOGOUT
})

export const LoginFailed = (error:any) => ({
    type: LOGIN_FAILED,
    payload: { error }
})
export const RegistrationBegin = () => ({
    type: REGISTRATION_BEGIN
})

export const RegistrationSuccess = () => ({
    type: REGISTRATION_SUCCESS,
})

export const RegistrationFailed = (error:any) => ({
    type: REGISTRATION_FAILED,
    payload: { error }
})