import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import apiUrl from "../../api";

export const get_itineraries = createAsyncThunk('get_itineraries',async(id)=>{
    try {
        const response = await axios.get(`${apiUrl}/itineraries/city/${id}`)
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