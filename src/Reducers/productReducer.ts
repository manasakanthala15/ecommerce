import { User } from "../models/user";
import { GET_PRODUCTS,GET_Filtered_PRODUCTS,GET_PRODUCT_BY_ID } from "../actions/productactions";
import { Product } from "../models/product";

const initialState = {
    products: [],
    mockproducts:[],
    product:{}
}

export function productReducer(state = initialState, action: any) {
    switch (action.type) {
        case GET_PRODUCTS:
            localStorage.setItem("Products",JSON.stringify(action.payload.products));
            return {
                ...state,
                products: action.payload.products,
                mockproducts: action.payload.products
            }
        case GET_Filtered_PRODUCTS:
            if(action.payload.filter!=""){
                let filteredProducts=Array();
                state.mockproducts.filter((item:any)=>{
                    if(item.cost>action.payload.filter){
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
            case GET_PRODUCT_BY_ID:
                let product={}
                state.mockproducts.filter((item:any)=>{
                    if(item.id==action.payload.productId){
                        product=item;
                    }
                })
                return {
                    ...state,
                    product:product
                }
        default:
            return state
    }
}