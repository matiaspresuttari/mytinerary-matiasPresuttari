import { createReducer } from "@reduxjs/toolkit";
import { user_login, user_photo, user_token } from "../actions/userActions";

const initialState={
    user:null,
    token:null
}

export const userReducer=createReducer(initialState,
    (builder)=>builder
        .addCase(user_photo,(state,action)=>{
            return{
                ...state,
                photo: action.payload.photo
            }
        })    
        .addCase(user_login.fulfilled,(state,action)=>{
            return{
                ...state,
                user: action.payload.user,
                token: action.payload.token
            }
        })    
        .addCase(user_token,(state,action)=>{
            return{
                ...state,
                user: action.payload.user
            }
        })    
)