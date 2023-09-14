import React, { useState } from 'react'
import '../styles/Header.css'
import { user_logout } from "../store/actions/userActions";
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';

const Header = () => {

    const user = useSelector(store=>store.userReducer.user)
    const defaultPhoto = '/user.png'

    const dispatch = useDispatch();

    const handleSignOut = async(event) => {
        event.preventDefault()

        try {
            dispatch(user_logout())
        } catch (error) {
            console.log(error);
        }
    }
    
    return (
        <header className="fixed-top">
            <nav className="navbar navbar-expand-md">
                <div className="container-fluid">
                    <Link className='titulo fw-bold' to="/">MyTinerary</Link>
                    <button className="navbar-toggler hamburguesa" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link" href="/"><b>Home</b></Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/cities"><b>Cities</b></Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link boton-login rounded" to="/signin"><b className=''>{user? user.name : 'Sign in'}</b><img src={user? user.photo:defaultPhoto} alt="" className='img-login rounded'/></Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/signout" onClick={handleSignOut}><b>{user? 'Sign out' : ''}</b></Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header