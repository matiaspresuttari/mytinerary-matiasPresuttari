import { createReducer } from "@reduxjs/toolkit";
import { get_itineraries, get_itinerary } from "../actions/itineraryActions";

const initialState = {
    itineraries: [],
    itinerary: {}
}

export const itineraryReducer=createReducer(initialState,
    (builder)=>builder
        .addCase(get_itineraries.fulfilled,(state, action)=>{
            return {
                ...state,
                itineraries: action.payload.itineraries
            }
        })
        .addCase(get_itinerary.fulfilled,(state,action)=>{
            return {
                ...state,
                itinerary: action.payload.itinerary
            }
        })
)