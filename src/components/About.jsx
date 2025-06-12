import React from 'react'
import profilePhoto from './Profile.JPG'

const About = () => {
  return (
    <section id= 'about' className="about">

       <div className="flex">

          <img src={profilePhoto} alt="profile" />

          <div>
             <h1>HI, I AM MIRACLE CHINAZAM AGITA</h1>
             <h3>A FULL STACK WEB DEVELOPER</h3>
          </div>

        </div>
            
          <div className="flex2">
              <h2>ABOUT ME</h2>
              <br />
              <p>I'm a dedicated, skilled and enthusiastic Full Stack Developer with expertise in both front-end and back-end development.<br />
              Proficient in Javascript, React, Python, and Django.</p>

              <p>I have strong passion for building scalabe, high performance web applications. I am committed to writing clean, <br />
              efficient codes and continuously improving my technical skill set.</p>

              <p>I am always curious, always learning, and always exicted to dive into new tech and projects that challenge me to grow. <br />
              Let's create something awesome together!</p>

              <p>I'm looking for a collaborative opportunities, i'm eager to work with like-minded individuals, share knowledge and learn <br />
              from others. I'm excited to take complex projects, experiment with innovative solutions, and grow as a developer.</p>
          </div>



    </section>
  )
}

export default About