import React, { useRef, useState } from 'react'
import phone from '../Img/phone-svgrepo-com.svg'
import location from '../Img/location-svgrepo-com.svg'
import email from '../Img/email-svgrepo-com.svg'
import linkedin from '../Img/linkedin-svgrepo-com.svg'
import emailjs from '@emailjs/browser';
import { toast } from "react-toastify";
import './Connect.css';

const Connect = () => {

  const form = useRef();
  const [name, setName] = useState()
  const [emailTxt, setEmail] = useState()
  const [message, setMessage] = useState()

  const handleSubmit = () => {
    
    console.log(form.current)

    if (!emailTxt || !name || !message) {
      toast.error('All Fields Required', {
        position: "top-center",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      return;
    }

    emailjs.sendForm('service_9qmjtzk', 'template_p6787o8', form.current, 'sy9NQnNo3go2PU2kT')
      .then((result) => {
        toast.success('Message Send', {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        setEmail('')
        setName('')
        setMessage('')
      }, (error) => {
        toast.error('Failed to send message', {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          });
      });
  }

  return (
    <div className='connect-container'>
      <div className='connect'>
        <div>
          <div className='connect-title'>Let's Connect!</div>
          <div className='connect-desc'>Send me a message</div>
        </div>
        <div className='connect-div' >
          <form className='connect-form' ref={form}>
            <div className='connect-form-div'>
              <div className='connect-form-div-title'>Your Name</div>
              <input className='connect-form-div-input' onChange={(e)=>setName(e.target.value)} value={name} type='text' name="user_name" spellCheck='false'/>
            </div>
            <div className='connect-form-div'>
              <div className='connect-form-div-title'>Your Email</div>
              <input className='connect-form-div-input' onChange={(e)=>setEmail(e.target.value)} value={emailTxt} type='email' name="user_email" spellCheck='false'/>
            </div>
            <div className='connect-form-div'>
              <div className='connect-form-div-title'>Message</div>
              <textarea className='connect-form-div-textarea' onChange={(e)=>setMessage(e.target.value)} value={message} rows="5" name="message" type='text' spellCheck='false'/>
            </div>
            <div onClick={handleSubmit} style={{width:'100%', height:'40px',  borderRadius:'10px', border:'2px solid white', cursor:'pointer', display:'flex', alignItems:'center', justifyContent:'center', fontSize:'24px'}}>SEND</div>
          </form>
          <span className='connect-span' ></span>
          <div className='connect-contact'>
            <div className='connect-element'><img className='connect-img' src={phone} alt=''/>+91 9167400566</div>
            <div className='connect-element'><img className='connect-img' src={email} alt='' />ankur.vasta@gmail.com</div>
            <div className='connect-element'><img className='connect-img' src={location} alt=''/>Mumbai, Maharashtra</div>
            <a className='connect-linkedin' href='https://www.linkedin.com/in/ankur-vasta-910570226/'><img className='connect-img' src={linkedin} alt=''/></a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Connect