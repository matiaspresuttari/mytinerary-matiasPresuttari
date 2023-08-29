import React, { useEffect, useRef, useState } from "react"
import '../styles/CityList.css'
import axios from "axios"
import Link from './Link'
import { useDispatch, useSelector } from "react-redux"
import { filter_cities, get_cities } from "../store/actions/cityActions"

const CityList = () => {
    const cities=useSelector((store)=>store.cityReducer.cities)

    const dispatch = useDispatch()

    let inputSearch=useRef()

    useEffect(()=> {
        dispatch(get_cities())
    }, [])

    const handleSearch=async()=>{
        dispatch(filter_cities({
            name: inputSearch.current.value
        }))
    }

    return (
        <div className='contenedor2 py-5 d-flex align-items-center flex-column flex-wrap justify-content-center'>
            <div className="d-flex flex-wrap justificado align-items-center">
                <h1 className='fw-bold' >Cities</h1>
                <div>
                    <input ref={inputSearch} className="border-2 bordar-gray-700 rounded divtarjetas" type="text" placeholder="Find..."/>
                    <button onClick={handleSearch} className="rounded m-1">Find</button>
                </div>
            </div>
            <div className="d-flex flex-wrap justify-content-center gap-2 ">
                {
                    cities?.length>0
                    ? cities?.map((city) => {
                        return (
                            <div key={city._id} to={`/cities/${city._id}`} className="divtarjetas rounded tarjeta color d-flex flex-column flex-wrap justify-content-center align-items-center">
                                <h1 className='fw-bold text textotarjeta'>{city.name}</h1>
                                <h2 className="text m-1 paises textotarjeta">({city.country})</h2>
                                <img className="images rounded" src={city.photo} alt="" />
                                <Link key={city._id} to={`/cities/${city._id}`}/>
                            </div>
                        )
                    })
                    : <h2>No cities were found.</h2>
                }
            </div>
        </div>
    )
}

export default CityList