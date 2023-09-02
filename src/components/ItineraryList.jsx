import React, { useEffect, useRef, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import '../styles/ItineraryList.css'
import { get_itinerary } from "../store/actions/itineraryActions"

const ItineraryList = () => {
    const dispatch = useDispatch()
    const itinerary=useSelector((store)=>store.itineraryReducer.itinerary)
    const {id}=useParams()

    useEffect(()=> {
        dispatch(get_itinerary({
            id
        }))
    }, [])

    return (
        <div className="d-flex flex-wrap justify-content-center align-items-center container">
            <div className="divitinerario color">
                <div className="color d-flex flex-wrap justify-content-between align-items-center">
                    <h2 className="text">{itinerary?.name}</h2>
                    <div className="color">
                        <p className="text self-align-end">Posted by: {itinerary?.userName}</p>
                        <img src={itinerary?.userPhoto} alt="" />
                    </div>
                </div>
                <div className="d-flex color justify-content-between align-items-center">
                    <div className="">
                        <p className="text">Price: {itinerary?.price}</p>
                        <p className="text">Duration: {itinerary?.duration}</p>
                        <p className="text">Likes: {itinerary?.likes}</p>
                        <p className="text">{itinerary?.hashtags}</p>
                    </div>
                    <div className="color">
                        <img className="imgitinerario" src={itinerary?.photo} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItineraryList