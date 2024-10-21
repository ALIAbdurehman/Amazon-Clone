import React from 'react'
import './home.css'
import Homebanner from './HomeBanner/homebanner'
import HomeDetails from './HomeDetails/homeDetails'

const Home = () => {
    
  return (
    <div className='home'>
            <Homebanner />
            <HomeDetails />
    </div>
  )
}

export default Home