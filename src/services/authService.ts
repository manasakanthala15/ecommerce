import { User, LoginRequest } from "../models/user";
import { RegistrationSuccess, RegistrationFailed, LoginSuccess, LoginFailed } from "../actions/authactions";

export const registerUser = (user: User) => {
    return async (dispatch: any) => {
        try {
            const url = "https://devapi.fakewiser.com/Org/776a379b-ed04-4601-b355-a18a13198e27" + "/register";
            const res = await fetch(url, {
                method: 'post',
                headers: new Headers({ 'content-type': 'application/json' , 'Accept': 'application/json'}),
                body: JSON.stringify(user)
            })
            const response = await handleError(res);
            console.log(res);
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
            const url = "https://devapi.fakewiser.com/Org/776a379b-ed04-4601-b355-a18a13198e27" + "/login";
            const res = await fetch(url, {
                method: 'post',
                headers: new Headers({ 'content-type': 'application/json' , 'Accept': 'application/json'}),
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

function handleError(response: Response) {
    if (!response.ok) {
        throw Error(response.statusText);
    }
    return response.json();
}
