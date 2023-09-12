import React from 'react'
import '../styles/Header.css'
import { useSelector } from 'react-redux'

const Header = () => {

    const user = useSelector(store=>store.userReducer.user)
    console.log(user);
    const defaultPhoto = '/user.png'

    return (
        <header className="fixed-top">
            <nav className="navbar navbar-expand-md">
                <div className="container-fluid">
                    <a className='titulo fw-bold' href="/">MyTinerary</a>
                    <button className="navbar-toggler hamburguesa" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link" href="/"><b>Home</b></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/cities"><b>Cities</b></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link boton-login rounded" href="/signin"><img src={user? user.photo:defaultPhoto} alt="" className='img-login rounded'/><b>{user? null : 'Sign in'}</b></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header