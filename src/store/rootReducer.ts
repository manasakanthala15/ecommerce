import { productReducer } from "../Reducers/productReducer";
import { cartReducer } from "../Reducers/cartReducer";
import { authReducer } from "../Reducers/authReducer";
import { combineReducers } from 'redux';
import { collectionReducer } from "../Reducers/collectionReducer";


export interface IState {
}

export const rootReducer = combineReducers({
    productReducer,
    cartReducer,
    authReducer,
    collectionReducer
})