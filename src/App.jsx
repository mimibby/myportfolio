import React from 'react'
import './App.css'
import './index.css'
import Header from './components/Header'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Resume from './components/Resume'
import Footer from './components/Footer'



const App = () => {
  return (
  <div className="App">
    <Header/>
    <About/>,
    <Skills/>
    <Projects/>,
    <Contact/>,
    <Resume/>,
    <Footer/>,
  </div>
  )
}

export default App
