import React from 'react'
import Skill from './Skill'
import mongodb from '../Img/mongodb.svg'
import express from '../Img/express.svg'
import react from '../Img/react.svg'
import node from '../Img/node.svg'
import github from '../Img/github.svg'
import git from '../Img/git.svg'
import './Skills.css'

const Skills = () => {

  const skillData = [

    {
      title: 'MongoDB',
      desc: 'MongoDB is a source-available cross-platform document-oriented database program. Classified as a NoSQL database.',
      logo: mongodb,
    },
    {
      title: 'ExpressJS',
      desc: 'Express.js is a back end web application framework for Node.js. It is designed for building web applications and APIs.',
      logo: express,
    },
    {
      title: 'ReactJS',
      desc: 'React is a  front-end JavaScript library for building user interfaces based on UI components',
      logo: react,
    },
    {
      title: 'NodeJs',
      desc: 'Node.js is an back-end JavaScript runtime environment that executes JavaScript code outside a web browser.',
      logo: node,
    },
    {
      title: 'Git',
      desc: 'Git is a distributed version control system that tracks changes in any set of computer files.',
      logo: git,
    },
    {
      title: 'GitHub',
      desc: 'GitHub is an Internet hosting service for software development and version control using Git.',
      logo: github,
    }
  ]

  return (
    <div className='skills-container' > 
      <div className='skills-title' >SPECIALIZATION</div>
      <div className='skills'>
        {skillData.map((data, i)=><Skill data={data} key={i}/>)}
      </div>
    </div>
  )
}

export default Skills