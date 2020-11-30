export const GET_ALL_COLLECTIONS = "GET_ALL_COLLECTIONS";
export const GET_FILTERED_COLLECTIONS = "GET_FILTERED_COLLECTIONS";
export const GET_Filtered_PRODUCTS_WITH_PRICE="GET_Filtered_PRODUCTS_WITH_PRICE";
export const GetAllCollections = () => ({
    type: GET_ALL_COLLECTIONS,
    payload: {  },
})

export const GetFilteredCollection = (tag: any,itemCount:any) => ({
    type: GET_FILTERED_COLLECTIONS,
    payload: { tag },
    count:itemCount
})
export const GetPriceFilteredCollection = (filter: any) => ({
    type: GET_Filtered_PRODUCTS_WITH_PRICE,
    payload: { filter }
})