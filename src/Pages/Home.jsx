import React from 'react'
import Header from '../Components/Header'
import Glimpses from '../Components/Glimpses'
import MandirTiming from '../Components/MandirTiming'
import ShaniCalendar from './ShaniCalendar'
import FallingLeaves from '../Components/FallingLeaves'

const Home = () => {
    return (
        <>
            <Header />
            <Glimpses />
            <MandirTiming />
            <div className='h-fit'>
                <ShaniCalendar />
            </div>

        </>
    )
}


export default Home;