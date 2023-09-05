import { createReducer } from "@reduxjs/toolkit";
import { get_itineraries } from "../actions/itineraryActions";

const initialState = {
    itineraries: []
}

export const itineraryReducer=createReducer(initialState,
    (builder)=>builder
        .addCase(get_itineraries.fulfilled,(state, action)=>{
            return {
                ...state,
                itineraries: action.payload.itineraries
            }
        })
)