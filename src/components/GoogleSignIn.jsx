import { useEffect, useRef } from "react"

const GoogleSignIn = () => {
    const googleButton = useRef()
    const handleCredentialResponse = (response) => {
        console.log("Encoded JWT ID token: " + response.credential);
    }

    useEffect(()=>{
        window.onload = function () {
            window.google.accounts.id.initialize({
                client_id: "163745540984-t05o5cgimrmch32a7qb1rhcvmso4e6mi.apps.googleusercontent.com",
                callback: handleCredentialResponse
            });
            window.google.accounts.id.renderButton(
                googleButton.current,
                { theme: "outline", size: "large" }  // customization attributes
            );
        }
    },[])
    
    return (
        <div ref={googleButton}>GoogleSignIn</div>
    )
}

export default GoogleSignIn