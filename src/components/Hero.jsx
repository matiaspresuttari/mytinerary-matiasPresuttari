import React from 'react'
import '../styles/Hero.css'
import { Link } from 'react-router-dom'

const Hero = () => {
    return (
        <div className='contenedor1 py-5 d-flex align-items-center flex-wrap justify-content-center'>
            <div className='texto d-flex flex-column'>
                <h1 className='welcome fw-bold text-center'>Find your perfect trip, designed by insiders who know and love their cities!</h1>
                <p>Our app will help you find the path for your next trip. With an easy-to-use interface and a host of itinerary options, planning your next trip has never been easier.</p>
                <Link className="btn bot align-self-end" to="/cities">Explore cities</Link>
            </div>
        </div>
    )
}

export default Hero