import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import apiUrl from "../../api";

export const get_cities = createAsyncThunk('get_cities',async(obj)=>{
    try {
        const response = await axios.get(`${apiUrl}/cities`)

        return {
            cities: response.data.cities
        }
    } catch (error) {
        console.log(error);
    }
})

export const filter_cities = createAsyncThunk('filter_cities',async(obj)=>{
    try {
        const response = await axios.get(`${apiUrl}/cities?name=${obj.name}`)

        return {
            cities: response.data.cities
        }
    } catch (error) {
        return{
            cities: []
        }
    }
})

export const get_city = createAsyncThunk('get_city',async(obj)=>{
    try {
        const response = await axios.get(`${apiUrl}/cities/${obj.id}`)

        return {
            city: response.data.city
        }
    } catch (error) {
        return{
            city: []
        }
    }
})