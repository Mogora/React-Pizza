import {configureStore} from "@reduxjs/toolkit";
import filter from "./slices/filterSlice";
import cart from "./slices/cartSlice";

export const Store = configureStore({
    reducer: {
        filter,
        cart,
    }
});