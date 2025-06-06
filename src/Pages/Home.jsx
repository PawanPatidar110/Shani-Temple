import React from 'react'
import Header from '../Components/Header'
import Glimpses from '../Components/Glimpses'
import MandirTiming from '../Components/MandirTiming'
import ShaniCalendar from './ShaniCalendar'


const Home = () => {
    return (
        <>
            <Header />
            <MandirTiming />
            <Glimpses />

            <div className='h-fit'>
                <ShaniCalendar />
            </div>

        </>
    )
}


export default Home;