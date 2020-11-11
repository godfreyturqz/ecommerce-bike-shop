//function
import { combineReducers } from "redux";
//reducers
import { productListReducer, createProductReducer, productDetailsReducer, deleteProductReducer } from "./product/productReducers";
import { cartReducer } from "./cart/cartReducers";
import { userSignInReducer } from "./user/userReducers";
import { orderReducer } from "./order/orderReducers";

export const rootReducer = combineReducers({
    createProductReducer,
    productListReducer,
    productDetailsReducer,
    deleteProductReducer,
    cartReducer,
    userSignInReducer,
    orderReducer
})