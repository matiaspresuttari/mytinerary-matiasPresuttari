import React, { useEffect, useState } from "react"
import axios from "axios"
import '../styles/Card.css'
import { useParams } from "react-router-dom"

const Card = () => {
    const [cities,setCities]=useState()
    const { cityId } = useParams()

    useEffect(()=> {
        axios.get(`http://localhost:8000/api/cities/${cityId}`)
        .then(response => setCities(response.data.cities))
        .catch(err=>console.log(err))
    }, [])

    return (
        <div className='card d-flex justify-content-center align-items-center'>
            <div className="tarjeta color d-flex flex-column flex-wrap justify-content-center align-items-center">
                {
                    cities?.map((city) => {
                        return (
                            <div className="tarjeta color d-flex flex-column flex-wrap justify-content-center align-items-center">
                                <h1 className='fw-bold text'>{city.name}</h1>
                                <h2 className="text m-1">{city.country}</h2>
                                <img className="images" src={city.photo} alt="" />
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Card