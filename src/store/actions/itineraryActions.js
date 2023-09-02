import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const get_itineraries = createAsyncThunk('get_itineraries',async(obj)=>{
    try {
        const response = await axios.get('http://localhost:8000/api/itineraries')

        return {
            itineraries: response.data.itineraries
        }
    } catch (error) {
        console.log(error);
    }
})

export const get_itinerary = createAsyncThunk('get_itinerary',async(obj)=>{
    try {
        const response = await axios.get(`http://localhost:8000/api/itineraries/${obj.id}`)

        return {
            itinerary: response.data.itinerary
        }
    } catch (error) {
        return{
            itinerary: []
        }
    }
})