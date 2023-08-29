import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./reducers/userReducers";
import { cityReducer } from "./reducers/cityReducers";

export const store = configureStore({
    reducer: {
        userReducer: userReducer,
        cityReducer: cityReducer
    }
})