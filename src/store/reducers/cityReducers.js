import { createReducer } from "@reduxjs/toolkit";
import { get_cities } from "../actions/cityActions";

const initialState = {
    cities: []
}

export const cityReducer=createReducer(initialState,
    (builder)=>builder
        .addCase(get_cities.fulfilled,(state, action)=>{
            return {
                ...state,
                cities: action.payload.cities
            }
        })
)