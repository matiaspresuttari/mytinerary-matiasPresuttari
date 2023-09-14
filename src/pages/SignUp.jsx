import GoogleSignIn from "../components/GoogleSignIn";
import { user_register } from "../store/actions/userActions";
import '../styles/SignUp.css'
import { useDispatch, useSelector } from "react-redux"
import { useState } from "react";
import { Link } from "react-router-dom";

const SignUp = () => {

    const countries = ["Argentina", "Bolivia", "Brazil", "Chile", "France", "Germany", "Paraguay", "Peru", "Spain", "United States", "Venezuela"]

    const store=useSelector(store=>store.userReducer)

    const [formData, setFormData]=useState({
        email: '',
        password: '',
        name: '',
        photo: ''
    })

    const [formData2, setFormData2]=useState({
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
    const handleInput2 = (event)=>{
        setFormData2({
            ... formData2,
            [event.target.name]: event.target.value
        })
    }

    const handleSignUp = async(event) => {
        event.preventDefault()

        try {
            dispatch(user_register({
                data: formData,
                data2: formData2
            }))

        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="d-flex flex-column justify-content-center align-items-center text-align-center">
            <div className="d-flex flex-column text-center">
                <a className='titulo fw-bold' href="/">MyTinerary</a>
            </div>

            <form onSubmit={handleSignUp} action="" className="mx-auto">
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
                            onChange={(e) => {
                                handleInput(e);
                                handleInput2(e);
                            }}
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
                            onChange={(f) => {
                                handleInput(f);
                                handleInput2(f);
                            }}
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
                <select defaultValue="0" className="form-select mb-2" name="Country" id="">
                    <option>Select your country</option>
                    {
                        countries.map((country) => {
                            return (
                                <option>{country}</option>
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