import React from 'react'
import { Link } from 'react-router-dom'
import spacevideo from "../assets/spacevideo.mp4"
import "./Video.css"


const Video = () => {
  return (
    <div className="container">
        <video autoPlay loop muted id='video'>
            <source src={spacevideo} type='video/mp4'/>
        </video>
        <div className='content'>
           <h1> Journey through the Space</h1>
           <p>World's First civilian space travel</p>
        
        <div>
            <Link to='/training' className='train-btn'>Training</Link>
            <Link to="/contacts" className='launch-btn'>Launch</Link>
        </div>
        </div>


    </div>
  )
}

export default Video