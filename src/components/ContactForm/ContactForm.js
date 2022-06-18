import React from 'react'
import "../ContactForm/ContactForm.css"

const ContactForm = () => {
  return (
    <div className='container'>
      <form>
        
            <label >Email</label>
        <input placeholder='Enter your Email' className='emailinput'  type="email" ></input>
       

       
        <label >Message</label>
        <textarea rows="9"  placeholder='Write Someting here...' className='messageinput'></textarea>
  

        
          <button className='sendbtn'>Send</button>
       
 
          </form>

    </div>
  )
}

export default ContactForm