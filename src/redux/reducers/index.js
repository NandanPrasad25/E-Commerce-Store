import { combineReducers } from "redux";
import { productReducer, selectProductReducer } from "./productReducers";

export const reducers = combineReducers({
    allProducts: productReducer,
    product: selectProductReducer
})