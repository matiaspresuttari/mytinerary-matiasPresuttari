import React, { useEffect, useState } from "react"
import '../styles/CityList.css'
import axios from "axios"
import Link from './Link'

const CityList = () => {
    const [cities,setCities]=useState()

    useEffect(()=> {
        axios.get('http://localhost:8000/api/cities?name=')
        .then(response => setCities(response.data.cities))
        .catch(err=>console.log(err))
    }, [])

    const handleInputChange=async(city)=>{
        try {
            const response = await axios.get(`http://localhost:8000/api/cities?name=${city.target.value}`)
            setCities(response.data.cities)
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className='contenedor2 py-5 d-flex align-items-center flex-column flex-wrap justify-content-center'>
            <div className="d-flex flex-wrap justificado align-items-center">
                <h1 className='fw-bold' >Cities</h1>
                <input onChange={handleInputChange} className="border-2 bordar-gray-700 rounded divtarjetas" type="text" placeholder="Find..."/>
            </div>
            <div className="d-flex flex-wrap justify-content-center gap-2 ">
                {
                    cities?.map((city) => {
                        return (
                            <div key={city._id} to={`/cities/${city._id}`} className="divtarjetas rounded tarjeta color d-flex flex-column flex-wrap justify-content-center align-items-center">
                                <h1 className='fw-bold text textotarjeta'>{city.name}</h1>
                                <h2 className="text m-1 paises textotarjeta">({city.country})</h2>
                                <img className="images rounded" src={city.photo} alt="" />
                                <Link key={city._id} to={`/cities/${city._id}`}/>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default CityList