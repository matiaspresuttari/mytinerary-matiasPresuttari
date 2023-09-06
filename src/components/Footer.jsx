import React from 'react'
import '../styles/Footer.css'

const Footer = () => {
    return (
        <footer className="d-flex fixed-bottom">
            <div className="divFooter">
                <p>©2023-Mindhub</p>
            </div>
            <div className=''>
                <a className='text-decoration-none links linkHome' href="/">Home</a>
                <a className='text-decoration-none links linkCities' href="/Cities">Cities</a>
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