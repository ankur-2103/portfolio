import React from 'react'
import Project from './Project'
import './Projects.css';
import route from '../Img/route-svgrepo-com.svg'
import transcript from '../Img/transcript-svgrepo-com.svg'
import weather from '../Img/weather-svgrepo-com.svg'
import homely from '../Img/homely-svgrepo-com.svg'
import toxic from '../Img/toxic-svgrepo-com.svg'
import chat from '../Img/chat-svgrepo-com.svg'

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
      title: 'Chat Room',
      desec: 'A react application desinged for desktop to create rooms and chat with friends',
      live: 'https://chat-room-app-c9c1c.web.app/',
      code:'https://github.com/ankur-2103/chat-room-app',
      logo: chat,
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
    {
      title: 'Homely',
      desec: 'A android application developed for broker which allows for browsing and making property deals with broker',
      live: '',
      code:'https://github.com/ankur-2103/Homely',
      logo: homely,
    },
    {
      title: 'Toxicity Detector',
      desec: 'A backend application (BOT) made using node.js for detecting and deleting toxic messages.',
      live: '',
      code:'https://github.com/ankur-2103/toxicity-detector',
      logo: toxic,
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