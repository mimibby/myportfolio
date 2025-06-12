import React from 'react'
import resume from '../assets/AgitaMiracle.pdf';

const Resume = () => {
  return (
    <div id='resume' className='resume-section'>
        <h1>MY RESUME</h1>
        <a href={resume} download className='resume-link'>
            Download Resume
        </a>
    </div>
  )
}

export default Resume