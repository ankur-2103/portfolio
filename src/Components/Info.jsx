import React from 'react'
import profile from '../Img/profile.png'
import phone from '../Img/phone-svgrepo-com.svg'
import location from '../Img/location-svgrepo-com.svg'
import email from '../Img/email-svgrepo-com.svg'
import linkedin from '../Img/linkedin-svgrepo-com.svg'
import github from '../Img/github-svgrepo-com.svg'
import leetcode from '../Img/leetcode-svgrepo-com.svg'
import './Info.css';

const Info = () => {
  return (
    <div className='container' >
      <img className='profile-img'  src={profile} alt='profile' />
      <div className='profile-title' >
          Hello, I am <span className='profile-span' >ANKUR VASTA</span>
      </div>
      <div className='profile-desc' >
          I am a Full Stack Developer working with MERN stack technology. I had completed my graduation in Bsc-Information Technology (2020-2023) from B.N.Bandodkar College of Science (Mumbai University). I have various projects to show case my skills on React application given below.
      </div>
      <div className='profile-contact' >
        <div style={{display:'flex', alignItems:'center', justifyContent:'center'}}><img src={phone} style={{width:'25px', margin:'5px'}} alt=''/>+91 9167400566</div>
        <div style={{display:'flex', alignItems:'center', justifyContent:'center'}}><img src={email} style={{width:'25px', margin:'5px'}} alt=''/>ankur.vasta@gmail.com</div>
        <div style={{display:'flex', alignItems:'center', justifyContent:'center'}}><img src={location} style={{width:'20px', margin:'5px'}} alt=''/>Mumbai, Maharashtra</div>
      </div>
      <div className='profile-link'>
        <a href='https://www.linkedin.com/in/ankur-vasta-910570226/'><img src={linkedin} style={{width:'35px', margin:'5px'}} alt=''/></a>
        <a href='https://github.com/ankur-2103'><img src={github} style={{width:'35px', margin:'5px'}} alt=''/></a>
        <a href='https://leetcode.com/ankur_21/'><img src={leetcode} style={{width:'35px', margin:'5px'}} alt=''/></a>
      </div>
    </div>
  )
}

export default Info