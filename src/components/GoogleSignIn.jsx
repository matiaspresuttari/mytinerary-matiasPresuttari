import axios from "axios"
import { useDispatch, useSelector } from "react-redux"
import { useEffect, useRef, useState } from "react"
import { user_login_google } from "../store/actions/userActions";

const GoogleSignIn = () => {
    const store=useSelector(store=>store.userReducer)

    const dispatch = useDispatch();

    const googleButton = useRef()

    const handleCredentialResponse = async(response) => {
        // console.log("Encoded JWT ID token: " + response.credential);
        const data = {
            token_id: response.credential
        }

        const userResponse = await axios.post('http://localhost:8000/api/auth/google',data)
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
                client_id: "163745540984-t05o5cgimrmch32a7qb1rhcvmso4e6mi.apps.googleusercontent.com",
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