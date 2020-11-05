import { GetAllCollections,GetFilteredCollection } from "../actions/collectionAction"; 
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

export const getFilteredCollections = (tag:any) => {
    return async (dispatch: any) => {
        try {        
            dispatch(GetFilteredCollection(tag));
        }
        catch (error) {
        }
    }
}