import {configureStore} from "@reduxjs/toolkit";
import filter from "./slices/filterSlice";

export const Store = configureStore({
    reducer: {
        filter,
    }
});