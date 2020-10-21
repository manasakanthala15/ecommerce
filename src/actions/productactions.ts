export const GET_PRODUCTS = "GET_PRODUCTS";
export const GET_Filtered_PRODUCTS = "GET_Filtered_PRODUCTS";

export const GetProducts = (products:any) => ({
    type: GET_PRODUCTS,
    payload: { products }
})
export const GetFilteredProducts = (filter:any) => ({
    type: GET_Filtered_PRODUCTS,
    payload: { filter }
})
