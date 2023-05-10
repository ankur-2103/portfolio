import React from 'react'
import './Skill.css'

const Skill = ({data}) => {
  return (
    <div className='skill-container' >
        <div className='skill-div' >
            <img className='skill-logo' src={data.logo} alt='' />  
              <div className='skill-info' >
                  <div className='skill-title' >{data.title}</div>
                  <div className='skill-desc' >{data.desc}</div>
            </div>
        </div>
    </div>
  )
}

export default Skill