import GoogleSignIn from "../components/GoogleSignIn";
import { user_register } from "../store/actions/userActions";
import '../styles/SignUp.css'
import { useDispatch, useSelector } from "react-redux"
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import apiUrl from "../api";

const SignUp = () => {

    const countries = ["Argentina", "Bolivia", "Brazil", "Chile", "France", "Germany", "Paraguay", "Peru", "Spain", "United States", "Venezuela"]
    const navigate=useNavigate()
    const store=useSelector(store=>store.userReducer)

    const [formData, setFormData]=useState({
        email: '',
        password: '',
        name: '',
        photo: ''
    })

    const dispatch = useDispatch();

    const handleInput = (event)=>{
        setFormData({
            ... formData, //copiar el estado anterior
            [event.target.name]: event.target.value //modificar solo el estado que cambia
        })
    }

    const handleSignUp = async(event) => {
        event.preventDefault()

        try {
            const { data } = await axios.post(`${apiUrl}/auth/signup`, formData)
            console.log(data);
            navigate('/signin')

        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="d-flex flex-column justify-content-center align-items-center text-align-center divsignup container rounded">
            <div className="d-flex flex-column text-center">
                <a className='titulo fw-bold' href="/">MyTinerary</a>
            </div>

            <form onSubmit={handleSignUp} action="" className="mx-auto">
                <div className="d-flex gap-4">
                    <div>
                        <label htmlFor="name" className="fw-bold">Name</label>
                        <div className="">
                            <input
                                type="text"
                                name="name"
                                autoComplete="name"
                                className="p-2 fields"
                                placeholder="Enter name"
                                required
                                onChange={handleInput}
                            />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="lastname" className="fw-bold">Lastname</label>
                        <div className="">
                            <input
                                id="lastname"
                                type="text"
                                name="lastname"
                                autoComplete="lastname"
                                className="p-2 fields"
                                placeholder="Enter lastname"
                                required
                                onChange={handleInput}
                            />
                        </div>
                    </div>
                </div>
                <div>
                    <label htmlFor="email" className="fw-bold">Email</label>
                    <div className="">
                        <input
                            type="text"
                            name="email"
                            autoComplete="email"
                            className="p-2 fields"
                            placeholder="Enter email"
                            required
                            onChange={handleInput}
                        />
                    </div>
                </div>

                <div>
                    <label htmlFor="password" className="fw-bold">Password</label>
                    <div className="">
                        <input
                            id="password"
                            type="password"
                            name="password"
                            autoComplete="current-password"
                            className="p-2 fields"
                            placeholder="Enter password"
                            required
                            onChange={handleInput}
                        />
                    </div>
                </div>
                <div>
                    <label htmlFor="photo" className="fw-bold">Photo</label>
                    <div className="mb-2">
                        <input
                            type="photo"
                            name="photo"
                            autoComplete="user-photo"
                            className="p-2 fields"
                            placeholder="Enter photo-url"
                            required
                            onChange={handleInput}
                        />
                    </div>
                </div>
                <select defaultValue="0" className="form-select mb-2 selectcolor" name="Country" id="">
                    <option>Select your country</option>
                    {
                        countries.map((country,index) => {
                            return (
                                <option key={index}>{country}</option>
                            )
                        })
                    }
                </select>

                <GoogleSignIn></GoogleSignIn>

                <div className="mt-3">
                    <p className="fw-bold mt-3">
                        No account?
                        <a className="px-1" href="/signin">Sign in</a>
                    </p>
                    <Link to='/'>
                        <button type="submit" className="px-3 py-2 fw-bold rounded signinbutton" onClick={handleSignUp}>
                            Sign up
                        </button>
                    </Link>
                </div>
            </form>
        </div>
    )
}

export default SignUp