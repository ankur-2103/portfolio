import React from 'react'
import Project from './Project'
import './Projects.css';
import route from '../Img/route-svgrepo-com.svg'
import transcript from '../Img/transcript-svgrepo-com.svg'
import weather from '../Img/weather-svgrepo-com.svg'

const Projects = () => {

  const projectData = [

    {
      title: 'Shortest Path Visualizer',
      desec: 'A react path finding application desinged for desktop to find shortest path on the matrix',
      live: 'https://ankur-2103.github.io/shortest-path-visualizer/',
      code:'https://github.com/ankur-2103/shortest-path-visualizer/',
      logo: route,
    },
    {
      title: 'Sync Transcript with Audio',
      desec: 'A react application used for synchronizing transcript with audio',
      live: 'https://ankur-2103.github.io/sync-transcript-with-audio/',
      code:'https://github.com/ankur-2103/sync-transcript-with-audio/',
      logo: transcript,
    },
    {
      title: 'Weather App',
      desec: 'A react application used for checking weather in any city of the world',
      live: 'https://weather-app-900ea.web.app/',
      code:'https://github.com/ankur-2103/weather-app',
      logo: weather,
    },

  ]

  return (
    <div className='projects-container' > 
      <div className='projects-title' >PROJECTS</div>
      <div className='projects'>
        {projectData.map((data, i) => <Project data={data} key={i} />)}
      </div>
    </div>
  )
}

export default Projects