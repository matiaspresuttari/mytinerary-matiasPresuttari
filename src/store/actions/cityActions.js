import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const get_cities = createAsyncThunk('get_cities',async(obj)=>{
    try {
        const response = await axios.get('http://localhost:8000/api/cities')

        return {
            cities: response.data.cities
        }
    } catch (error) {
        console.log(error);
    }
})

export const filter_cities = createAsyncThunk('filter_cities',async(obj)=>{
    try {
        const response = await axios.get(`http://localhost:8000/api/cities?name=${obj.name}`)

        return {
            cities: response.data.cities
        }
    } catch (error) {
        return{
            cities: []
        }
    }
})