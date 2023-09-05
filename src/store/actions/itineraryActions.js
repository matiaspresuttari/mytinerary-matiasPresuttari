import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const get_itineraries = createAsyncThunk('get_itineraries',async(id)=>{
    try {
        const response = await axios.get(`http://localhost:8000/api/itineraries/city/${id}`)
        console.log(response);

        return {
            itineraries: response.data.itineraries
        }
    } catch (error) {
        console.log(error);
        return{
            itineraries: []
        }
    }
})