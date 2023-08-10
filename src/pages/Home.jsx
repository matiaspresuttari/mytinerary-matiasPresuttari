import React from 'react'
import Hero from '../components/Hero'
import Carousel from '../components/Carousel'
import Main from '../layouts/main'

const Home = () => {
    return (
        <>
            <Main>
                <Hero/>
                <Carousel/>
            </Main>
        </>
    )
}

export default Home