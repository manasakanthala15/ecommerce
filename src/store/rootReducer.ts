import { productReducer } from "../Reducers/productReducer";
import { cartReducer } from "../Reducers/cartReducer";

import { combineReducers } from 'redux';


export interface IState {
}

export const rootReducer = combineReducers({
    productReducer,
    cartReducer
})