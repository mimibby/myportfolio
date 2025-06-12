import React from 'react'
import { FaHtml5, FaCss3, FaJs, FaReact, } from 'react-icons/fa';
import { SiMysql, SiDjango, SiPython } from 'react-icons/si';

const Skills = () => {
  return(
    <section id='skills' className='skills'>
      <h2>SKILLS</h2>
      <div className='skills-grid'>
        <div className='skill-card'>
          <FaHtml5 className='html-icon'/>
          <h3>HTML</h3>
        </div>
        <div className='skill-card'>
          <FaCss3 className='css-icon'/>
          <h3>CSS</h3>
        </div>
        <div className='skill-card'>
          <FaJs className='js-icon'/>
          <h3>JavaScript</h3>
        </div>
        <div className='skill-card'>
          <FaReact className='react-icon'/>
          <h3>React Js</h3>
        </div>
        <div className='skill-card'>
          <SiPython className='py-icon'/>
          <h3>Python</h3>
        </div>
        <div className='skill-card'>
          <SiDjango className='django-icon'/>
          <h3>Django</h3>
        </div>
        <div className='skill-card'>
          <SiMysql className='mysql-icon'/>
          <h3>Mysql</h3>
        </div>
      </div>
      
    </section>
  )
}

export default Skills