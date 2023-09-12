import { useDispatch, useSelector } from "react-redux"
import { user_login } from "../store/actions/userActions";
import { useState } from "react";
import GoogleSignIn from "../components/GoogleSignIn";

const SignIn = () => {
    const store=useSelector(store=>store.userReducer)
    console.log(store);

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

    console.log(formData);

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
        <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-lg text-center">
                <h1 className="text-2xl font-bold sm:text-3xl">Get started today!</h1>
                <p className="mt-4 text-gray-500">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Et libero nulla
                    eaque error neque ipsa culpa autem, at itaque nostrum!
                </p>
            </div>

            <form onSubmit={handleSignIn} action="" className="mx-auto mb-0 mt-8 max-w-md space-y-4">
                <div>
                    <label htmlFor="email" className="sr-only">Email</label>
                    <div className="relative">
                        <input
                            onChange={handleInput}
                            type="email"
                            name="email"
                            className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                            placeholder="Enter email"
                        />
                    </div>
                </div>

                <div>
                    <label htmlFor="password" className="sr-only">Password</label>

                    <div className="relative">
                        <input
                            onChange={handleInput}
                            type="password"
                            name="password"
                            className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                            placeholder="Enter password"
                        />
                    </div>
                </div>

                <GoogleSignIn></GoogleSignIn>

                <div className="flex items-center justify-between">
                    <p className="text-sm text-gray-500">
                        No account?
                        <a className="underline" href="/signup">Sign up</a>
                    </p>

                    <button
                        type="submit"
                        className="inline-block rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium text-white"
                        onClick={handleSignIn}
                    >
                        Sign in
                    </button>
                </div>
            </form>
        </div>
    )
}

export default SignIn