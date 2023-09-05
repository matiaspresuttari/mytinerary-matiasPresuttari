import React, { useEffect, useState } from "react"
import '../styles/Card.css'
import { useParams } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { get_city } from "../store/actions/cityActions"

const Card = () => {
    const dispatch = useDispatch()
    const city=useSelector((store)=>store.cityReducer.city)
    const {id}=useParams()

    useEffect(()=> {
        dispatch(get_city({
            id
        }))
    }, [])

    return (
        // <div className='card d-flex justify-content-center align-items-center'>
        <div className="divciudad fondocolor color d-flex flex-wrap justify-content-center align-items-center">
            <div className="color p-3 d-flex flex-column flex-wrap justify-content-center align-items-center">
                <a className="btn bot m-2" href='/cities'>Go back</a>
                <h1 className='fw-bold text'>{city?.name}</h1>
                <h2 className="text m-1">{city?.country}</h2>
            </div>
            <img className="cityimage m-3" src={city?.photo} alt="" />
        </div>
    )
}

export default Card