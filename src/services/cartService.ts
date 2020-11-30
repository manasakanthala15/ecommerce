import { AddOrRemoveFromCart,GetCartItems,IncreaseOrDecreaseQuantity ,GetProductById} from "../actions/cartActions";
import { Product } from "../models/product";

export const addOrRemoveFromCart = (product:Product) => {
    return async (dispatch: any) => {
        try {        
            dispatch(AddOrRemoveFromCart(product));
        }
        catch (error) {
        }
    }
}

export const getCartItems = () => {
    return async (dispatch: any) => {
        try {        
            dispatch(GetCartItems());
        }
        catch (error) {
        }
    }
}
export const increaseOrDecreaseQuantity=(product:any,type:any)=>{
    return async (dispatch: any) => {
        try {        
            dispatch(IncreaseOrDecreaseQuantity(product,type));
        }
        catch (error) {
        }
    }
}
export const getproductById = (productId:any) => {
    return async (dispatch: any) => {
        try {        
            dispatch(GetProductById(productId));
        }
        catch (error) {
        }
    }
}
