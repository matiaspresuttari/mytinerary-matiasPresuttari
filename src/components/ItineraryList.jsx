import React, { useEffect, useRef, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import '../styles/ItineraryList.css'
import { get_itineraries } from "../store/actions/itineraryActions"
import Link from "./Link"

const ItineraryList = () => {
    const itineraries=useSelector((store)=>store.itineraryReducer.itineraries)
    const dispatch = useDispatch()
    const {id}=useParams()

    useEffect(()=> {
        dispatch(get_itineraries(
            id
        ))
    }, [])
    
    return (
        <div className="d-flex flex-wrap justify-content-center align-items-center container">
            <div className="divitinerario color d-flex flex-column">
                <h2 className="align-self-center itinerarytitle color">Itineraries</h2>
                {
                    itineraries?.length>0
                    ? itineraries?.map((itinerary,index) => {
                        return (
                            <>
                                <div key={index} className="itinerario color d-flex flex-column">
                                    <div className="color d-flex flex-wrap justify-content-between align-items-center">
                                        <h2 className="text">{itinerary?.name}</h2>
                                        <div className="color d-flex flex-column justify-content-center align-items-center">
                                            <p className="text self-align-end">Posted by: {itinerary?.userName}</p>
                                            <img className="userphoto" src={itinerary?.userPhoto} alt="" />
                                        </div>
                                    </div>
                                    <div className="d-flex color justify-content-between align-items-center mb-3">
                                        <div className="">
                                            <div className="color gap-2 d-flex">
                                                <p className="text">Price: {itinerary?.price}</p>
                                                <img className="dolar" src="/dolar.png" alt="" />
                                            </div>
                                            <p className="text">Duration: {itinerary?.duration}</p>
                                            <div className="color gap-2 d-flex">
                                                <p className="text">Likes: {itinerary?.likes}</p>
                                                <img className="dolar" src="/like.png" alt="" />
                                            </div>
                                            <p className="text">{itinerary?.hashtags}</p>
                                        </div>
                                        <div className="color">
                                            <img className="imgitinerario" src={itinerary?.photo} alt="" />
                                        </div>
                                    </div>
                                    <Link className="btn botmore m-2 align-self-center" to='/cities'>View more (under construction)</Link>
                                </div>
                            </>
                        )
                    })
                    : <h2 className="align-self-center color">No itineraries were found.</h2>
                }
            </div>
        </div>
    )
}

export default ItineraryList