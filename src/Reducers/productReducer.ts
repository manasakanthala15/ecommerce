import { User } from "../models/user";
import { GET_PRODUCTS,GET_Filtered_PRODUCTS } from "../actions/productactions";
import { Product } from "../models/product";

const initialState = {
    products: [],
    mockproducts:[]
}

export function productReducer(state = initialState, action: any) {
    switch (action.type) {
        case GET_PRODUCTS:
            return {
                ...state,
                products: action.payload.products,
                mockproducts: action.payload.products
            }
        case GET_Filtered_PRODUCTS:
            if(action.payload.filter!=""){
                let filteredProducts=Array();
                state.products.filter((item:any)=>{
                    if(item.cost<action.payload.filter){
                        filteredProducts.push(item)
                    }
                })
                return {
                    ...state,
                    products: filteredProducts
                }
            }
            else{
                return {
                    ...state,
                    products: state.mockproducts
                }
            }
            
        default:
            return state
    }
}