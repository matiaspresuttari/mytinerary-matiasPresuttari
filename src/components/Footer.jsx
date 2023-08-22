import React from 'react'
import '../styles/Footer.css'

const Footer = () => {
    return (
        <footer className="d-flex fixed-bottom">
            <div className="">
                <p>©2023-Mindhub</p>
            </div>
            <div>
                <a className='text-decoration-none links' href="/">Home</a>
            </div>
            <div>
                <a href="https://facebook.com" target="_blank"><img src="/facebook.png" width="30" /></a>
                <a className='redes' href="https://whatsapp.com" target="_blank"><img src="/whatsapp.png" width="30" /></a>
                <a className='redes' href="https://instagram.com" target="_blank"><img src="/instagram.png" width="30" /></a>
            </div>
        </footer>
    )
}

export default Footer