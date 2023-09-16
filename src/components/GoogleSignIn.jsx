import axios from "axios"
import { useDispatch, useSelector } from "react-redux"
import { useEffect, useRef, useState } from "react"
import { user_login_google } from "../store/actions/userActions";
import apiUrl from "../api";

const GoogleSignIn = () => {
    const store=useSelector(store=>store.userReducer)

    const dispatch = useDispatch();

    const googleButton = useRef()

    const handleCredentialResponse = async(response) => {
        // console.log("Encoded JWT ID token: " + response.credential);
        const data = {
            token_id: response.credential
        }

        const userResponse = await axios.post(`${apiUrl}/auth/google`,data)
        console.log(userResponse);
        
        try {
            dispatch(user_login_google(
                userResponse
            ))

        } catch (error) {
            console.log(error);
        }
    }

    useEffect(()=>{
        if(window.google) {
            window.google.accounts.id.initialize({
                client_id: import.meta.env.VITE_APP_GOOGLE_CLIENT,
                callback: handleCredentialResponse
            });
            window.google.accounts.id.renderButton(
                googleButton.current,
                { type:'standard', shape:"pill" ,theme: "filled_black", size: "large"}  // customization attributes
            );
        }
    },[])
    
    return (
        <div ref={googleButton}>GoogleSignIn</div>
    )
}

export default GoogleSignIn