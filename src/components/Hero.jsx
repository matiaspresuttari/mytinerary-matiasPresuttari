import React from 'react'
import '../styles/Hero.css'

const Hero = () => {
    return (
        <div className='contenedor1 py-5 d-flex align-items-center flex-wrap justify-content-center'>
            <div className='texto'>
                <h1 className='welcome fw-bold'>Find your perfect trip, designed by insiders who know and love their cities!</h1>
                <p>Our app will help you find the path for your next trip. With an easy-to-use interface and a host of itinerary options, planning your next trip has never been easier.</p>
                <a className="btn bot" href="./cities.html">Explore cities</a>
            </div>
            <img className="aeropuerto" src="/aeropuerto.jpg " />
        </div>
    )
}

export default Hero