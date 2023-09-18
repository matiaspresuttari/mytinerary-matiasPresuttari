import { useDispatch, useSelector } from "react-redux"
import { user_login } from "../store/actions/userActions";
import { useState } from "react";
import GoogleSignIn from "../components/GoogleSignIn";
import '../styles/SignIn.css'
import LinkButton from "../components/LinkButton";

const SignIn = () => {
    const store=useSelector(store=>store.userReducer)

    
    const [formData, setFormData]=useState({
        email: '',
        password: ''
    })

    const dispatch = useDispatch();

    const handleInput = (event)=>{
        setFormData({
            ... formData, //copiar el estado anterior
            [event.target.name]: event.target.value //modificar solo el estado que cambia
        })
    }

    const handleSignIn = async(event) => {
        event.preventDefault()

        try {
            dispatch(user_login({
                data: formData
            }))


        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="d-flex flex-column justify-content-center align-items-center text-align-center divsignin container rounded">
            <div className="d-flex flex-column text-center ">
                <a className='titulo fw-bold mb-3 ' href="/">MyTinerary</a>
            </div>

            <form onSubmit={handleSignIn} action="" className="mx-auto ">
                <div>
                    <label htmlFor="email" className="fw-bold ">Email</label>
                    <div className="">
                        <input
                            onChange={handleInput}
                            type="email"
                            name="email"
                            autoComplete="username"
                            className="p-2 fields rounded "
                            placeholder="Enter email"
                        />
                    </div>
                </div>

                <div>
                    <label htmlFor="password" className="fw-bold">Password</label>
                    <div className="mb-3">
                        <input
                            onChange={handleInput}
                            type="password"
                            name="password"
                            autoComplete="current-password"
                            className="p-2 fields rounded"
                            placeholder="Enter password"
                        />
                    </div>
                    <GoogleSignIn></GoogleSignIn>
                </div>


                <div className="">
                    <p className="fw-bold mt-3">
                        No account?
                        <LinkButton className="" to="/signup" title="Sign up"></LinkButton>
                    </p>

                    <button type="submit" className="px-3 py-2 fw-bold rounded signinbutton" onClick={handleSignIn}>
                        Sign in
                    </button>
                </div>
            </form>
        </div>
    )
}

export default SignIn