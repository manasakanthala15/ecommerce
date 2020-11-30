import { GetAllCollections,GetFilteredCollection,GetPriceFilteredCollection } from "../actions/collectionAction"; 
import { Product } from "../models/product";

export const getAllCollections = () => {
    return async (dispatch: any) => {
        try {        
            dispatch(GetAllCollections());
        }
        catch (error) {
        }
    }
}

export const getFilteredCollections = (tag:any,count:any) => {
    return async (dispatch: any) => {
        try {        
            dispatch(GetFilteredCollection(tag,count));
        }
        catch (error) {
        }
    }
}
export const getpricefilteredItems = (filter:any) => {
    return async (dispatch: any) => {
        try {        
            dispatch(GetPriceFilteredCollection(filter));
        }
        catch (error) {
        }
    }
}