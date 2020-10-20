import { User, LoginRequest } from "../models/user";
import { GetProducts } from "../actions/productactions";


export const getProducts = () => {
    return async (dispatch: any) => {
        try {
            const url =  "https://devapi.fakewiser.com/Org/776a379b-ed04-4601-b355-a18a13198e27/products";
            const res = await fetch(url, {
                method: 'get',
                headers: new Headers({ 'content-type': 'application/json' , 'Accept': 'application/json'}),
                //body: JSON.stringify(user)
            })
            const response = await handleError(res);
            console.log(res);
            dispatch(GetProducts(response));
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
