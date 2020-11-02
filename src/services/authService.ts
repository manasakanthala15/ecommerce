import { User, LoginRequest } from "../models/user";
import { authUrl } from "../resource";
import { RegistrationSuccess, RegistrationFailed, LoginSuccess, LoginFailed } from "../actions/authActions";

export const registerUser = (user: User) => {
    return async (dispatch: any) => {
        try {
            const url = authUrl + "/Register";
            const res = await fetch(url, {
                method: 'POST',
                headers: new Headers({ 'content-type': 'application/json','User-Agent':'PostmanRuntime/7.26.5','Accept' :'*/*',
                'Accept-Encoding':'gzip, deflate, br','Connection':'keep-alive',"Access-Control-Allow-Origin":"https://"}),
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
                headers: new Headers({'content-type': 'application/json','User-Agent':'PostmanRuntime/7.26.5','Accept' :'*/*',
                'Accept-Encoding':'gzip, deflate, br','Connection':'keep-alive',"Access-Control-Allow-Origin":"*" }),
                body: JSON.stringify(credentials)
            })
            const response = await handleError(res);
            console.log(response.result);
            dispatch(LoginSuccess(response.result.token, response.result));
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
