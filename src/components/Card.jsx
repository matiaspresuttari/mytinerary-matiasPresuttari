import React, { useEffect, useState } from "react"
import axios from "axios"
import '../styles/Card.css'
import { useParams } from "react-router-dom"

const Card = () => {
    const [city,setCity]=useState()
    const {id}=useParams()

    useEffect(()=> {
        axios.get(`http://localhost:8000/api/cities/${id}`)
        .then(response => {
            setCity(response.data.city)
        })
        .catch(err=>console.log(err))
    }, [])

    return (
        <div className='card d-flex justify-content-center align-items-center'>
            <div className="tarjeta color d-flex flex-column flex-wrap justify-content-center align-items-center">
                <div className="tarjeta color d-flex flex-column flex-wrap justify-content-center align-items-center">
                    <a className="btn bot m-2" href='/cities'>Go back</a>
                    <h1 className='fw-bold text'>{city?.name}</h1>
                    <h2 className="text m-1">{city?.country}</h2>
                    <img className="images" src={city?.photo} alt="" />
                    <h2 className="text m-2">Under construction...</h2>
                </div>
            </div>
        </div>
    )
}

export default Card