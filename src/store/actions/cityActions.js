import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const get_cities = createAsyncThunk('get_events',async(obj)=>{
    try {
        const response = await axios.get('http://localhost:8000/api/cities')

        return {
            cities: response.data.cities
        }
    } catch (error) {
        console.log(error);
    }
})