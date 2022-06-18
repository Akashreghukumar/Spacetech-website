import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import {FaBars,FaTimes} from 'react-icons/fa'
import "./Navbar.css"

const Navbar = () => {
    const [click,setClick]=useState(false)
    const handleclick=()=>{
        setClick(!click)
        console.log("CLICK",click)
    }
  return (
    <div  className='navbar' >
        <h2>SPACE TECH</h2>

        <ul  className='navbuttons'>
            <li className='navbutton'>
                <Link to='/'>Home</Link> 
            </li>
            <li className='navbutton'>
                <Link to='/explore'>Explore</Link> 
            </li>
            <li className='navbutton'>
                <Link to='/training'>Training</Link> 
            </li>
            <li className='navbutton'>
                <Link to='/contacts'>Contact</Link> 
            </li>
            

        </ul>
      <div className='hamburger' onClick={handleclick}>
          {
              click?(<FaTimes size={20} style={{color:"white"}} />):  
              (<FaBars size={20} style={{color:"white"}}  />)
          }
    

      </div>
    </div>
  )
}

export default Navbar