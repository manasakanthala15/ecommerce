import { User, LoginRequest } from "../models/user";
import { authUrl } from "../resource";
import { RegistrationSuccess, RegistrationFailed, LoginSuccess, LoginFailed,LogOut } from "../actions/authActions";

export const registerUser = (user: User) => {
    return async (dispatch: any) => {
        try {
            const url = authUrl + "/Register";
            const res = await fetch(url, {
                method: 'POST',
                headers: new Headers({ 'content-type': 'application/json'}),
                body: JSON.stringify(user)
            })
            const response = await handleError(res);
            dispatch(RegistrationSuccess());
        }
        catch (error) {
            dispatch(RegistrationFailed(error));
        }
    }
}

export const loginUser = (credentials: LoginRequest) => {
    return async (dispatch: any) => {
        try { 
            const url = authUrl + "/Login";
            const res = await fetch(url, {
                method: 'POST',
                headers: new Headers({'content-type': 'application/json'}),
                body: JSON.stringify(credentials)
            })
            const response = await handleError(res);
            console.log(response);
            dispatch(LoginSuccess(response));
            
        }
        catch (error) {
            dispatch(LoginFailed(error));
        }
    }
}
export const logout = () => {
    return async (dispatch: any) => {
        try { 
            dispatch(LogOut());
        }
        catch (error) {
        }
    }
}
function handleError(response: Response) {
    if (!response.ok) {
        throw Error(response.statusText);
    }
    return response.json();
}
