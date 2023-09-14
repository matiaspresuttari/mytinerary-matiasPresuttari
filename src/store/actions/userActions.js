import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const user_photo = createAction('user_photo',(obj)=>{
    return {
        payload:{
            photo: obj.photo
        } 
    }
})
export const user_login = createAsyncThunk('user_login',async(obj)=>{
    try {
        const { data } = await axios.post('http://localhost:8000/api/auth/signin', obj.data)
        console.log(data);
        localStorage.setItem('token', data.response.token)
        localStorage.setItem('user', JSON.stringify(data.response.user))

        return {
            user: data.response.user,
            token: data.response.token
        }
    } catch (error) {
        console.log(error);
        return {
            user: null
        }
    }
})
export const user_register = createAsyncThunk('user_register',async(obj)=>{
    try {
        const { data } = await axios.post('http://localhost:8000/api/auth/signup', obj.data)
        console.log(data);
    } catch (error) {
        console.log(error);
    }
})
export const user_login_google = createAsyncThunk('user_login_google',async(obj)=>{
    try {
        localStorage.setItem('token', obj.data.response.token)
        localStorage.setItem('user', JSON.stringify(obj.data.response.user))

        return {
            user: obj.data.response.user,
            token: obj.data.response.token
        }
    } catch (error) {
        console.log(error);
    }
})
export const user_token = createAction('user_token',(user)=>{
    return {
        payload:{
            user
        }
    }
})
export const user_logout = createAsyncThunk('user_logout',async(obj)=>{
    try {
        let token=localStorage.getItem('token')
        let configs={headers:{'Authorization':`Bearer ${token}`}}
        let url=('http://localhost:8000/api/auth/signout')
        axios.post(url,null,configs)
            .then(response=>console.log(response))
            .catch(err=>console.log(err))
        localStorage.removeItem('token')
        localStorage.removeItem('user')
        return {
            user: null,
            token: null
        }
    } catch (error) {
        console.log(error);
    }
})