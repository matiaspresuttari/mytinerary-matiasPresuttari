import React, { useState, useEffect } from 'react'
import '../styles/Carousel.css'

const Carousel = () => {
    let [index,setIndex]=useState(0);

    const images1=[
        {
            name:'Buenos Aires',
            src:'/Cities/buenosAires.jpg',
        },
        {
            name:'Cairo',
            src:'/Cities/cairo.jpg',
        },
        {
            name:'Cancun',
            src:'/Cities/cancun.jpg',
        }
    ]
    const images2=[
        {
            name:'New York',
            src:'/Cities/newYork.jpg',
        },
        {
            name:'Shangai',
            src:'/Cities/shangai.jpg',
        },
        {
            name:'London',
            src:'/Cities/london.jpg',
        }
    ]
    const images3=[
        {
            name:'Rome',
            src:'/Cities/rome.jpg',
        },
        {
            name:'Rio Do Janeiro',
            src:'/Cities/rioDoJaneiro.jpg',
        },
        {
            name:'Dubai',
            src:'/Cities/dubai.jpg',
        }
    ]
    const images4=[
        {
            name:'Tokyo',
            src:'/Cities/tokio.jpg'
        },
        {
            name:'Moscow',
            src:'/Cities/moscow.jpg'
        },
        {
            name:'Berlin',
            src:'/Cities/berlin.jpg'
        }
    ]

    const handlePrev=()=>{
        if (index>0){
            setIndex(index-1)
        }
        if (index==0){
            setIndex(2)
        }
    }

    const handleNext=()=>{
        if (index<2){
            setIndex(index+1)
        }
        if (index==2){
            setIndex(0)
        }
    }

    const autoSlide = () => {
        handleNext();
    };

    useEffect(() => {
        const interval = setInterval(autoSlide, 5000);

        return () => {
            clearInterval(interval);
        };
    }, [index]);

    return (
        <div id="carouselExample" className="carousel slide carusel">
            <h2 className='text-center'>My Tineraries</h2>
            <div className='d-flex justify-content-center'>
                <button onClick={handlePrev} className="boton carousel-control-prev-icon align-self-center"></button>
                <div className="carousel-inner">
                    <div className="carousel-item active d-flex justify-content-center flex-wrap">
                        <div className="city-info">
                            <h3>{images1[index].name}</h3>
                            <img src={images1[index].src} alt="" className='city rounded' />
                        </div>
                        <div className="city-info">
                            <h3>{images2[index].name}</h3>
                            <img src={images2[index].src} alt="" className='city rounded' />
                        </div>
                        <div className="city-info">
                            <h3>{images3[index].name}</h3>
                            <img src={images3[index].src} alt="" className='city rounded' />
                        </div>
                        <div className="city-info">
                            <h3>{images4[index].name}</h3>
                            <img src={images4[index].src} alt="" className='city rounded' />
                        </div>
                    </div>
                    <div className="carousel-item d-flex justify-content-center flex-wrap">
                        <div className="city-info">
                            <h3>{images1[index].name}</h3>
                            <img src={images1[index].src} alt="" className='city rounded' />
                        </div>
                        <div className="city-info">
                            <h3>{images2[index].name}</h3>
                            <img src={images2[index].src} alt="" className='city rounded' />
                        </div>
                        <div className="city-info">
                            <h3>{images3[index].name}</h3>
                            <img src={images3[index].src} alt="" className='city rounded' />
                        </div>
                        <div className="city-info">
                            <h3>{images4[index].name}</h3>
                            <img src={images4[index].src} alt="" className='city rounded' />
                        </div>
                    </div>
                    <div className="carousel-item d-flex justify-content-center flex-wrap">
                        <div className="city-info">
                            <h3>{images1[index].name}</h3>
                            <img src={images1[index].src} alt="" className='city rounded' />
                        </div>
                        <div className="city-info">
                            <h3>{images2[index].name}</h3>
                            <img src={images2[index].src} alt="" className='city rounded' />
                        </div>
                        <div className="city-info">
                            <h3>{images3[index].name}</h3>
                            <img src={images3[index].src} alt="" className='city rounded' />
                        </div>
                        <div className="city-info">
                            <h3>{images4[index].name}</h3>
                            <img src={images4[index].src} alt="" className='city rounded' />
                        </div>
                    </div>
                </div>
                <button onClick={handleNext} className="boton carousel-control-next-icon align-self-center"></button>
            </div>
        </div>
    )
}

export default Carousel