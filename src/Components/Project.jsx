import React from 'react'
import react from '../Img/route-svgrepo-com.svg'
import play from '../Img/play-circle-svgrepo-com.svg'
import code from '../Img/code-circle-svgrepo-com.svg'
import './Project.css';


const Project = ({data}) => {
  return (
      <div className='project-container' >
        <img className='project-img' src={data.logo} alt='' />
        <div className='project'>
          <div className='project-info'>
            <div className='project-title'>{data.title}</div>
          <div className='project-desc' >{data.desec}</div>
          </div>
          <div className='project-links' >
          <a className='project-live' href={data.live}><img src={play} style={{width:'35px', margin:'5px'}} alt=''/>Live</a>
          <a className='project-code' href={data.code}><img src={code} style={{width:'35px', margin:'5px'}} alt=''/>Code</a>
          </div>
        </div>
    </div>
  )
}

export default Project