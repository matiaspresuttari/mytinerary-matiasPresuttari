import React from 'react'
import '../styles/Footer.css'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <footer className="d-flex fixed-bottom">
            <div className="divFooter">
                <p>©2023-Mindhub</p>
            </div>
            <div className=''>
                <Link className='text-decoration-none links linkHome' to="/">Home</Link>
                <Link className='text-decoration-none links linkCities' to="/cities">Cities</Link>
            </div>
            <div className='divFooter'>
                <a href="https://facebook.com" target="_blank"><img src="/facebook.png" width="30" /></a>
                <a className='redes' href="https://whatsapp.com" target="_blank"><img src="/whatsapp.png" width="30" /></a>
                <a className='redes' href="https://instagram.com" target="_blank"><img src="/instagram.png" width="30" /></a>
            </div>
        </footer>
    )
}

export default Footer