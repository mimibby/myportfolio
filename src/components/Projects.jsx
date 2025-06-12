import React from 'react';
import '../App.css'; // Or wherever your CSS is stored

const Projects = () => {
  const projects = [
    {
      id: 1,
      src: '/images/kit8.png',
      alt: "Mimi's Kitchen Kouture",
      stack: ['HTML', 'React.Js', 'CSS'],
      linkDemo: 'https://kitchen-kouture.vercel.app/',
      linkCode: 'https://github.com/mimibby/kitchen-kouture'
    },
    {
      id: 2,
      src: '/images/weather-app.png',
      alt: 'Weather-app',
      stack: ['HTML', 'CSS', 'React.js'],
      linkDemo: 'https://weather-app-rosy-xi-31.vercel.app/',
      linkCode: 'https://github.com/mimibby/weather-app'
    },
    {
      id: 3,
      src: '/images/food-app.png',
      alt: 'Food-app',
      stack: ['HTML', 'CSS', 'React.JS'],
      linkDemo: 'https://food-app-one-chi.vercel.app/',
      linkCode: 'https://github.com/mimibby/food-app'
    },
    // {
    //   id: 4,
    //   src: '/images/quiz.jpg',
    //   alt: 'Quiz Game',
    //   stack: ['HTML', 'CSS', 'JavaScript' ],
    //   linkDemo: 'https://quiz-game-mu-jade.vercel.app/',
    //   linkCode: 'https://github.com/DorisAnioke/quiz-game/'
    // },
    // {
    //   id: 5,
    //   src: '/images/admin-dashboard.jpg',
    //   alt: 'Admin Dashboard',
    //   stack: ['React.JS', 'Chart.js', 'TailwindCSS'],
    //   linkDemo: 'https://example.com/demo5',
    //   linkCode: 'https://github.com/example5'
    // },
    // {
    //   id: 6,
    //   src: '/images/login-page.jpg',
    //   alt: 'Login Page',
    //   stack: ['HTML', 'CSS', 'JavaScript'],
    //   linkDemo: 'https://example.com/demo6',
    //   linkCode: 'https://github.com/example6'
    // }
  ];

  return (
    <section id='projects' className="projects-section">
      <h2 className="projects-title">PROJECTS</h2>
      <div className="projects-grid">
        {projects.map((project) => (
          <div key={project.id} className="projects-item">
            <img src={project.src} alt={project.alt} className="projects-image" />
            <h3 className="project-name">{project.alt}</h3>
            <div className="project-stack">
              {project.stack.map((tech, index) => (
                <span key={index} className="tech-badge">{tech}</span>
              ))}
            </div>
            <div className="project-buttons">
              <a href={project.linkDemo} target="_blank" rel="noopener noreferrer" className="project-btn">Demo</a>
              <a href={project.linkCode} target="_blank" rel="noopener noreferrer" className="project-btn">Code</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;